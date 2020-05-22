import React, {useState} from 'react';

import axios from 'axios';
import * as st from './styled'

function App() {

  const [usuario, setUsuario] = useState('')

  function handlePesquisa(usuario){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
      console.log(usuario)
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
    })
  }

  return (
    <>
      <st.container>
        <st.input value={usuario} onChange={e => setUsuario(e.target.value)} className="usuarioInput" placeholder="Usuário"/>
        <st.button type="button" onClick={handlePesquisa(usuario)} > Pesquisar </st.button>
      </st.container>
        
    </>
  );
}

export default App;
