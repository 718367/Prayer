import "./Prayer.css"

function Prayer({name,time}) {
  return (
    <>
    
      <div className="times">
        <p className="name"> {name}</p>
        <p className="time">{time}</p>
      </div>
      
    </>
  )
}

export default Prayer