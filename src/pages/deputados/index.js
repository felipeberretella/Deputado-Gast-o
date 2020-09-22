import React, {useState, useEffect} from 'react'

import api from '../../services/api'


export default function Deputados() {

    const [DeputadoList, setDeputadoList] = useState([])

    useEffect(() =>{
        api.get('deputados').then(response => { 
            
            
            
        }) 
    },[])
   

    
    return (
        <div>
            <h1>Lista de Deputados: <p>{DeputadoList}</p> </h1>
        </div>
    )
}