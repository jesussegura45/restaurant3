import {useState} from 'react'
import React from 'react';
import {firebase} from '../../firebase'

export default function Search(){
 
  const [nombre, setNombre] = useState("");

  const [tareas, setTareas] = React.useState([])


//Buscar Datos

const buscar = async (e) => {
  e.preventDefault()


 if(!nombre.trim()){

    console.log('está vacio')
    return
  }

  try {

    const db = firebase.firestore()
    const data = await db.collection('directorio').get()
    const arrayData = data.docs.map(doc => ({ name: doc.name, ...doc.data() }))
    console.log(arrayData)
    setTareas(arrayData)
   
  } catch (error) {
    console.log(error)
  }

  
}












    return (
  
  <div  className="app">
    <form className="row g-12 needs-validation" onSubmit={buscar}>
   
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label"><h2>Buscar por nombre del Restaurante</h2></label>
      <input type="text" 
      onChange={e => setNombre(e.target.value.toLowerCase())}
     
      value={nombre}
      placeholder="Ingrese nombre del Restaurante a Buscar"
      className="form-control" 
      id="formGroupExampleInput" 
      autoComplete="off" 
      required
      />
</div>


    
    <div className="col-sm-12">
      <button type="submit" className="btn btn-primary" >Buscar</button>

      <ul className="lista">
       
    
    
      {tareas.filter((asd) =>
          asd.name.toLowerCase().includes(nombre)
          
        ).map((user) => (

           <div key={user.id}>
          
            <div className="grid">
                <div className="row">
                     <div className="col-lg-3 col-md-6">
                     <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white"></div>
                   <img src={user.url} alt="" className="img-fluid" />
               </div>
            </div>
           <div className="card-body">
                <p className="h3">{user.name}</p>
                <p className="direccion">{user.address}</p>
                <p className="descripcion">{user.profile}</p>
             
          </div>
   
          </div>
          </div>
          </div>
          
        ))}
     



        </ul>
        </div>
      </form>
      </div>
   );
   
 }