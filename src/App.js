import React, { useState } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    city: "buenos aires",
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [educationArray, setEducationArray] = useState([]);

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    main: "",
    date: "",
  });

  const [experienceArray, setExperienceArray] = useState([]);

  const [preview, setPreview] = useState(true);

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    setEducationArray([
      ...educationArray,
      {
        school: education.school,
        title: education.title,
        date: education.date,
      },
    ]);
    setEducation({
      school: "",
      title: "",
      date: "",
    });
  };

  const handleExperienceSubmit = (event) => {
    event.preventDefault();
    setExperienceArray([
      ...experienceArray,
      {
        company: experience.company,
        position: experience.position,
        main: experience.main,
        date: experience.date,
      },
    ]);
    setExperience({ company: "", position: "", main: "", date: "" });
  };

  const removeEducationItem = (idd) => {
    setEducationArray(educationArray.filter((item, id) => id !== idd));
  };

  const removeExperienceItem = (idd) => {
    setExperienceArray(experienceArray.filter((item, id) => id !== idd));
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  };

  const handleExperienceChange = (event) => {
    const { name, value } = event.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleDataChange = (setData, data, event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const previewText = preview ? "Preview" : "Edit";
  return (
    <div className="App">
      <h1>CV App</h1>
      {preview && (
        <div>
          <General
            general={generalInfo}
            handleChange={handleDataChange}
            setGeneralInfo={{ setData: setGeneralInfo, general: generalInfo }}
          />
          <Education
            education={education}
            handleChange={handleEducationChange}
            handleSubmit={handleEducationSubmit}
          />
          <Experience
            experience={experience}
            handleChange={handleExperienceChange}
            handleSubmit={handleExperienceSubmit}
          />
        </div>
      )}

      {!preview && (
        <Preview
          general={generalInfo}
          education={educationArray}
          experience={experienceArray}
          removeEducation={removeEducationItem}
          removeExperience={removeExperienceItem}
        />
      )}

      <button className="preview-button" onClick={() => setPreview(!preview)}>
        {previewText}
      </button>
    </div>
  );
}

export default App;
