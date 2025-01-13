import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useForm} from "react-hook-form";

import './App.css'
import AddWorker from './Form'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
   

// import List from './List'

function App() {
  let {register, handleSubmit,formState:{isValid,errors}, setValue }= useForm({
    mode:"all"
})

  const [position, setPosition] = useState([32.0877639,34.8859985]);
  function chooseone(item){
        
    setValue("addres",item.display_name);
    setResult([]);
    setPosition([parseFloat(item.lat),parseFloat(item.lon)])
    setValue("status","found");
    
}
    const MapUpdater = () => {
        const map = useMap();
        map.setView(position, 13); // עדכון המפה עם המיקום החדש
        return null;
      };
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
      <AddWorker add={onadd} chooseone={chooseone}/>
      <div className="map-container">
        <MapContainer className="map" center={position} zoom={13} style={{ height: "400px", width: "100%", display:"flex" }} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapUpdater />
          <Marker position={position}>
            <Popup>
              מיקום: {position[0]}, {position[1]}
            </Popup>
          </Marker>
        </MapContainer>
        </div></>
    )
      // {/* <List arr={workers}/></> */}
    
}

export default App
