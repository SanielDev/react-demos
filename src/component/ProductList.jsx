
const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Phone",
            price: "$699"
        },
        {
            id: 2,
            name: "TV",
            price: "$999"
        },
        {
            id: 3,
            name: "Refrigerator",
            price: "$899"
        }
    ];
    return (
        <div>
            {products.map(({id, name, price}) => (
                <ul key={id}>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{price}</li>
                </ul>
            ))}
        </div>
    );
};

export default ProductList;