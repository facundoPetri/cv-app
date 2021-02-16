import React from "react";

const Preview = (props) => {
  const { firstName, lastName, phone, email, age, city } = props.general;

  const education = props.education.map((item, id) => {
    return (
      <div className="exp-item" key={id}>
        <p>School: {item.school}</p>
        <p>Title: {item.title}</p>
        <p>Date: {item.date}</p>
        <button className="add" onClick={() => props.removeEducation(id)}>Delete</button>
      </div>
    );
  });

  const experience = props.experience.map((item, id) => {
    return (
      <div className="exp-item" key={id}>
        <p>Comapny: {item.company}</p>
        <p>Position: {item.position}</p>
        <p>Main Tasks: {item.main}</p>
        <p>Date: {item.date}</p>
        <button className="add" onClick={() => props.removeExperience(id)}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <div className="exp-item">
        <h3>Personal Information</h3>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p style={{ textTransform: "capitalize" }}>City: {city}</p>
      </div>
      <hr />
      <h3>Educational Experience</h3>
      {education}
      <hr />
      <h3>Practical Experience</h3>
      {experience}
      <hr />
    </div>
  );
};

export default Preview;
