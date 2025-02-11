function Tile({tileTitle, children, tileImage, imageDescription}) {
    return (
        <section>
            <h2>{tileTitle}</h2>
            {children}

            {tileImage && <img src={tileImage} alt={imageDescription}/>}
        </section>
    );
}

export default Tile