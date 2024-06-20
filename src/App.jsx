import Card from "./components/Card"
import Hello from "./components/Hello"

function App() {
  return (
    <>
      <h1>App Exemplos</h1>
      <Hello nome="Fulano"/>
      <Hello nome="Sicrano"/>
      <Hello />
      <Card titulo="Produto 1">
        <h3>Descricao</h3>
        <p>Detalhe do Produto</p>
      </Card>
    </>
  )
}

export default App
