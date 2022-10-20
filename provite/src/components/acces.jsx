import React from "react";
const Acces = () => {
  const [productState, setProductState] = React.useState(false);
  return (
    <div className="acces">
      <h3>acces</h3>
      {!productState ? (
        <button onClick={() => setProductState(true)}>Follow</button>
      ) : (
        <button onClick={() => setProductState(false)}>Unfollow</button>
      )}
    </div>
  );
};

export default Acces;
