import React, {useState} from 'react';

import axios from 'axios';


function App() {

  const [usuario, setUsuario] = useState('')

  function handlePesquisa(usuario){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{console.log(response.data)})
  }

  return (
    <>
      <input value={usuario} onChange={e => setUsuario(e.target.value)} className="usuarioInput" placeholder="Usuário"/>
      <button type="button" onClick={handlePesquisa(usuario)} > Pesquisar </button>
    </>
  );
}

export default App;
