import EducationInfo from "./components/EducationInfo";
import PersonalInfo from "./components/PersonalInfo";
import PracticalExperienceInfo from "./components/PracticalExperienceInfo";
import DisplayCV from "./components/DisplayCV";

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
  const [practicalExperienceInfo, setPracticalExperienceInfo] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      workedFromDate: "",
      workedUntilDate: "",
    },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Submitted Data:", { personalInfo, educationInfo, practicalExperienceInfo });
    setIsSubmitted(true); // Set the submission state to true
  };

  const handlePracticalExperienceChange = (id, event) => {
    const { name, value } = event.target;
    const newPracticalExperienceInfo = practicalExperienceInfo.map((experience) =>
      experience.id === id ? { ...experience, [name]: value } : experience,
    );
    setPracticalExperienceInfo(newPracticalExperienceInfo);
  };

  // Function to add a new job experience
  const handleAddExperience = () => {
    setPracticalExperienceInfo([
      ...practicalExperienceInfo,
      {
        id: crypto.randomUUID(),
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        workedFromDate: "",
        workedUntilDate: "",
      },
    ]);
  };

  // Function to delete a job experience
  const handleDeleteExperience = (id) => {
    setPracticalExperienceInfo(
      practicalExperienceInfo.filter((experience) => experience.id !== id),
    );
  };

  // Go back to editing form details
  const handleEdit = () => {
    setIsSubmitted(false);
  };

  console.log(educationInfo, personalInfo, practicalExperienceInfo);

  return (
    <>
      {!isSubmitted && (
        <form
          className="bg-white flex flex-col rounded-sm w-full md:w-2/3 xl:w-1/2 mx-auto my-8"
          onSubmit={handleSubmit}
        >
          <h1 className="block text-4xl font-bold mb-4 p-6 text-center">
            CV Generator Odin Project
          </h1>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          ></PersonalInfo>
          <EducationInfo
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          ></EducationInfo>
          {practicalExperienceInfo.map((experience, index) => (
            <PracticalExperienceInfo
              key={experience.id} // Use unique ID as the key
              index={index}
              isLastJob={index === practicalExperienceInfo.length - 1 ? true : false}
              practicalExperienceInfo={experience}
              handlePracticalExperienceChange={(e) =>
                handlePracticalExperienceChange(experience.id, e)
              }
              handleDeleteExperience={() => handleDeleteExperience(experience.id)}
              handleAddExperience={handleAddExperience}
            />
          ))}
          <button
            type="submit"
            className="px-4 py-2 my-10 bg-green-700 text-white rounded-md mx-auto hover:bg-green-600 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      )}

      {isSubmitted && (
        <>
          <DisplayCV
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            practicalExperienceInfo={practicalExperienceInfo}
            handleEdit={handleEdit}
          />
        </>
      )}
    </>
  );
}

export default App;
