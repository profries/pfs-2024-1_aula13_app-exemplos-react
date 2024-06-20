import Card from "./components/Card"
import Hello from "./components/Hello"
import ListCards from "./components/ListCards"
import listaProdutos from './data/Produto.json'

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

      <ListCards lista={listaProdutos} />

    </>
  )
}

export default App
