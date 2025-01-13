import { useState } from "react";
import {useForm} from "react-hook-form";
import './style.css';

export default function AddWorker(add,chooseone){
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([])
  
    let {register, handleSubmit,formState:{isValid,errors}, setValue }= useForm({
        mode:"all"
    })
    const save = (values)=>{
        alert("ok")
        add(values)
    }
    
    function chooseadrres(e){
        setValue("status","search");
        setQuery(e.target.value);
        setLoading(true);
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`)
        .then(response => response.json())
        .then(data => {setResult(data), setLoading(false)})
        .catch(error => {console.log(error), setLoading(false)})
    }

   
    // const customIcon = new L.Icon({
    //   iconUrl: 'https://example.com/path/to/custom-marker-icon.png',
    //   iconSize: [25, 41], // שינוי הגודל לפי הצורך
    //   iconAnchor: [12, 41],
    //   popupAnchor: [1, -34],
    // });
    return(<><form noValidate action="" onSubmit={handleSubmit(save)} className="form-container">
        <h2>finding colleagues for a collaborative office</h2>
        <div className="form-group">
        <input {...register("name",{required:true})} type="text" placeholder="name"/>
        {errors.name&&<div style={{color:"red"}}>name is must</div>}</div>
        <div className="form-group">
        <input {...register("addres")} type="text" placeholder="addres" onChange={chooseadrres}/>
        {loading&&<div>loading...</div>}
        <div className="address-results">{result.map((item,index)=>(
            <button key={index} onClick={()=>chooseone(item)}>{item.display_name}</button>
            
        ))}</div>
            </div>
            <div className="form-group">
        <input {...register("phone")} type="text" placeholder="phone number"/></div>
        <div className="form-group">
            <input {...register("emailworker",{
                pattern:{value:/^[A-Za-z]{3,8}@(gmail.co|gmail.com)$/,message:"email not valide"}
            })}type="email" placeholder="email"/>
            {errors.emailworker&&<div style={{color:"red"}}>{errors.emailworker.message}</div>}</div>
            <div className="form-group">
            <label htmlFor="">need wi-fi:</label><input {...register("wi-fi")} type="Checkbox" name="" id="" /></div>
            <div className="form-group">
            <label htmlFor="">need kitchen:</label><input {...register("kitchen")} type="Checkbox" name="" id="" /></div>
            <div className="form-group">
            <label htmlFor="">need coffee machine:</label><input {...register("coffe")} type="Checkbox" name="" id="" /></div>
            <div className="form-group">
            <input {...register("rooms")} type="Number" placeholder="num rooms"/></div>
            <div className="form-group">
            <input {...register("distance")} type="Number" placeholder="distance willing to go away"/></div>
            
            <input {...register("status")} type="text" defaultValue={"searche"} style={{display:"none"}}/>
       


            <input type="submit" disabled={!isValid}/>
            </form>
            
            
    
    
           </>
    )
}