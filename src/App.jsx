import './App.css';
import Button from "./components/Button.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                    disabledButton=""
                />
                <Button
                    buttonText="shop all bags"
                />
                <Button
                    buttonText="pre-orders"
                    disabledButton={true}
                />
            </nav>

            <main>
                <article>
                    <span>Best seller</span>
                    <img src={bag1} alt="The handy bag"/>
                    <p>The handy bag</p>
                </article>
            </main>
        </>
    )
}

export default App
