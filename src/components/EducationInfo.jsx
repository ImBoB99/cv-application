function EducationInfo({ educationInfo, setEducationInfo }) {
  const handleChange = (event) => {
    const {name, value} = event.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  return (
    <>
      <div className="form-group-container">
        <h2>Education Info Section</h2>
        <div className="form-group">
          <label htmlFor="schoolName">School Name</label>
          <input type="text" name="schoolName" id="schoolName" onChange={handleChange} value={educationInfo.schoolName} />
        </div>
        <div className="form-group">
          <label htmlFor="studyTitle">Study Title</label>
          <input type="text" name="studyTitle" id="studyTitle" onChange={handleChange} value={educationInfo.studyTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="studyDate">Study Date</label>
          <input type="date" name="studyDate" id="studyDate" onChange={handleChange} value={educationInfo.studyDate} />
        </div>
      </div>
    </>
  );
}

export default EducationInfo;
