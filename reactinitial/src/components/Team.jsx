import React, { useEffect, useState } from "react"

const Team = ({name, stadium, teamElement, franchiseplayers})=>{


const [isVoting, setIsVoting] = useState (false)
const [buttonText, setButtonText] = useState(true)
const [voted, setVoted] = useState(false)


const buttonToggle = ()=>{
    setButtonText(prevState=>!prevState)
}


const frenchPlayers= franchiseplayers.map(
    element=><div>{element.name} 
    <button disabled={isVoting} onClick={()=>sendPost(element.id)}>{voted? "VOTED":"VOTE"}</button> </div>)




const sendPost=(id)=>{
    setIsVoting(true)
    fetch('https://demoapi.com/api/vote', {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id}) 
      })

      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIsVoting(false) 
        setVoted(true)
        // setEmailAnimation(prevState=>!prevState)
    
    })
  }




    return(<>
    <div>NAME: {name}    </div>
    <div>STADIUM: {stadium}     </div>
    <button onClick={buttonToggle}>{buttonText? "show more": "show less"}</button>
    {!buttonText&&<span>Players:</span>&&frenchPlayers}

    
    </>)
}

export default Team