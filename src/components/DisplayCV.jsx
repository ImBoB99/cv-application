import { format } from "date-fns";

function DisplayCV({ personalInfo, educationInfo, practicalExperienceInfo, handleEdit }) {
  return (
    <div className="bg-white flex flex-col rounded-sm w-full md:w-2/3 xl:w-1/2 mx-auto my-8 py-8 px-4">
      <h2 className="block text-4xl font-bold mb-4 p-6 text-center">Generated CV</h2>
      <section className="flex flex-col gap-1 p-6">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Full Name: {personalInfo.fullName}
        </p>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Email: {personalInfo.email}
        </p>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Phone Number: {personalInfo.phoneNumber}
        </p>
      </section>

      <section className="flex flex-col gap-1 p-6">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Institution Name: {educationInfo.schoolName}
        </p>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Degree Title: {educationInfo.studyTitle}
        </p>
        <p className="block text-md font-medium text-neutral-900 mb-1">
          Graduation Date: {educationInfo.studyDate !== "" ? format(new Date(educationInfo.studyDate), "do 'of' MMMM, yyyy.") : ""}
        </p>
      </section>

      <section className="flex flex-col gap-1 p-6">
        <h3 className="text-xl font-semibold mb-4">Practical Experience</h3>
        {practicalExperienceInfo.map((experience, index) => (
          <div key={experience.id}>
            <h4 className="text-lg font-medium mb-2">Job {index + 1}</h4>
            <p className="block text-md font-medium text-neutral-900 mb-1">
              Company: {experience.companyName}
            </p>
            <p className="block text-md font-medium text-neutral-900 mb-1">
              Position: {experience.positionTitle}
            </p>
            <p className="block text-md font-medium text-neutral-900 mb-1">
              Main Responsibilities: {experience.mainResponsibilities}
            </p>
            <p className="block text-md font-medium text-neutral-900 mb-1">
              Worked From: {experience.workedFromDate !== "" ? format(new Date(experience.workedFromDate), "do 'of' MMMM, yyyy.") : ""}
            </p>
            <p className="block text-md font-medium text-neutral-900 mb-1">
              Worked Until: {experience.workedUntilDate !== "" ? format(new Date(experience.workedUntilDate), "do 'of' MMMM, yyyy.") : ""}
            </p>
          </div>
        ))}
      </section>

      <button
            onClick={handleEdit}
            className="w-1/2 mx-auto px-4 py-2 my-10 bg-green-700 text-white rounded-md hover:bg-green-600 transition cursor-pointer"
          >
            Edit Details
          </button>
    </div>
  );
}

export default DisplayCV;
