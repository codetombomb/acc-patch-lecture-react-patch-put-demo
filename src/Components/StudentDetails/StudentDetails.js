import Detail from "../Detail/Detail"
import { v4 as uuidv4 } from 'uuid';
import "./StudentDetails.css"

const StudentDetails = ({student}) => {
    
  return (
    <section className="student-details">
      <h1>Student Details</h1>
      {Object.entries(student).map(entry => <Detail key={uuidv4()} name={entry[0]} value={entry[1]}/>)}
      </section>
  )
}
export default StudentDetails