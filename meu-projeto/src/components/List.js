import Item from "./Item"

function List() {
    return (
        <> {/*fragment*/}
            <h1>Minha Lista</h1>
            <ul>
                <Item marca= 'BYD' anoLancamento={2026}/>
                <Item marca= 'Geely' anoLancamento={2026}/>
                <Item marca= 'GWM' anoLancamento={2026}/>
                <Item />
            </ul> 
        </>
    )
}

export default List