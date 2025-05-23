
function SeuNome({setNome}) {
    

    return (
        <div>
            <h1>Seu Nome</h1>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}

export default SeuNome;