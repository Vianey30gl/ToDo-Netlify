import React, { useState } from "react";
import ischeck, {calcularCompletados } from "../Contador/checkbox";
const ToDo = () => {
	const [tarea, setTarea] = useState('')
	const [tareas, setTareas] = useState([])
	    const ToDo = () => {
			if (tarea !== '' ){
				setTareas ([...tareas,tarea]);
				setTarea('');	
		}
	};

	//eliminar 

	const eliminarTarea = (i) => {
		const tareasNuev = tareas.filter((tarea,index) => index !== i);
        setTareas(tareasNuev);
	  };


	  const completeTodo = (index) => {
		
		let updatedTodos = tareas.map((tarea) => {
	
		 	if (tarea.index === index) {
		 	tarea.completed = !tarea.completed;
		   }
		   return tarea;
		});
		console.log(updatedTodos)
		setTarea(updatedTodos);
	  }
	
	
	const calcularCompletados = () => {
		let contador = 0;
		tareas.forEach((tarea) => {
		  if (tarea.completed) {
			contador += 1;
		  }
		  console.log(tarea)
		});
		return contador;
	  };
	  
	
	  const completed = calcularCompletados();

	return (
	<div>
	  <input
	   type="text"
	   className="input" 
	   placeholder="Ingresar Tarea"
	   value={tarea}
	   onChange={(e) => setTarea(e.target.value)}
	   />
      <button onClick={ToDo} className="btn1">Agregar</button>
	  <table>
		<thead>
			<tr>
				<th>Tareas Completadas</th>
               <p> {completed} </p>
			</tr>
		</thead>

		 <tbody> {tareas.map((tarea, index) => (		
				  <tr key={index}>
 				<td>{tarea}</td>
				 <td><button className="eli" onClick={() => eliminarTarea(index)}> ❌ </button></td>
				 <td><input type="checkbox"  onClick={() => completeTodo(index)} /></td>
 			  </tr>
			))}</tbody> 
	   </table>
	   
	</div>
	);
};
export default ToDo;


