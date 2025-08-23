import React, { useEffect, useState } from "react";
import "./Dashboard.css";
// import { db } from "../../database/firebase"; // Adjust your Firebase path
// import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import icon from "../../assets/person.png";
const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("active");

  // Fetch data from Firestore
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "applications"));
        const apps = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(apps);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchApplications();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    try {
      const appRef = doc(db, "applications", id);
      await updateDoc(appRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredActive = applications.filter(
    (app) =>
      app.status !== "Approved" &&
      (filter === "All" || app.service === filter) &&
      app.name.toLowerCase().includes(search.toLowerCase())
  );

  const completedApps = applications.filter(
    (app) =>
      app.status === "Approved" &&
      (filter === "All" || app.service === filter) &&
      app.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderTable = (apps, showActions = true) => (
    <table className="admin-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Applicant Name</th>
          <th>Service</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Files</th>
          <th>Status</th>
          {showActions && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {apps.length > 0 ? (
          apps.map((app, index) => (
            <tr key={app.id}>
              <td>{index + 1}</td> {/* Serial number */}
              <td>{app.name}</td>
              <td>{app.service}</td>
              <td>{app.phone}</td>
              <td>{app.email}</td>
              <td className="files-column">
                {app.files && Object.keys(app.files).length > 0 ? (
                  Object.entries(app.files).map(([key, url], i) => {
                    const fileName = key.replace(/-/g, " ");
                    return (
                      <div key={i} className="file-item">
                        <img src={icon} alt="no" width="15px" />
                        <a href={url} target="_blank" download>
                          {fileName}
                        </a>
                      </div>
                    );
                  })
                ) : (
                  <span className="no-file">No Files</span>
                )}
              </td>
              <td>
                <span className={`status ${app.status.toLowerCase()}`}>
                  {app.status}
                </span>
              </td>
              {showActions && (
                <td>
                  <select
                    value={app.status}
                    onChange={(e) => handleStatusChange(app.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={showActions ? 8 : 7}>No applications found</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <button
          className={activeTab === "active" ? "active" : ""}
          onClick={() => setActiveTab("active")}
        >
          Active Applications
        </button>
        <button
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed Applications
        </button>
      </div>

      <div className="main-content">
        <h1>Admin Dashboard</h1>

        <div className="controls">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Services</option>
            <option value="Passport">Passport</option>
            <option value="Study">Study Abroad</option>
            <option value="Work">Work Abroad</option>
            <option value="Visa">Visa</option>
          </select>

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {activeTab === "active" ? (
          <>
            <h2>Active Applications</h2>
            {renderTable(filteredActive, true)}
          </>
        ) : (
          <>
            <h2>Completed Applications</h2>
            {renderTable(completedApps, false)}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
