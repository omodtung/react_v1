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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name}></Pizza>
        ))}
      </ul>
    </main>
  );
}
function Footer() {
  return (
    <div className="footer">
      <h2> This Is Footer </h2>
    </div>
  );
}

function Pizza(props) {
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
