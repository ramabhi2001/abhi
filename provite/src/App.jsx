import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import Button from "./components/button";
import Nav from "./components/nav";
import Arra from "./components/arra";
import Cards from "./components/cards";
import Acces from "./components/acces";
import Kore from "./tool";
import Notifying from "./components/file";

function App() {
  const followers = [
    { name: "Raji" },
    { name: "Madhu" },
    { name: "Bharathi" },
    { name: "Ram" },
  ];

  const [foll, setFoll] = React.useState(followers);

  function handlefollow(follower, index) {
    console.log("index", index);
    console.log("follower", follower);

    const mutated = foll.map((follower, ind) => {
      if (ind === index) {
        return { ...follower, isfollowing: !follower.isfollowing };
      } else {
        return follower;
      }
    });
    setFoll([...mutated]);

    console.log("mutated", mutated);
  }
  console.log(foll);

  const products = [
    { name: "nike shoes", price: 500 },
    { name: "puma shoes", price: 590 },
    { name: "addidas shoes", price: 600 },
    { name: "van heusan shoes", price: 999 },
    { name: "blues shoes", price: 780 },
  ];

  const accesseries = [
    { name: "chaines", price: 100 },
    { name: "bangels", price: 250 },
    { name: "silver ring", price: 740 },
    { name: "watch", price: 500 },
  ];

  const [productState, setProductState] = React.useState(accesseries);
  const [counter, setCounter] = React.useState(0);
  const [sidebarIson, setsidebarstate] = React.useState(false);
  const [onColorChange, setcolor] = React.useState(false);

  // const [counter, setAddCart]= React.useState(0);

  const eye = (currentIndex) => {
    const updateData = productState.map((accesserie, index) => {
      if (currentIndex === index) {
        return { ...accesserie, addCart: accesserie.addCart + 1 };
      }
      return accesserie;
    });
    setProductState(updateData);
  };
  const nose = (currentIndex) => {
    const updateData = productState.map((accesserie, index) => {
      if (currentIndex === index) {
        return { ...accesserie, addCart: accesserie.addCart - 1 };
      }
      return accesserie;
    });
    setProductState(updateData);
  };
  const handlecart = (currentIndex) => {
    const updateData = productState.map((accesserie, index) => {
      if (currentIndex === index) {
        return { ...accesserie, addCart: 1 };
      }
      return accesserie;
    });
    setProductState(updateData);
  };
  const backcolor = (
    <h3
      className="backcolor"
      onClick={(e) => {
        e.preventDefault();
        setcolor(true);
      }}
    >
      abhi
    </h3>
  );

  const reset = (
    <h3
      className="reset"
      onClick={(e) => {
        e.preventDefault();
        setcolor(false);
      }}
    >
      reset
    </h3>
  );
  const hamburger = (
    <b
      className="hamburger"
      onClick={(e) => {
        e.preventDefault();
        setsidebarstate(true);
      }}
    >
      MENU
    </b>
  );

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h4>MENU</h4>
        <b
          onClick={(e) => {
            e.preventDefault();
            setsidebarstate(false);
          }}
        >
          Close
        </b>
      </div>
    </div>
  );
  const head = (
    <div
      className="App"
      style={{ backgroundColor: onColorChange ? "pink" : "lightblue" }}
    >
      <header>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="vite logo" />
          </a>
        </div>
        <nav>
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Service">Servies</a>
          <a href="Help">Help</a>
          <button>Login</button>
          {hamburger}
        </nav>
      </header>
      {backcolor}
      {reset}
    </div>
  );
  const hero = (
    <div>
      <h1>hero</h1>
    </div>
  );

  const cart = (
    <div className="cart">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const increment = () => alert("hi");
  const renderproducts = products.map((product, index) => {
    return (
      <div className="product_cart">
        <h4>{product.name}</h4>
        <b>{product.price}</b>
      </div>
    );
  });

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const renderaccesseries = productState.map((accesserie, index) => {
    return (
      <div className="acces">
        <h4>{accesserie.name}</h4>
        <b>{accesserie.price}</b>
        <div className="counter">
          <span className="counter_output">{accesserie.addCart}</span>
          {!accesserie.addCart ? (
            <div className="btn_container">
              <button className="control_btn" onClick={() => handlecart(index)}>
                Add to cart
              </button>
            </div>
          ) : (
            <div className="btn_container">
              <button className="control_btn" onClick={() => eye(index)}>
                {" "}
                +{" "}
              </button>
              <button className="control_btn" onClick={() => nose(index)}>
                {" "}
                -{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });

  const renderFollowe = foll.map((follows, index) => {
    return (
      <div className="follow_card">
        <h3>{follows.name}</h3>
        <div className="btnchange">
          <button
            className="toggle"
            onClick={() => handlefollow(follows, index)}
          >
            {follows.isfollowing ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    );
  });
  const footer = (
    <div>
      <h1>footer</h1>
    </div>
  );

  return (
    <React.Fragment>
      {sidebarIson && sidebar}
      {head}
      {hero}
      {cart}
      <div className="product_section">{renderproducts}</div>
      <div className="accesseries">{renderaccesseries}</div>
      <div className="rendering">{renderFollowe}</div>
      {footer}
      <Button>click</Button>
      <Nav />
      <Arra />
      <div className="dark">
        {products.map((product, index) => {
          return (
            <Cards
              key={index}
              name={product.name}
              price={product.price}
              increment={increment}
            />
          );
        })}
        ;
      </div>
      <Acces />
      <Kore />
      <Notifying />
    </React.Fragment>
  );
}
export default App;
