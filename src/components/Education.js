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
          onSubmit={props.handleSubmit}
        >
          <input
            type="text"
            name="school"
            value={school}
            onChange={props.handleChange}
          />

          <input
            type="text"
            name="title"
            value={title}
            onChange={props.handleChange}
          />

          <input
            type="date"
            name="date"
            value={date}
            onChange={props.handleChange}
          />

          <button className="add">Add</button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default Education;
