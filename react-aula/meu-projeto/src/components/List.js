import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW" ano_lancamento={1916} />
                <Item marca="Mercedes" ano_lancamento={1926} />
                <Item marca="Audi" ano_lancamento={1909} />
                <Item marca="Fiat" ano_lancamento={1899} />
                <Item marca="Ford" ano_lancamento={1903} />
                <Item/>
            </ul>
        </>
    )
}

export default List;