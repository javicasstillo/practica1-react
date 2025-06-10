import "bootstrap/dist/css/bootstrap.min.css";
import PrimerFuncion from "./components/PrimerFuncion";
import NumeroDinamico from "./components/NumeroDinamico";

function App() {
  
  const nombre = "Javier Castillo"

  return <div>
    
    <NumeroDinamico></NumeroDinamico>
    <PrimerFuncion nombreProps={nombre}></PrimerFuncion>
    
    </div>
    
}

export default App

