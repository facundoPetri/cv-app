import React, { Component } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        age: "",
        city: "buenos aires",
      },
      education: {
        school: "",
        title: "",
        date: "",
      },
      educationArray: [],
      experience: {
        company: "",
        position: "",
        main: "",
        date: "",
      },
      experienceArray: [],
      preview: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this)
  }

  handleSubmit(section, event) {
    event.preventDefault();
    this.setState((prevState) => {
      if (section === "education") {
        return {
          ...prevState,
          education: {
            school: "",
            title: "",
            date: "",
          },
          educationArray: [
            ...prevState.educationArray,
            {
              school: this.state.education.school,
              title: this.state.education.title,
              date: this.state.education.date,
            },
          ],
        };
      }
      return {
        ...prevState,
        experience: {
          company: "",
          position: "",
          main: "",
          date: "",
        },
        experienceArray: [
          ...prevState.experienceArray,
          {
            company: this.state.experience.company,
            position: this.state.experience.position,
            main: this.state.experience.main,
            date: this.state.experience.date,
          },
        ],
      };
    });
  }

  handleChange(section, event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [section]: { ...prevState[section], [name]: value },
      };
    });
  }

  removeItem(idd, section, event){
    this.setState(prevState => {
      return {
        ...prevState,
        [section]: prevState[section].filter((item, id) => id !== idd)
      }
    })
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        preview: !prevState.preview,
      };
    });
  }

  render() {
    const { handleChange, handleSubmit, handleClick, removeItem } = this;
    const previewText = this.state.preview ? "Preview" : "Edit";
    return (
      <div className="App">
        <h1>CV App</h1>
        {this.state.preview && (
          <div>
            <General general={this.state.general} handleChange={handleChange} />
            <Education
              education={this.state.education}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Experience
              experience={this.state.experience}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        )}

        {!this.state.preview && (
          <Preview
            general={this.state.general}
            education={this.state.educationArray}
            experience={this.state.experienceArray}
            remove={removeItem}
          />
        )}

        <button className="preview-button" onClick={handleClick}>
          {previewText}
        </button>

      </div>
    );
  }
}
export default App;
