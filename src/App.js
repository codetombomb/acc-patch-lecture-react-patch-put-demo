import { useEffect, useState } from "react";
import "./App.css";
import EditFormSection from "./Components/EditFormSection/EditFormSection";
import StudentDetails from "./Components/StudentDetails/StudentDetails";

function App() {
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/students/1")
      .then((resp) => resp.json())
      .then((data) => setStudent(data));
  }, []);

  const onUpdateStudent = (updatedStudent) => {
    setStudent(updatedStudent)
  }

  return (
    <div className="App">
      <h1>Patch Demo</h1>
      <main className="main-section">
        <StudentDetails student={student} />
        <EditFormSection handleUpdateStudent={onUpdateStudent}/>
      </main>
    </div>
  );
}

export default App;
