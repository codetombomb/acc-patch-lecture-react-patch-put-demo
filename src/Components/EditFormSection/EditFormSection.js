import "./EditFormSection.css"

const EditFormSection = () => {
  return (
    <section className="edit-student-form-section">
      <form className="edit-student-form" >
        <h1>Edit Student</h1>

        <label htmlFor="student-id">Student ID</label>
        <input id="student-id" name="student_id" type="text" />

        <label htmlFor="github-username">GitHub Username</label>
        <input id="github-username" name="github_username" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" />

        <label htmlFor="first-name">First Name</label>
        <input id="first-name" name="first_name" type="text" />

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" name="last_name" type="text" />

        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" />

        <label htmlFor="program">Program</label>
        <input id="program" name="program" type="text" />

        <label htmlFor="cohort">Cohort</label>
        <input id="cohort" name="cohort" type="text" />

        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" />

        <label htmlFor="career-goal">Career Goal</label>
        <input id="career-goal" name="career_goal" type="text" />

        <label htmlFor="enrollment-date">Enrollment Date</label>
        <input id="enrollment-date" name="enrollment_date" type="date" />

        <label htmlFor="graduation-date">Graduation Date</label>
        <input id="graduation-date" name="graduation_date" type="date" />

        <input type="submit" />
      </form>
    </section>
  );
};
export default EditFormSection;
