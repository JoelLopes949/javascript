function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        console.log("Cadastrou o usuário"); // Aqui você pode adicionar a lógica para cadastrar o usuário
    }
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form;