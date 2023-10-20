function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }
    return (
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite o seu nome"/>
            </div>
            <div>
                <input type="submit" valeu="Cadastrar"/>
            </div>
        </form>
    )
}

export default Form