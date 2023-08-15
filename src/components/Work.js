import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import workCardData from "./WorkCardData"




import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {workCardData.map((val, ind) =>{
            return(
                <workCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
           })}
        </div>
    </div>
  )
}

export default Work