import React,{useState} from 'react'
// receive the card component
import RobotsCards from "../RobotsCards/RobotsCards"
// receive data from data.js file
import robotsArray from "../Data/data"
import "./RobotsList.css"

const RobotsList = () => {
  const [robots,setRobots] = useState(robotsArray)

  // console.log("Robots", robots)
  return (
    <div className="grid-layout">
      {/* map data*/}
      {/* // Display Cards Component */}
      {robots.map((robot)=> < RobotsCards {...robot} key={robot.id}/>)}
    </div>
  )
}

export default RobotsList