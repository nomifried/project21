import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useForm} from "react-hook-form";
import './App.css'
import AddWorker from './Form'
   

// import List from './List'

function App() {
  let {register, handleSubmit,formState:{isValid,errors}, setValue }= useForm({
    mode:"all"
})


  // const [count, setCount] = useState(0)
  let [workers,setworkers] =useState([{id:0,tz:"123456789",name:"nomi",birthdate:"01/02/2020",emailworker:"nomi05832@gmail.com",numofexperience:5},
    {id:1,tz:"123477789",name:"esti",birthdate:"03/02/2020",emailworker:"no05832@gmail.com",numofexperience:4},
    {id:2,tz:"113456789",name:"nomi",birthdate:"01/02/2020",emailworker:"nom05832@gmail.com",numofexperience:6}
  ])
  function onadd(worker){
    worker.id = workers[workers.length-1].id + 1
    setworkers([...workers,worker])
  }
    return (<>
      <AddWorker add={onadd} />
      </>
    )
      // {/* <List arr={workers}/></> */}
    
}

export default App
