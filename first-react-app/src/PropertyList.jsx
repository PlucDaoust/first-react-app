import Property from "./Property"

function propertyList ({properties}) {
    return (
        <div>
            {properties.map((p) =>
                <Property key={p.id} {...p}/>
            )}
        </div>
    )
};

export default propertyList