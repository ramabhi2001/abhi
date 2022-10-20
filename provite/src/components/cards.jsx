import React from "react";
const Cards = ({ name, price, increment }) => {
  const [adding, setaddcount] = React.useState(0);
  const increase = () => setaddcount((a) => a + 1);

  const decrease = () => setaddcount((a) => a - 1);
  return (
    <div className="product_cart">
      <div className="product_section">
        <h3>{name}</h3>
        <b>{price}</b>
        {!adding ? (
          <div className="btn_container">
            <button className="control_btn" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btn_container">
            <h3>{adding}</h3>
            <button className="control_btn" onClick={increase}>
              {" "}
              +{" "}
            </button>
            <button className="control_btn" onClick={decrease}>
              {" "}
              -{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cards;
