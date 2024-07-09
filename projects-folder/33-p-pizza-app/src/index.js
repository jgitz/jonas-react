import React from "react"; // 33-0
import ReactDOM from "react-dom/client"; // 33-0

import "./index.css"; // 40-0

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/* 33-1 */ function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

/* 38-0 create Menu component */

function Menu() {
  const pizzaCheckFlag =
    pizzaData.length; /* 47-48-49 check if there is any PIZZA's in the menu... if no pizzas... NO NEED to render MENU LIST */

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaCheckFlag > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((item) => {
              return <Pizza pizzaObject={item} key={item.name} />;
            })}{" "}
            {/* 46-0 using array map */}
          </ul>
        </>
      ) : (
        <p>Pizza Menu is getting ready.. Please wait</p>
      )}{" "}
      {/* 47-48-49 ... to display MENU according to DATA in the PIZZA DATA ARRAY VARIABLE  */}
    </main>
  );
}

/* 36-1 make pizza component */ function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut? "sold-out": ""}`}> {/* 50-set black and white class for SOLD OUT PIZZA */}
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span> {/* 50 soldout pizza don't have price.... so we need to remove it */}
      </div>
    </li> /* 36-1 */ /* 46-0 added props.pizzaObject.<data> */
  );
}

/* 38-0 create header component */ function Header() {
  return (
    <>
      <header className="header">
        <h1>PIZZA SHOP NAME HEADER</h1>
      </header>
    </>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>Shop Open Now</p>
      <p>Open till {props.closingHour}:00</p>
      <br />
      <button className="btn">Order Now</button>
    </div>
  );
} /* 50 creation of ORDER COMPONENT */

function Footer() {
  /* 47-49-49 logic for DISPLAY TEXT for footer based on OPENING and CLOSING TIME  */

  let currentTime = new Date().getHours();
  let openingHour = 9;
  let closingHour = 22;

  let timeCheckFlag =
    currentTime >= openingHour &&
    currentTime <=
      closingHour; /* ***** 47-48-47  no need of TERNARY OPERATOR for assigning TRUE/FALSE value.... as SHORT CIRCUITING automatically assigns TRUE and FALSE VALUE to the variable */

  return (
    <>
      <footer className="footer">
        {timeCheckFlag ? (
          <Order closingHour={closingHour} /> /* 50 creation and using of ORDER COMPONENT */
        ) : (
          <div className="order">
            <p>Shop is Closed, Opening on {openingHour}:00</p>
          </div>
        )}
      </footer>
      {/* 47-48-49 TERNARY ADDED to display footer based on time */}
    </>
  );
}

/* 33-2 set root element from index.html */ const root = ReactDOM.createRoot(document.getElementById("root"));

/* 33-2 render App component inside div inside index. html */ root.render(
  <React.StrictMode>
    {" "}
    {/* 33-3 strict mode added */}
    <App />
  </React.StrictMode>
);
