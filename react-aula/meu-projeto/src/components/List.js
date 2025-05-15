import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW" />
                <Item marca="Mercedes" />
                <Item marca="Audi" />
                <Item marca="Fiat" />
                <Item marca="Ford" />
            </ul>
        </>
    )
}

export default List;