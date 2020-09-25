import React, {useState, useEffect} from 'react'

import api from '../../services/api'


export default function Deputados() {

    const [deputadoList, setDeputadoList] = useState([])
    
    useEffect( async () => { 
        
        const response = await api.get()
        const dataList = response.data.dados
        setDeputadoList(dataList)

    },[])

    
  

    return(
        <div>               
            {deputadoList.map(deputado =>(   

                <div key={deputado.id}> 

                    <h1> {deputado.nome}</h1>

                    <p> Detalhes: </p>  

                </div>
                
                ))}
                


        </div>
    )
}