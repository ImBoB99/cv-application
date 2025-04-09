function PracticalExperienceInfo({ practicalExperienceInfo, handlePracticalExperienceChange, handleDeleteExperience }) {
  const handleChange = (event) => {
    handlePracticalExperienceChange(event);
  };

  return (
    <>
      <div className="form-group-container">
        <h2>Practical Experience Info Section</h2>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            onChange={handleChange}
            value={practicalExperienceInfo.companyName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="positionTitle">Position Title</label>
          <input
            type="text"
            name="positionTitle"
            id="positionTitle"
            onChange={handleChange}
            value={practicalExperienceInfo.positionTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mainResponsibilities">Main Responsibilities</label>
          <input
            type="text"
            name="mainResponsibilities"
            id="mainResponsibilities"
            onChange={handleChange}
            value={practicalExperienceInfo.mainResponsibilities}
          />
        </div>
        <div className="form-group">
          <label htmlFor="workedFromDate">Worked From Date</label>
          <input
            type="date"
            name="workedFromDate"
            id="workedFromDate"
            onChange={handleChange}
            value={practicalExperienceInfo.workedFromDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="workedUntilDate">Worked Until Date</label>
          <input
            type="date"
            name="workedUntilDate"
            id="workedUntilDate"
            onChange={handleChange}
            value={practicalExperienceInfo.workedUntilDate}
          />
        </div>
        <button type="button" onClick={handleDeleteExperience}>Delete Job</button>
      </div>
    </>
  );
}

export default PracticalExperienceInfo;
