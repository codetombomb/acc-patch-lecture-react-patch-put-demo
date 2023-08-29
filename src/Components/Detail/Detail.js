import './Detail.css'

const Detail = ({name, value}) => {
  return (
    <div className="detail-wrapper">
        <h3>{name}</h3>
        <p>{value}</p>
    </div>
  )
}
export default Detail