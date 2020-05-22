import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import * as st from './styled'

export default function Repositories(){
    const history = useHistory()
    const [repositories, setRepositories]  = useState([]);

    useEffect(() =>{
        var repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }
        else{
            history.push('/')
        }
    }, [])

    return(
        <>
            <st.content>
                <st.title>Repositories</st.title>
                <st.list>
                    {repositories.map(repository =>{
                        return(
                                <st.listItem>Repositório: { repository } </st.listItem>
                            )
                    }) 
                    
                    }
                </st.list>
                <st.linkHome to="/">Voltar</st.linkHome>
            </st.content>

            
        </>
    )
}