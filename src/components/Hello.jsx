function Hello({nome}) {
    //const nome = prop.nome ? prop.nome : 'World';
    return (
        (nome) 
            ? <h3>Hello {nome}!</h3>
            : <h3>Hello World!</h3>        
    )
}

export default Hello;