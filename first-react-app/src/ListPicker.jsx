export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.lenght);
    const randElement = values[randIdx];
    console.log(randIdx)
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElement}</p>
        </div>
    );
}