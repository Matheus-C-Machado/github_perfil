import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";




function App() {
    const [fomrularioEstaVisivel,setFormularioEstaVisivel]= useState(true);
    const [nomeUsuario ,setNomeUsuario] = useState ('');

  return(
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
        <Perfil  nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />

        </>
        ) }

    {/* {fomrularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!fomrularioEstaVisivel)}  type="button"> toggle form</button> */}
    </div>
  )
}

export default App
