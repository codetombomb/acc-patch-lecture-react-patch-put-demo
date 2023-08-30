import "./EditFormSection.css"
import { useState } from "react";

const EditFormSection = ({handleUpdateStudent}) => {

  const [formData, setFormData] = useState({
    student_id: "",
    github_username: "",
    email: "",
    first_name: "",
    last_name: "",
    age: "",
    program: "",
    cohort: "",
    location: "",
    career_goal: "",
    enrollment_date: "",
    graduation_date: "",
  })

  const onInputChange = (e) => {
    const formDataCopy = {...formData}
    if (e.target.name === "age"){
      formDataCopy[e.target.name] = parseInt(e.target.value)
    } else {
      formDataCopy[e.target.name] = e.target.value
    }
    setFormData(formDataCopy)
  }

  const removeBlankEntries = () => {
    const result = {};
    debugger
    Object.entries(formData)
      .filter((entry) => entry[1])
      .forEach((entry) => (result[entry[0]] = entry[1]));
    return result;
  };

  const onFormSubmit = (e) => {
    e.preventDefault()

    const updatedStudentData = removeBlankEntries();
    debugger
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudentData),
    };

    fetch("http://localhost:3001/students/1", config)
      .then(resp => resp.json())
      .then(data => handleUpdateStudent(data))

      setFormData({
        student_id: "",
        github_username: "",
        email: "",
        first_name: "",
        last_name: "",
        age: "",
        program: "",
        cohort: "",
        location: "",
        career_goal: "",
        enrollment_date: "",
        graduation_date: "",
      });

  }
    

  return (
    <section className="edit-student-form-section">
      <form className="edit-student-form" onSubmit={onFormSubmit}>
        <h1>Edit Student</h1>

        <label htmlFor="student-id">Student ID</label>
        <input id="student-id" name="student_id" type="text" value={formData.student_id} onChange={(e) => {
          console.log("typing in student id")
          onInputChange(e)
          }}/>

        <label htmlFor="github-username">GitHub Username</label>
        <input id="github-username" name="github_username" type="text" value={formData.github_username} onChange={onInputChange}/>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" value={formData.email} onChange={onInputChange}/>

        <label htmlFor="first-name">First Name</label>
        <input id="first-name" name="first_name" type="text" value={formData.first_name}  onChange={onInputChange}/>

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" name="last_name" type="text" value={formData.last_name} onChange={onInputChange}/>

        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" value={formData.age} onChange={onInputChange}/>

        <label htmlFor="program">Program</label>
        <input id="program" name="program" type="text" value={formData.program} onChange={onInputChange}/>

        <label htmlFor="cohort">Cohort</label>
        <input id="cohort" name="cohort" type="text" value={formData.cohort} onChange={onInputChange}/>

        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" value={formData.location} onChange={onInputChange}/>

        <label htmlFor="career-goal">Career Goal</label>
        <input id="career-goal" name="career_goal" type="text" value={formData.career_goal} onChange={onInputChange}/>

        <label htmlFor="enrollment-date">Enrollment Date</label>
        <input id="enrollment-date" name="enrollment_date" type="date" value={formData.enrollment_date} onChange={onInputChange}/>

        <label htmlFor="graduation-date">Graduation Date</label>
        <input id="graduation-date" name="graduation_date" type="date" value={formData.graduation_date} onChange={onInputChange}/>

        <input type="submit" />
      </form>
    </section>
  );
};
export default EditFormSection;
