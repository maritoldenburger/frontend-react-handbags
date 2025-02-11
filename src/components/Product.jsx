function Product({productLabel, productImage, productName, productPrice}) {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productName}/>
            <p>{productName}</p>
            <h4>{`€ ${productPrice},-`}</h4>
        </article>
    );
}

export default Product