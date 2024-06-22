import "./App.css";

import "./index.css";
import { pizzaData } from "./data";
//your first ComPonent
// function Profile() {
//  return (
// <img src= "https://i.imgur.com/MK3eW3As.jpg"
//   alt='katherie faker'
// />

//  );
// }

// conditional Rendering

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaDATA = pizzaData;
  const numberPizza = pizzaDATA.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numberPizza > 0 ? (
        <ul>
          {pizzaDATA.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name}></Pizza>
          ))}
        </ul>
      ) : (
        <p>No pizzas available.</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}></Order>
      ) : (
        <p> we are happy for this</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open util {closeHour} and Open At {openHour}
      </p>
    </div>
  );
}

function Pizza(props) {
  if (props.pizzaObject.soldOut) {
    return null;
  }
  return (
    <div>
      <img src={props.pizzaObject.img} alt={props.pizzaObject.name} />
      <h2> {props.pizzaObject.name}</h2>
      <p>{props.pizzaObject.ingredients}</p>
    </div>
  );
}
function App() {
  //   return (
  // <Gallery/>
  //   );

  return (
    <div className="container">
      <Header></Header>

      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
