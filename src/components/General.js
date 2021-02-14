const General = (props) => {
  const { firstName, lastName, phone, email, age, city } = props.general;
  return (
    <div>
      <h3>Personal Information</h3>
      <div className="box">
        <div className="box-item">
          <label>First Name</label>
          <label>Last Name</label>
          <label>Phone</label>
          <label>Email</label>
          <label>Age</label>
          <label>City</label>
        </div>
        <div className="box-item">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => props.handleChange("general", e)}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => props.handleChange("general", e)}
          />
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => props.handleChange("general", e)}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => props.handleChange("general", e)}
          />
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => props.handleChange("general", e)}
          />
          <select name="city" value={city} onChange={(e) => props.handleChange("general", e)}>
            <option value="cordoba">Cordoba</option>
            <option value="buenos aires">Buenos Aires</option>
            <option value="rosario">Rosario</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default General;
