import React from 'react'
import { useState } from "react";
import {firebase} from '../../firebase'


export default function New() {
  const [nombre, setNombre] = useState("");
  const [desc, setDesc] = useState("");
  const [ubicacion, setubicacion] = useState("");
  const [urlimagen, setUrlImagen] = useState("");
  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])

 

//agregar Datos al Formulario

const agregar = async (e) => {
  e.preventDefault()

 if(!nombre.trim() || !desc.trim() || !ubicacion.trim() || !urlimagen.trim() ){

    console.log('está vacio')
    return
  }

  try {

    const db = firebase.firestore()
    const nuevaTarea = {
      name: nombre,
      address: ubicacion,
      profile:desc,
      url: urlimagen,

     
    }
    const data = await db.collection('directorio').add(nuevaTarea)

    setTareas([
      ...tareas,
      {...nuevaTarea, id: data.id}
    ])

    setTarea('')
    
  } catch (error) {
    console.log(error)
  }

  console.log(tarea)
}
//

  return (
    
    

//formulario

<div className="col-md-6">
          <h1>
            {
              'Agregar Datos de un Restaurante'
            }
          </h1>

            <br/>
          <form onSubmit={agregar}>
          <label htmlFor="formGroupExampleInput" className="form-label"><h2>Nombre del Restaurante</h2></label>
            <input 
              type="text"
              placeholder="Ingrese nombre del Restaurante"
              className="form-control mb-2"
              onChange={e => setNombre(e.target.value)}
              value={nombre}
            />
 <label htmlFor="formGroupExampleInput" className="form-label"><h2>Tipo de comida</h2></label>
<input 
              type="text"
              placeholder="Tipo de comida"
              className="form-control mb-2"
              onChange={e => setDesc(e.target.value)}
              value={desc}
            />


<label htmlFor="formGroupExampleInput" className="form-label"><h2>Donde esta ubicado</h2></label>
<input 
              type="text"
              placeholder="Donde esta ubicado"
              className="form-control mb-2"
              onChange={e => setubicacion(e.target.value)}
              value={ubicacion}
            />

<label htmlFor="formGroupExampleInput" className="form-label"><h2>Link de la imagen del Restaurante</h2></label>
<input 
              type="url"
              placeholder="Link de la imagen del Restaurante"
              className="form-control mb-2"
              onChange={e => setUrlImagen(e.target.value)}
              value={urlimagen}
            />


            <button 
              className={
                'btn btn-primary'
              }
              type="submit"
            >
              {
                'Agregar'
              }
            </button>
          </form>
        </div>



  );
}