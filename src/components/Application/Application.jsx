// Application.jsx
import React, { useState } from "react";
import "./Application.css";
import { db, storage } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Application = () => {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      // Extract basic info
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const message = formData.get("message");

      // Upload files to Firebase Storage
      const filesData = {};
      for (let [key, value] of formData.entries()) {
        if (value instanceof File && value.name) {
          const storageRef = ref(storage, `${service}/${Date.now()}-${value.name}`);
          await uploadBytes(storageRef, value);
          const url = await getDownloadURL(storageRef);
          filesData[key] = url;
        }
      }

      // Save data to Firestore
      await addDoc(collection(db, "applications"), {
        service,
        name,
        email,
        phone,
        message,
        status: "Pending",
        files: filesData,
        createdAt: new Date(),
      });

      alert("Maombi yako yamehifadhiwa kwa mafanikio!");
      e.target.reset();
      setService("");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Tatizo limejitokeza. Tafadhali jaribu tena.");
    }

    setLoading(false);
  };


  return (
    <div className="cont">
      <div className="form-container">
        <h1>Fomu ya Maombi ya Huduma</h1>
        <p>
          Tafadhali chagua huduma unayohitaji na jaza nyaraka zinazohitajika.
        </p>

        {/* Service Selector */}
        <div className="select-container">
          <select
          className="select-box"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value=""> ------Chagua Huduma------- </option>
            <option value="passport">Maombi ya Passport</option>
            <option value="study">Maombi ya Kusoma Nje</option>
            <option value="work">Maombi ya Kazi Nje</option>
            <option value="visa">Maombi ya Visa</option>
          </select>
        </div>

        {/* Form */}
        {service && (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Applicant Info */}
            <fieldset>
              <legend>Taarifa za Mwombaji</legend>
              <div className="form-group">
                <label htmlFor="name">Jina Kamili:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Barua Pepe:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Namba ya Simu:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </fieldset>

            {/* Passport */}
            {service === "passport" && (
              <fieldset>
          <legend>Huduma: Maombi ya Passport</legend>
          <div class="form-group">
            <p>
              <strong>Nyaraka Zinazohitajika:</strong> NIDA, Cheti chake na cha
              mzazi mmoja, Barua ya Mtendaji, Passport size soft copy.
            </p>
            <label for="passport-nida">Nakala ya NIDA:</label>
            <input
              type="file"
              id="passport-nida"
              name="passport-nida"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="passport-certificate">
              Nakala ya Cheti cha kuzaliwa:
            </label>
            <input
              type="file"
              id="passport-certificate"
              name="passport-certificate"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="passport-certificate-parent">
              Nakala ya Cheti cha kuzaliwa ya mzazi mmoja:
            </label>
            <input
              type="file"
              id="passport-certificate-parent"
              name="passport-certificate-parent"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="passport-mtendaji">Nakala ya Barua ya Mtendaji:</label>
            <input
              type="file"
              id="passport-mtendaji"
              name="passport-mtendaji"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="passport-photo">
              Picha ya Ukubwa wa Passport (soft copy):
            </label>
            <input
              type="file"
              id="passport-photo"
              name="passport-photo"
              accept=".jpg, .png .jpeg"
              required
            />
          </div>
        </fieldset>
            )}

            {/* Study Abroad */}
            {service === "study" && (
              <fieldset>
          <legend>Huduma: Maombi ya Kusoma Nje ya Nchi</legend>
          <div class="form-group">
            <p>
              <strong>Nyaraka Zinazohitajika:</strong> Passport, Vyeti, CV.
            </p>
            <label for="study-passport">Nakala ya Passport:</label>
            <input
              type="file"
              id="study-passport"
              name="study-passport"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-passport">cheti cha kuzaliwa au NIDA</label>
            <input
              type="file"
              id="study-passport"
              name="study-passport"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-certificates">
              Nakala za Vyeti (Mfano: Elimu, Shahada):
            </label>
            <input
              type="file"
              id="study-certificates"
              name="study-certificates"
              multiple
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-cv">Nakala ya Wasifu (CV):</label>
            <input
              type="file"
              id="study-cv"
              name="study-cv"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-cv">
              Barua 2-3 za Marejeo (Recomendation letter):
            </label>
            <input
              type="file"
              id="study-recomendation-letters-1"
              name="study-recomendation-letters-1"
              accept=".pdf, .docx, .doc"
              required
            />
            <input
              type="file"
              id="study-recomendation-letters-2"
              name="study-recomendation-letters-2"
              accept=".pdf, .docx, .doc"
              required
            />
            <input
              type="file"
              id="study-recomendation-letters-3"
              name="study-recomendation-letters-3"
              accept=".pdf, .docx, .doc"
            />
          </div>
          <div class="form-group">
            <label for="study-sponsor">
              Uthibitisho wa udhamini au uwezo wa kifedha
            </label>
            <input
              type="file"
              id="study-sponsor"
              name="study-sponsor"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-application-form">Fomu ya maombi ya chuo</label>
            <input
              type="file"
              id="study-application-form"
              name="study-application-form"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
          <div class="form-group">
            <label for="study-application-acceptance-letter">
              Barua ya kukubaliwa chuo(Admission Letter)
            </label>
            <input
              type="file"
              id="study-application-acceptance-letter"
              name="study-application-acceptance-letter"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
        </fieldset>
            )}

            {/* Work Abroad */}
            {service === "work" && (
               <fieldset>
          <legend>Huduma: Maombi ya Kazi Nje ya Nchi</legend>
          <div class="form-group">
            <p>
              <strong>Nyaraka Zinazohitajika:</strong> Passport, CV.
            </p>
            <label for="work-passport">Nakala ya Passport:</label>
            <input
              type="file"
              id="work-passport"
              name="work-passport"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="work-cv">Nakala ya Wasifu (CV):</label>
            <input
              type="file"
              id="work-cv"
              name="work-cv"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
          <div class="form-group">
            <label for="work-application-letter">
              Barua ya maombi ya kazi(Job offer letter):
            </label>
            <input
              type="file"
              id="work-application-letter"
              name="work-application-letter"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
          <div class="form-group">
            <label for="work-medical-checkup">
              Uthibitisho wa afya (medical check up):
            </label>
            <input
              type="file"
              id="work-medical-checkup"
              name="work-medical-checkup"
              accept=".pdf, .docx, .doc"
              required
            />
          </div>
        </fieldset>
            )}

            {/* Visa */}
            {service === "visa" && (
             <fieldset>
          <legend>Huduma: Maombi ya Visa</legend>
          <div class="form-group">
            <p>
              <strong>Nyaraka Zinazohitajika:</strong> Passport, Invitation
              Letter, Bank Statement.
            </p>
            <label for="visa-passport">Nakala ya Passport:</label>
            <input
              type="file"
              id="visa-passport"
              name="visa-passport"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="visa-invite">
              Nakala ya Barua ya Mwaliko au uthibitisho wa malipo ya shule/kazi(Invitation Letter):
            </label>
            <input
              type="file"
              id="visa-invite"
              name="visa-invite"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="visa-picture">
             Picha ya passport:
            </label>
            <input
              type="file"
              id="visa-picture"
              name="visa-picture"
              accept=" .jpg, .png .jpeg "
              required
            />
          </div>
          <div class="form-group">
            <label for="visa-request-form">
Form ya maombi ya visa:
            </label>
            <input
              type="file"
              id="visa-request-form"
              name="visa-request-form"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="visa-bank-statement">
             Uthibitisho wa fedha (Bank statement):
            </label>
            <input
              type="file"
              id="visa-bank-statement"
              name="visa-bank-statement"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>
          <div class="form-group">
            <label for="visa-ticket">
              Tiketi ya ndege (Booking):
            </label>
            <input
              type="file"
              id="visa-ticket"
              name="visa-ticket"
              accept=".pdf, .jpg, .png .jpeg"
              required
            />
          </div>

        </fieldset>
            )}

            {/* Optional Message */}
            <div className="form-group">
              <label htmlFor="message">Ujumbe (Hiari):</label>
              <textarea id="message" name="message" placeholder="Andika maelezo ya ziada hapa..."></textarea>
            </div>

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Inapakia..." : "Tuma Maombi"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Application;


















