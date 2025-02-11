import './App.css';
import Button from "./components/Button.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Product from "./components/Product.jsx";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                    disabledButton={false}
                />
                <Button
                    buttonText="shop all bags"
                    disabledButton={false}
                />
                <Button
                    buttonText="pre-orders"
                    disabledButton={true}
                />
            </nav>
            <main>
                <Product
                    productLabel="Best seller"
                    productImage={bag1}
                    productName="The handy bag"
                    productPrice={400}
                />
                <Product
                    productLabel="Best seller"
                    productImage={bag2}
                    productName="The stylish bag"
                    productPrice={250}
                />
                <Product
                    productLabel="New collection"
                    productImage={bag3}
                    productName="The simple bag"
                    productPrice={300}
                />
                <Product
                    productLabel="New collection"
                    productImage={bag4}
                    productName="The trendy bag"
                    productPrice={150}
                />
            </main>
            <footer>
                <Tile tileTitle="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
                <Tile
                    tileImage={brand}
                    imageDescription="Brand logo"
                />
                <Tile
                    tileImage={our_story}
                    imageDescription="The designers"
                />
                <Tile tileTitle="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem
                        illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
