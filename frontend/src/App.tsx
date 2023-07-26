import './App.css';
import { sampleProducts } from './data';

function App() {
    return (
        <div>
            <header>TS Amazon</header>
            <main>
                <ul>
                    {sampleProducts.map((product) => (
                        <li key={product.slug}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="productImage"
                            />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <footer>All rights reserved</footer>
        </div>
    );
}

export default App;
