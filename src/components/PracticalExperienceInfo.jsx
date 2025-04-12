function PracticalExperienceInfo({
  index,
  isLastJob,
  practicalExperienceInfo,
  handlePracticalExperienceChange,
  handleDeleteExperience,
  handleAddExperience,
}) {
  const handleChange = (event) => {
    handlePracticalExperienceChange(event);
  };

  return (
    <>
      <div className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Practical Experience #{index + 1}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`companyName-${index}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id={`companyName-${index}`}
              onChange={handleChange}
              value={practicalExperienceInfo.companyName}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor={`positionTitle-${index}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Position Title
            </label>
            <input
              type="text"
              name="positionTitle"
              id={`positionTitle-${index}`}
              onChange={handleChange}
              value={practicalExperienceInfo.positionTitle}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor={`mainResponsibilities-${index}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Main Responsibilities
            </label>
            <input
              type="text"
              name="mainResponsibilities"
              id={`mainResponsibilities-${index}`}
              onChange={handleChange}
              value={practicalExperienceInfo.mainResponsibilities}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="eg. Frontend, Backend, API integration, SEO"
            />
          </div>

          <div>
            <label
              htmlFor={`workedFromDate-${index}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Worked From
            </label>
            <input
              type="date"
              name="workedFromDate"
              id={`workedFromDate-${index}`}
              onChange={handleChange}
              value={practicalExperienceInfo.workedFromDate}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor={`workedUntilDate-${index}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Worked Until
            </label>
            <input
              type="date"
              name="workedUntilDate"
              id={`workedUntilDate-${index}`}
              onChange={handleChange}
              value={practicalExperienceInfo.workedUntilDate}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-1">
          {isLastJob ? (
            <button
              type="button"
              onClick={handleAddExperience}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
            >
              Add Another Job
            </button>
          ) : (
            ""
          )}
          <button
            type="button"
            onClick={handleDeleteExperience}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Delete Job
          </button>
        </div>
      </div>
    </>
  );
}

export default PracticalExperienceInfo;
