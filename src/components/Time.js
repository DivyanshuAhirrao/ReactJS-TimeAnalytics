import React, { useState } from 'react'

const Time = () => {
    const date = new Date().toDateString();
    let time = new Date().toLocaleTimeString(); 
    // let day = new Date(date).getDay()
    
    
    const [ctime, setctime] = useState(time);
    
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setctime(time)
    };

    setInterval(UpdateTime,1000);

    return (
      <>
         <div className="frame">
            <h2> <span>DAY :-</span>{date}</h2>
            <h1><span>TIME:-</span> {ctime}</h1>
         </div>   
              
      </>
    
  )
}

export default Time