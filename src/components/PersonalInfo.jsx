import "../styles/PersonalInfo.css";

function PersonalInfo({ personalInfo, setPersonalInfo }) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <>
      <div className="form-group-container">
        <h2>Personal Info Section</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
