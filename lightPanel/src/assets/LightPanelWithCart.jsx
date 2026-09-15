
// export default LightPanelWithCart;
import React, { useState } from "react";
import LightPanel3 from "./LightPanel3";
import CartSystem from "./CartSystem";

const LightPanelWithCart = ({ pic, LightData, bollardData, CellingData, GardenSpikeData }) => {
  const [cartData, setCartData] = useState({});
  const [selectedCart, setSelectedCart] = useState(null);

  const updateCart = (cartName, items) => {
    setCartData((prev) => ({
      ...prev,
      [cartName]: items,
    }));
  };

  return (
    <div style={{ position: "relative" }}>
      <LightPanel3 pic={pic} LightData={LightData} bollardData={bollardData}  CellingData={CellingData} GardenSpikeData={GardenSpikeData} />
      <CartSystem
        cartData={cartData}
        selectedCart={selectedCart}
        setSelectedCart={setSelectedCart}
        updateCart={updateCart}
      />
    </div>
  );
};

export default LightPanelWithCart;


