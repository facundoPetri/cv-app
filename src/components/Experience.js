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
        onSubmit={(e) => props.handleSubmit("experience", e)}
      >
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => props.handleChange("experience", e)}
        />

        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => props.handleChange("experience", e)}
        />

        <input
          type="text"
          name="main"
          value={main}
          onChange={(e) => props.handleChange("experience", e)}
        />

        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => props.handleChange("experience", e)}
        />

        <button className="add">Add</button>
      </form>
      </div>
      <hr />
    </div>
  );
};

export default Experience;
