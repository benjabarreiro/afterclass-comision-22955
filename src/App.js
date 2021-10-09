import Wrapper from "./components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Title from "./components/Title";
import Button from "@mui/material/Button";
import MaterialUI from "./components/MaterialUI";
import {default as Enlace} from "@mui/material/Link";

function App() {
  return (
    <div>
      <Wrapper>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCartPlus} />
        <Title title="Afterclass Componentes 1" />
        <Button variant="contained">Hello World</Button>
      </Wrapper>
      <MaterialUI />
      <Enlace href="#">Link</Enlace>
      <Enlace href="#" color="inherit">
        {'color="inherit"'}
      </Enlace>
      <Enlace href="#" variant="body2">
        {'variant="body2"'}
      </Enlace>
    </div>
  );
}

export default App;
