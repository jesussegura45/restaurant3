import React from 'react';
import {firebase} from '../../firebase'

function HomePage() {

  const [tareas, setTareas] = React.useState([])



  React.useEffect(() => {

    const obtenerDatos = async () => {

      try {

        const db = firebase.firestore()
        const data = await db.collection('directorio').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setTareas(arrayData)
        
      } catch (error) {
        console.log(error)
      }

    }

    obtenerDatos()
  

  }, []) //Terminacion UseEffect

    return (


      <div className="grid">
      <div className="row">
           <div className="col-lg-3 col-md-6">
           <div className="card shadow-lg">
           
      
                            
            {
                
              tareas.map(item => (
                <div key={item.id}>
                  
             
                        <div className="card-header bg-primary text-white"></div>
                         <img src={item.url} alt="" className="card-img-top" />
                         

                          <div className="card-body">
                          <p className="card-text">
                          
                           <p className="h3">{item.name}</p>
                          <p className="direccion">{item.address}</p>
                          <p className="descripcion">{item.profile}</p>
                          </p>
                          </div>
                      </div>
)

)
             
             
              }
                             




                  </div>
            </div>
        </div>
        </div>
     )
    }
  
     
 
     
   
    
    
export default HomePage;
 


