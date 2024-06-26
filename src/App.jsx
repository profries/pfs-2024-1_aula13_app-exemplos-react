import Card from "./components/Card"
import ChangeColor from "./components/ChangeColor"
import Counter from "./components/Counter"
import Hello from "./components/Hello"
import ListCards from "./components/ListCards"
import TabelaProdutos from "./components/TabelaProdutos"
import listaProdutos from './data/Produto.json'

function App() {
  return (
    <>
      <h1>App Exemplos</h1>
      <Hello nome="Fulano"/>
      <Hello nome="Sicrano"/>
      <Hello />
      <Counter />
      <ChangeColor /> <br />
      <Card titulo="Produto 1">
        <h3>Descricao</h3>
        <p>Detalhe do Produto</p>
      </Card>

      <ListCards lista={listaProdutos} />
      <TabelaProdutos lista={listaProdutos}></TabelaProdutos>
    </>
  )
}

export default App
