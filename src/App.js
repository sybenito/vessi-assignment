import './App.scss';
import Product from './components/product.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vessi - Assignment</h1>
        <p>
        1. On mobile: When the user clicks the "Quick Add" button, a modal slides up from the bottom of the
screen with the product, colour swatches and an “add to cart” button.
On desktop: When the user clicks the "Quick Add" button, only the size swatches are displayed and
the product is immediately added to cart when you choose the size.</p>

<p>2. On mobile and desktop: On hover, the product shot transitions to a lifestyle image.</p>

<p>Given this information above, the Figma file and the assets, your task is to build the product card. You can build with
pure HTML, CSS, and JS or choose from any libraries or frameworks of your preference.
Below are the different options of the product card you can make which cater to different levels of skill sets. There is no
right or wrong option to choose, it just gives us an idea of your current skill level. Please choose one option only.<br />
Level 1 - MVP: Create the component product card. Feel free to use tools like CodePen or JSFiddle.<br />
Level 2 - Level Up: Create the whole grid of products. Feel free to use tools like CodePen or JSFiddle.</p>
      </header>
      <main>
        <div class="product-group">
          <Product></Product>
        </div>
      </main>
    </div>
  );
}

export default App;
