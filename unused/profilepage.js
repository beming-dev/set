import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    businessSize: "",
    legalForm: "",
    transactionForm: "",
    turnoverIndication: 0,
    companyHistory: "",
    other: "",
    companyName: "",
    budget: 0,
    askingPrice: 0,
    photo: "", // URL of the photo
  });

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("/api/profile", userData)
      .then((response) => {
        console.log("Profile updated:", response.data);
        setIsEditMode(false); // Check if this line is executed
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        // Check if an error is caught here
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-whale mb-4">User Profile</h1>

      {!isEditMode ? (
        // Read-Only View
        <div className="bg-sand p-4 rounded-lg shadow-md">
          <p>
            <strong>Name:</strong> {userData.firstname} {userData.lastname}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Business Size:</strong> {userData.businessSize}
          </p>
          <p>
            <strong>Legal Form:</strong> {userData.legalForm}
          </p>
          <p>
            <strong>Transaction Form:</strong> {userData.transactionForm}
          </p>
          <p>
            <strong>Turnover Indication:</strong> {userData.turnoverIndication}
          </p>
          <p>
            <strong>Company History:</strong> {userData.companyHistory}
          </p>
          <p>
            <strong>Other Information:</strong> {userData.other}
          </p>
          <p>
            <strong>Company Name:</strong> {userData.companyName}
          </p>
          <p>
            <strong>Budget:</strong> {userData.budget}
          </p>
          <p>
            <strong>Asking Price:</strong> {userData.askingPrice}
          </p>
          <button
            className="mt-4 py-2 px-4 bg-whale text-white rounded hover:bg-whalehv"
            onClick={() => setIsEditMode(true)}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        // Edit View
        <form
          onSubmit={handleSubmit}
          className="bg-rock p-4 rounded-lg shadow-md"
        >
          {/* Basic Information Fields */}
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={userData.firstname}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={userData.lastname}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
          />

          {/* Company Information Fields */}
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="businessSize"
            placeholder="Business Size"
            value={userData.businessSize}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="legalForm"
            placeholder="Legal Form"
            value={userData.legalForm}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="transactionForm"
            placeholder="Transaction Form"
            value={userData.transactionForm}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="number"
            name="turnoverIndication"
            placeholder="Turnover Indication"
            value={userData.turnoverIndication}
            onChange={handleInputChange}
          />
          <textarea
            className="form-textarea mt-2 block w-full rounded border-gray-300"
            name="companyHistory"
            placeholder="Company History"
            value={userData.companyHistory}
            onChange={handleInputChange}
          />
          <textarea
            className="form-textarea mt-2 block w-full rounded border-gray-300"
            name="other"
            placeholder="Other Information"
            value={userData.other}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={userData.companyName}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="number"
            name="budget"
            placeholder="Budget"
            value={userData.budget}
            onChange={handleInputChange}
          />
          <input
            className="form-input mt-2 block w-full rounded border-gray-300"
            type="number"
            name="askingPrice"
            placeholder="Asking Price"
            value={userData.askingPrice}
            onChange={handleInputChange}
          />

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setIsEditMode(false)}
              type="submit"
              className="py-2 px-4 bg-whale text-white rounded hover:bg-whalehv"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              type="button"
              className="py-2 px-4 bg-grizzlybear text-white rounded hover:bg-grizzlybearhv"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
