import React, { useEffect, useState } from "react"
import Team from "./components/Team"


const App = () => {

  const [data, setData]= useState([])
  const [ search, setSearch ] = useState("")

  const getData=()=>{
    fetch("https://demoapi.com/api/teams").then(response=>response.json()).then(data=>{
      setData(data)
      console.log(data)
      // setIsLoading(false)
  }) 
  }

  useEffect( getData, [])

  // const teamElements = data.map(element=><Team  name={element.name}  stadium={element.stadium} franchiseplayers={element.franchisePlayers}  />   )
  // console.log(data)

  const filteredUsers = data ? data
  .filter(element => element.name.includes(search)) : []

  return (<>
    <h3>Series api</h3>
    <input
          type="text"
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)} />
    {/* {teamElements} */}

    {data && (
          <section>
            {filteredUsers.length ? filteredUsers
              .map(element => (
                <Team name={element.name}  stadium={element.stadium} franchiseplayers={element.franchisePlayers} />
              )) : <p>Nothing found</p> }
          </section>
    )
}

</>)
}
export default App
