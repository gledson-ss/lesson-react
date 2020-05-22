import React, {useState} from 'react';

import axios from 'axios';
import * as st from './styled'
import {useHistory} from 'react-router-dom'

function App() {

  const [usuario, setUsuario] = useState('')
  const history = useHistory()
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
      
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories')
    })
  }

  return (
    <>
      <st.container>
        <st.input value={usuario} onChange={e => setUsuario(e.target.value)} className="usuarioInput" placeholder="Usuário"/>
        <st.button type="button" onClick={handlePesquisa} > Pesquisar </st.button>
      </st.container>
        
    </>
  );
}

export default App;
