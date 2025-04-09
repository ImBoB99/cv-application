import EducationInfo from "./components/EducationInfo";
import PersonalInfo from "./components/PersonalInfo";
import PracticalExperienceInfo from "./components/PracticalExperienceInfo";

import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });
  const [practicalExperienceInfo, setPracticalExperienceInfo] = useState([{
    id: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workedFromDate: "",
    workedUntilDate: "",
  }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", { personalInfo, educationInfo, practicalExperienceInfo })
  }

  const handlePracticalExperienceChange = (id, event) => {
    const { name, value } = event.target;
    const newPracticalExperienceInfo = practicalExperienceInfo.map((experience) =>
      experience.id === id ? { ...experience, [name]: value } : experience
    );
    setPracticalExperienceInfo(newPracticalExperienceInfo);
  };

    // Function to add a new job experience
    const handleAddExperience = () => {
      setPracticalExperienceInfo([
        ...practicalExperienceInfo,
        { id: crypto.randomUUID(), companyName: "", positionTitle: "", mainResponsibilities: "", workedFromDate: "", workedUntilDate: "" },
      ]);
    };
  
    // Function to delete a job experience
    const handleDeleteExperience = (id) => {
      setPracticalExperienceInfo(practicalExperienceInfo.filter((experience) => experience.id !== id));
    };

  console.log(educationInfo, personalInfo, practicalExperienceInfo)

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}></PersonalInfo>
      <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo}></EducationInfo>
      {practicalExperienceInfo.map((experience) => (
        <PracticalExperienceInfo
          key={experience.id} // Use unique ID as the key
          practicalExperienceInfo={experience}
          handlePracticalExperienceChange={(e) => handlePracticalExperienceChange(experience.id, e)}
          handleDeleteExperience={() => handleDeleteExperience(experience.id)}
        />
      ))}

      <button type="button" onClick={handleAddExperience}>Add Another Job</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
