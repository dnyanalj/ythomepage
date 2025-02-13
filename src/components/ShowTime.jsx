import React from 'react'

function ShowTime() {
  setInterval(()=>{
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
    },1000);
  return (
    <div>
        {/* {hours}:{minutes}:{seconds} */}
        
    </div>
  )
}

export default ShowTime
