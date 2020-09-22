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

    return(
        <div>
            <h1>Lista de Deputados: </h1>
            <ol>
                {depList.map(deputado => ( 
                    <li key={deputado.id}> 
                        <p>{deputado.nome} </p>
                        
                    </li>
                ))}
                
            </ol>    
        </div>
    )
}