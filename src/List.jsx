export default function List(props){
    return(
        <ul>
            {props.arr.map((item)=>{return<li key={item.id}>{item.name}</li>})}
        </ul>)
    
    }