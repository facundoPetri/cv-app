import React from "react";

const Education = (props) => {
  const { school, title, date } = props.education;
  return (
    <div>
      <h3>Educational Experience</h3>
      <div className="box">
        <div className="box-item">
          <label>School Name</label>
          <label>Title</label>
          <label>Date</label>
        </div>
        <form
          className="box-item"
          onSubmit={(e) => props.handleSubmit("education", e)}
        >
          <input
            type="text"
            name="school"
            value={school}
            onChange={(e) => props.handleChange("education", e)}
          />

          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => props.handleChange("education", e)}
          />

          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => props.handleChange("education", e)}
          />

          <button className="add">Add</button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default Education;
