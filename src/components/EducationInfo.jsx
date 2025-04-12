function EducationInfo({ educationInfo, setEducationInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  return (
    <>
      <div className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Education Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">Insitution Name</label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              onChange={handleChange}
              value={educationInfo.schoolName}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="eg. ZZ Applied Sciences"
            />
          </div>
          <div>
            <label htmlFor="studyTitle" className="block text-sm font-medium text-gray-700 mb-1">Degree Title</label>
            <input
              type="text"
              name="studyTitle"
              id="studyTitle"
              onChange={handleChange}
              value={educationInfo.studyTitle}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="eg. Bachelor's Degree"
            />
          </div>
          <div>
            <label htmlFor="studyDate" className="block text-sm font-medium text-gray-700 mb-1">Graduation Date</label>
            <input
              type="date"
              name="studyDate"
              id="studyDate"
              onChange={handleChange}
              value={educationInfo.studyDate}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationInfo;
