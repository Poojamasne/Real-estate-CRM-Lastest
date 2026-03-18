import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddAgent.css";

const AddAgent = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    specialization: "Residential Sales",
    experience: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Basic validation (optional but recommended)
  if (!formData.name || !formData.email || !formData.phone) {
    alert("Please fill required fields");
    return;
  }

  // Get existing agents
  const storedAgents = localStorage.getItem("agentsData");
  let agents = storedAgents ? JSON.parse(storedAgents) : [];

  // Create new agent
  const newAgent = {
    id: agents.length > 0 ? Math.max(...agents.map(a => a.id)) + 1 : 1,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    location: formData.address || "",
    specialization: formData.specialization || "Residential Sales",
    experience: parseInt(formData.experience) || 0,
  };

  // Add to array
  const updatedAgents = [...agents, newAgent];

  // Save to localStorage
  localStorage.setItem("agentsData", JSON.stringify(updatedAgents));

  // Navigate back
  navigate("/agents");
};
  return (
<div className="aa-container">
  <div className="aa-header">
    <h2 >
    <span
      className="aa-breadcrumb-link"
      onClick={() => navigate("/agents")}
    >
    <span>Agent Management</span>
    </span>

       <span>›</span> 
       Add Agent
    </h2>
    <p>Add agent and their access</p>
  </div>

  <div className="aa-card">
    <form onSubmit={handleSubmit}>

      {/* Contact Details */}
      <h4 className="aa-section-title">Contact Details</h4>
      <div className="aa-row aa-row-3">
        <div className="aa-field">
          <label>Name</label>
          <input className="aa-input" name="name" placeholder="Riya Patil" />
        </div>

        <div className="aa-field">
          <label>Phone</label>
          <input className="aa-input" name="phone" placeholder="+91 98765 43210" />
        </div>

        <div className="aa-field">
          <label>Email</label>
          <input className="aa-input" name="email" placeholder="riya@email.com" />
        </div>
      </div>

      {/* Create ID */}
      <h4 className="aa-section-title">Create ID & Password</h4>
      <div className="aa-row aa-row-2">
        <div className="aa-field">
          <label>User Name</label>
          <input className="aa-input" name="username" placeholder="riya.patil@estate" />
        </div>

        <div className="aa-field">
          <label>Password</label>
          <input className="aa-input" type="password" name="password" placeholder="••••••••" />
        </div>
      </div>

      {/* Professional */}
      <h4 className="aa-section-title">Professional Details</h4>
      <div className="aa-row aa-row-2">
        <div className="aa-field">
          <label>Experience</label>
          <input className="aa-input" name="experience" placeholder="0" />
        </div>

        <div className="aa-field">
          <label>Specialization</label>
          <select className="aa-input" name="specialization">
            <option>Specialization</option>
            <option>Residential Sales</option>
            <option>Commercial Sales</option>
            <option>Rental Sales</option>
            <option>Luxury Properties</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <h4 className="aa-section-title">Address Information</h4>
      <div className="aa-row aa-row-3">
        <div className="aa-field">
          <label>Address</label>
          <input className="aa-input" name="address" placeholder="Blue apartment baner pune" />
        </div>

        <div className="aa-field">
          <label>City</label>
          <input className="aa-input" name="city" placeholder="Pune" />
        </div>

        <div className="aa-field">
          <label>State</label>
          <input className="aa-input" name="state" placeholder="Maharashtra" />
        </div>
      </div>

      {/* Buttons */}
      <div className="aa-actions">
        <button type="button" className="aa-cancel" onClick={() => navigate("/agents")}>
          Cancel
        </button>
        <button type="submit" className="aa-submit">
          Create Account
        </button>
      </div>

    </form>
  </div>
</div>
  );
};

export default AddAgent;