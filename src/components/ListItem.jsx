import { useState } from "react";


function ListItem({text, onDelete}){
    //console.log(props);

    const [checked, setChecked] = useState(false);

    const handleCheck = ()=> {
        setChecked(!checked); //toma el valor que esta en el check box, y lo cambia, si es falso lo cambia a verdadero, y si esta en verdadero lo cambia a falso
    }
    return (
        <li className={`flex items-center justify-between rounded-md p-2 bg-indigo-800 ${checked ? 'text-green-400 line-through' : null}`}>
        <div>
        <input type="checkbox" checked={checked} onChange={handleCheck}/>
        <span>{text}</span>
        </div>
        
        <button onClick={onDelete} className="rounded-md bg-red-500 p-2 hover:bg-red-700">Delete</button>
    </li>
    
    )
}

export default ListItem;
