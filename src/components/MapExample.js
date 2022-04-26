function MapExample() {

    const numbers = [1, 2, 3, 4];

    const doubled = numbers.map((n) => n * 2);

    const list = doubled.map((d) =>
        <li key={d.toString()}> {d} </li>
    );

    const words = ["ciao", "ok", "saluti"];
    // A good rule of thumb is that elements inside the map() call need keys.

    //Keys used within arrays should be unique among their siblings. 
    //However, they don’t need to be globally unique.
    // We can use the same keys when we produce two different arrays
    const listOfWords = words.map((word) =>
        <li key={word.toString()}> {word} </li>
    );

    const listOfWords2 = words.map((word) =>
        <span key={word.toString()}>{word} </span>
    );

    return (
        <>
            <ol>{list}</ol>
            <ol>{listOfWords}</ol>
            <p>{listOfWords2}</p>
        </>
    )
}

export default MapExample;