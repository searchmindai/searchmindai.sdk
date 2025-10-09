import { Button } from "@searchmindai/ui";
import { render } from "preact";
import "./styles/main.css";

function App() {
  return (
    <div>
      <h1>Testando Componentes</h1>
      <Button onClick={() => alert("Clicou!")}>Botão Primário</Button>
      <Button variant="secondary">Botão Secundário</Button>
    </div>
  );
}

render(<App />, document.getElementById("app")!);
