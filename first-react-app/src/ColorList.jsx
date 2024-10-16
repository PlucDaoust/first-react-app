export default function ColorList ({ colors }) {
    const lis = colors.map((color) => <li>{color}</li>);
    return (
        <div>
            <p>Colors List</p>
            <ul>
            {lis}
            </ul>
        </div>
    )
}