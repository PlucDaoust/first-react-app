function property({name, rating, price}) {
    return (
        <div className="property">
            <h2>{name}</h2>
            <h3>{rating}⭐</h3>
            <h4>${price} a night</h4>
        </div>

    )
}

export default property