import "./App.css";

import "./index.css";
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
      <Pizza
        name="TEST_name"
        ingredients="ingredientsTest"
        img="/public/School/dev.jpg"
      />
        <Pizza
        name="TEST_name_2"
        ingredients="ingredientsTest"
        img="/public/School/test.png"
      ></Pizza>
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
      <img src={props.img} alt={props.name} />
      <h2> {props.name}</h2>
      <p>{props.ingredients}</p>
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
