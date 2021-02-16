import React from "react";

const Experience = (props) => {
  const { company, position, main, date } = props.experience;
  return (
    <div>
      <h3>Practical Experience</h3>
      <div className="box">
        <div className="box-item">
          <label>Company Name</label>
          <label>Position</label>
          <label>Main Tasks</label>
          <label>Date</label>
        </div>
      <form
        className="box-item"
        onSubmit={props.handleSubmit}
      >
        <input
          type="text"
          name="company"
          value={company}
          onChange={props.handleChange}
        />

        <input
          type="text"
          name="position"
          value={position}
          onChange={props.handleChange}
        />

        <input
          type="text"
          name="main"
          value={main}
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

export default Experience;
