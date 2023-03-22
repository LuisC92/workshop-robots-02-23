import React from 'react'
import "./RobotsCards.css"
const RobotsCards = (props) => {
  const {id, first_name, last_name, email, avatar } = props

  const greetings=()=>{
    alert(`Hello I'm ${first_name} ${last_name}!! Nice to meet you!`)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <h2>{`${first_name} ${last_name}`}</h2>
          <img className="robot-avatars" src={avatar} alt={`${first_name} ${last_name}`} />
          <br/>
          <p>{email}</p>
          <button onClick={greetings}>Greetings{" "}
                ✋{" "}</button>
        <br/>
        <br/>
        </div>

      </div>
    </>
  )
}

export default RobotsCards