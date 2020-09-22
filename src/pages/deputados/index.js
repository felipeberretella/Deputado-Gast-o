import React, {useState, useEffect} from 'react'

import api from '../../services/api'


export default function Deputados() {

    const [depList, setDepList] = useState([])

    useEffect(() =>{
        api.get('deputados')
            .then(response => {             
           
            setDepList(response.data.dados)
            
            
            }) 
    },[])
   
    console.log(depList)
    
    return (
        <div>
            <h1>Lista de Deputados: <p> text </p> </h1>
        </div>
    )
}