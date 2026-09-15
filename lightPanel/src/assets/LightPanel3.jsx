import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LightPanel.css";
// import Button from "../assets/Editbtn";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import Draggable from 'react-draggable';
import { useLocation } from 'react-router-dom';



const LightPanel3 = ({ wallName, pic, LightData, bollardData, CellingData, GardenSpikeData }) => {
  // State declarations
  const [lights, setLights] = useState([]);
   const location = useLocation();
  const [visibleLights, setVisibleLights] = useState({});
  const [bollards, setBollards] = useState([]);
  const [visibleBollards, setVisibleBollards] = useState({});
  const [cellingData, setCellingData] = useState([]);
  const [visibleCelling, setVisibleCelling] = useState({});
  const [gardenSpikeData, setGardenSpikeData] = useState([]);
  const [visibleGardenSpike, setVisibleGardenSpike] = useState({});
  const [hoveredLight, setHoveredLight] = useState(null);
  const [Loader, setLoader] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [carts, setCarts] = useState({});
  const [selectedCart, setSelectedCart] = useState(null);
 const [prevLocation, setPrevLocation] = useState(null);

  // Reset data when location changes
  useEffect(() => {
    if (location !== prevLocation) {
      setLights([]);
      setBollards([]);
      setCellingData([]);
      setGardenSpikeData([]);
      setPrevLocation(location);
    }
  }, [location, prevLocation]);
useEffect(() => {
    const fetchData = async () => {
      try {
         if (lights) {
          const response = await axios.get(lights);
          setLights(response.data.data || []);
        }
        if (bollardData) {
          const response = await axios.get(bollardData);
          setBollards(response.data.data || []);
        }
        if (CellingData) {
          const response = await axios.get(CellingData);
          setCellingData(response.data.data || []);
        }
        if (GardenSpikeData) {
          const response = await axios.get(GardenSpikeData);
          setGardenSpikeData(response.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bollardData, CellingData, GardenSpikeData, location]);
  // Fetch data effects
  useEffect(() => {
    const fetchLights = async () => {
      try {
        const response = await axios.get(LightData);
        setLights(response.data.data || []);
      } catch (error) {
        console.error("Error fetching light data:", error);
      }
    };
    if (LightData) fetchLights();
  }, [LightData]);

  useEffect(() => {
    const fetchAllCartsFromBackend = async () => {
      try {
        const response = await axios.get("https://lightpanelbackend-3bkt.onrender.com/api/allcarts");
        const cartList = response.data.carts;
        const structuredCarts = {};
        cartList.forEach((cart) => {
          structuredCarts[cart.cartName] = cart.items;
        });
        setCarts(structuredCarts);
      } catch (error) {
        console.error("Error loading carts from backend:", error);
      }
    };
    fetchAllCartsFromBackend();
  }, []);

  useEffect(() => {
    const fetchBollards = async () => {
      try {
        const response = await axios.get(bollardData);
        setBollards(response.data.data || []);
      } catch (error) {
        console.error("Error fetching bollard data:", error);
      }
    };
    if (bollardData) fetchBollards();
  }, [bollardData]);

  useEffect(() => {
    const fetchCellingData = async () => {
      try {
        const response = await axios.get(CellingData);
        setCellingData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching ceiling data:", error);
      }
    };
    if (CellingData) fetchCellingData();
  }, [CellingData]);

  useEffect(() => {
    const fetchGardenSpikeData = async () => {
      try {
        const response = await axios.get(GardenSpikeData);
        setGardenSpikeData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching GardenSpike data:", error);
      }
    };
    if (GardenSpikeData) fetchGardenSpikeData();
  }, [GardenSpikeData]);

  // Visibility handlers
  const handleLightClick = (light) => {
    setHoveredLight((prev) => (prev === light ? null : light));
    setVisibleLights((prev) => ({
      [light._id]: !prev[light._id],
    }));
  };

  const handleBollardClick = (bollard) => {
    setHoveredLight((prev) => (prev === bollard ? null : bollard));
    setVisibleBollards((prev) => ({
      [bollard._id]: !prev[bollard._id],
    }));
  };

  const handlecellingClick = (celling) => {
    setHoveredLight((prev) => (prev === celling ? null : celling));
    setVisibleCelling((prev) => ({
      [celling._id]: !prev[celling._id],
    }));
  };

  const handlegardenSpikeClick = (gardenSpike) => {
    setHoveredLight((prev) => (prev === gardenSpike ? null : gardenSpike));
    setVisibleGardenSpike((prev) => ({
      [gardenSpike._id]: !prev[gardenSpike._id],
    }));
  };

  // Cart functions with mobile support
  const updateQty = (model, delta, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setCarts((prevCarts) => {
      const updatedItems = prevCarts[selectedCart].map((item) => {
        if (item.Model === model) {
          const newQty = Math.max(1, (item.qty || 1) + delta);
          return { ...item, qty: newQty };
        }
        return item;
      });
  
      return {
        ...prevCarts,
        [selectedCart]: updatedItems,
      };
    });
  };

  const handleAddToCart = async (item, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!selectedCart) {
      const cartName = window.prompt("Enter a new cart name:");
      if (!cartName) return;
    
      if (carts[cartName]) {
        alert("A cart with this name already exists. Please use a different name.");
        return;
      }
    
      const newCartItems = [{ ...item, qty: 1 }];
    
      setCarts((prev) => ({
        ...prev,
        [cartName]: newCartItems,
      }));
      setSelectedCart(cartName);
    
      try {
        await axios.post("https://lightpanelbackend-3bkt.onrender.com/api/carts", {
          cartName,
          items: newCartItems,
        });
        alert("Cart created and saved!");
      } catch (err) {
        console.error("Failed to save new cart:", err);
        alert("Error saving cart to backend.");
      }
      return;
    }
  
    if (selectedCart) {
      const isDuplicate = carts[selectedCart]?.some((i) => i.Model === item.Model);
      if (!isDuplicate) {
        setCarts((prev) => ({
          ...prev,
          [selectedCart]: [...(prev[selectedCart] || []), { ...item, qty: 1 }],
        }));
      } else {
        alert("Item already exists in the selected cart.");
      }
    }
  };

  const handleRemoveFromCart = (item, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (selectedCart && carts[selectedCart]) {
      const updated = carts[selectedCart].filter(
        (i) => i.Model !== item.Model
      );
      setCarts((prev) => ({
        ...prev,
        [selectedCart]: updated,
      }));
    }
  };

  const handleChangeCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const cartNames = Object.keys(carts);
    if (cartNames.length === 0) {
      alert("No existing carts.");
      return;
    }

    const selected = window.prompt(
      `Available carts:\n${cartNames.join(", ")}\n\nType the name of the cart you want to switch to:`
    );

    if (!selected || !carts[selected]) {
      alert("Invalid cart name.");
      return;
    }

    setSelectedCart(selected);
  };

  const handleAddNewCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const cartName = window.prompt("Enter a new cart name:");
    if (!cartName) return;

    if (carts[cartName]) {
      alert("A cart with this name already exists.");
      return;
    }

    setCarts((prev) => ({
      ...prev,
      [cartName]: [],
    }));
    setSelectedCart(cartName);
  };

  const handleSaveCart = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!selectedCart || !carts[selectedCart] || carts[selectedCart].length === 0) {
      alert("Cart is empty or not selected.");
      return;
    }

    try {
      const response = await axios.post("https://lightpanelbackend-3bkt.onrender.com/api/carts", {
        cartName: selectedCart,
        items: carts[selectedCart],
      });
      alert("Cart saved successfully!");
      console.log("Saved cart:", response.data);
    } catch (error) {
      console.error("Error saving cart:", error);
      alert("Failed to save cart.");
    }
  };

  const handleVisibilityCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedCart(null);
  };

  const handleSelectCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const cartNames = Object.keys(carts);
    if (cartNames.length === 0) {
      alert("No carts available.");
      return;
    }

    const selected = window.prompt(
      `Available carts:\n${cartNames.join(", ")}\n\nType the cart name you want to use:`
    );

    if (!selected || !carts[selected]) {
      alert("Invalid cart name.");
      return;
    }

    setSelectedCart(selected);
  };

  return (
    <>
      <div className="mainDiv flex flex-col gap-8 mr-auto ml-auto">
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${pic})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "1200px",
            height: "600px",
          }}
        >
          {/* Lights */}
          {lights.map((light) => (
            <div
              key={light._id}
              style={{
                position: "absolute",
                top: light.y,
                left: light.x,
                cursor: "pointer",
              }}
              onClick={() => handleLightClick(light)}
            >
              <div
                className="lightDiv"
                style={{
                  width: light.width || "30px",
                  height: light.height || "30px",
                  backgroundColor: "grey",
                  opacity: 0.4,
                  visibility: visibleLights[light._id] ? "visible" : "hidden",
                }}
              ></div>
            </div>
          ))}

          {/* Bollards */}
          {bollards.map((bollard) => (
            <div
              key={bollard._id}
              style={{
                position: "absolute",
                top: bollard.y,
                left: bollard.x,
                cursor: "pointer",
              }}
              onClick={() => handleBollardClick(bollard)}
            >
              <div
                style={{
                  width: bollard.width || "18px",
                  height: bollard.height || "119px",
                  backgroundColor: "grey",
                  opacity: 0.5,
                  visibility: visibleBollards[bollard._id] ? "visible" : "hidden",
                }}
              ></div>
            </div>
          ))}

          {/* Ceiling Lights */}
          {cellingData.map((celling) => (
            <div
              key={celling._id}
              style={{
                position: "absolute",
                top: celling.y,
                left: celling.x,
                cursor: "pointer",
              }}
              onClick={() => handlecellingClick(celling)}
            >
              <div
                style={{
                  width: celling.width || "30px",
                  height: celling.height || "30px",
                  backgroundColor: "grey",
                  opacity: 0.5,
                  visibility: visibleCelling[celling._id] ? "visible" : "hidden",
                }}
              ></div>
            </div>
          ))}

          {/* Garden Spike Lights */}
          {gardenSpikeData.map((gardenSpike) => (
            <div
              key={gardenSpike._id}
              style={{
                position: "absolute",
                top: gardenSpike.y,
                left: gardenSpike.x,
                cursor: "pointer",
              }}
              onClick={() => handlegardenSpikeClick(gardenSpike)}
            >
              <div
                style={{
                  width: gardenSpike.width || "30px",
                  height: gardenSpike.height || "30px",
                  backgroundColor: "grey",
                  opacity: 0.5,
                  visibility: visibleGardenSpike[gardenSpike._id] ? "visible" : "hidden",
                }}
              ></div>
            </div>
          ))}

          {/* Tooltip */}
          {hoveredLight && (
            <div
              className="absolute z-10 w-[200px] bg-gray-900/90 text-white p-4 rounded-lg shadow-xl"
              style={{
                top: hoveredLight.y,
                left: hoveredLight.x,
                transform: "translate(-30%, -110%)",
                padding: "3px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                zIndex: 10,
                width: "200px",
                fontFamily: "'Arial', sans-serif",
              }}
            >
              {hoveredLight?.Model ? (
                <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {`Model: ${hoveredLight.Model}`}
                </h4>
              ) : (
                <p>Data not available</p>
              )}

              {hoveredLight.ListPrice && (
                <p style={{ fontSize: "14px", margin: "4px 0" }}>
                  {`List Price: ₹${hoveredLight.ListPrice}`}
                </p>
              )}
              {hoveredLight.Dimensions && (
                <p style={{ fontSize: "14px", margin: "4px 0" }}>
                  {`Dimensions: ${hoveredLight.Dimensions}`}
                </p>
              )}

              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button
                  onClick={(e) => handleAddToCart(hoveredLight, e)}
                  onTouchEnd={(e) => handleAddToCart(hoveredLight, e)}
                  style={{
                    backgroundColor: "#00cc66",
                    color: "#fff",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    minWidth: "60px",
                    minHeight: "30px",
                    touchAction: "manipulation"
                  }}
                >
                  ADD
                </button>

                <button
                  onClick={(e) => handleRemoveFromCart(hoveredLight, e)}
                  onTouchEnd={(e) => handleRemoveFromCart(hoveredLight, e)}
                  style={{
                    backgroundColor: "#cc3300",
                    color: "#fff",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    minWidth: "80px",
                    minHeight: "30px",
                    touchAction: "manipulation"
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "23px", marginTop: "1px", width: "50vw" }}>
         <button
  onClick={handleSelectCart}
  className="relative bg-gray-900 text-white font-bold px-8 py-3 rounded-full 
            border-2 border-blue-400 overflow-hidden
            transition-all duration-700 ease-out
            hover:text-gray-900 hover:border-transparent
            group"
  style={{
    minWidth: "140px",
    minHeight: "48px",
    touchAction: "manipulation"
  }}
>
  <span className="relative z-10 transition-colors duration-300">Select Cart</span>
  
  {/* Liquid fill */}
  <span className="absolute left-0 top-0 h-0 w-full bg-blue-400 
                  transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
                  group-hover:h-full group-hover:top-auto group-hover:bottom-0"
        style={{ borderRadius: "50% 50% 0 0" }}></span>
  
  {/* Bubbles */}
  <span className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/30 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition-all duration-1000 ease-out"
        style={{
          animation: "bubble 2s infinite",
          transform: "translateX(-50%)"
        }}></span>
  <span className="absolute bottom-0 left-40% w-1.5 h-1.5 bg-white/20 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition-all duration-1000 ease-out delay-100"
        style={{
          animation: "bubble 2.3s infinite 0.3s",
          transform: "translateX(-50%)"
        }}></span>

  <style jsx>{`
    @keyframes bubble {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 0.5; }
      100% { transform: translateY(-100px) scale(0.3); opacity: 0; }
    }
  `}</style>
</button>

          <Link
  to="/carts"
  className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl cursor-pointer 
            border-b-4 border-blue-400/80
            sm:text-sm sm:px-4 sm:py-2.5
            md:text-base md:px-6 md:py-3
            transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
            group overflow-hidden"
  style={{
    minWidth: "150px",
    minHeight: "48px",
    touchAction: "manipulation",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    boxShadow: "0 6px 20px rgba(29, 78, 216, 0.3)",
    textShadow: "0 1px 2px rgba(0,0,0,0.2)"
  }}
>
  {/* Liquid bubble background */}
  <span className="absolute inset-0 rounded-xl overflow-hidden">
    <span className="absolute bottom-0 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full 
                    opacity-0 group-hover:opacity-100
                    transition-all duration-1000 ease-out"
          style={{
            animation: "liquid-rise 3s cubic-bezier(0.25,1,0.5,1) infinite",
            filter: "blur(20px)"
          }}></span>
    <span className="absolute bottom-0 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full 
                    opacity-0 group-hover:opacity-100
                    transition-all duration-1000 ease-out delay-300"
          style={{
            animation: "liquid-rise 3.5s cubic-bezier(0.25,1,0.5,1) infinite 0.5s",
            filter: "blur(16px)"
          }}></span>
  </span>

  {/* 3D Cart Icon */}
  <span className="relative z-10">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="w-6 h-6 transition-transform duration-700 group-hover:translate-y-[-3px]"
    >
      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25z" />
      <path className="opacity-80" d="M3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    </svg>
    <span className="absolute inset-0 bg-white/10 rounded-full 
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
          style={{
            transform: "scale(1.6)",
            filter: "blur(6px)"
          }}></span>
  </span>

  {/* Text with depth */}
  <span className="relative z-10 font-medium tracking-wide transition-all duration-500 
                  group-hover:translate-y-[-1px] group-hover:text-blue-100">
    Cart Details
  </span>

  {/* Metallic shine effect */}
  <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 
                  transform -skew-x-12 -translate-x-full
                  group-hover:translate-x-[200%]
                  transition-transform duration-1000"></span>

  {/* CSS animations */}
  <style jsx>{`
    @keyframes liquid-rise {
      0% { transform: translateY(0) scale(1); opacity: 0.6; }
      50% { transform: translateY(-40px) scale(1.1); opacity: 0.9; }
      100% { transform: translateY(-80px) scale(1); opacity: 0; }
    }
  `}</style>
</Link>
        </div>

        {/* Cart Panel */}
        {selectedCart && (
          <Draggable
            handle=".cart-header"
            bounds="parent"
            cancel=".no-drag"
            
          >
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "0",
                width: "350px",
                maxWidth: "90vw",
                backgroundColor: "rgba(229, 231, 235, 0.92)",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                zIndex: 20,
                touchAction: "none"
              }}
            >
              <div 
                className="cart-header"
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  gap: "12px",
                  cursor: "move",
                  marginBottom: "16px"
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#111827" }}>
                  Cart: {selectedCart}
                </h3>
                <div style={{ display: "flex", gap: "8px", position: "relative" }}>
                  <button
                    onClick={handleChangeCart}
                    onTouchEnd={handleChangeCart}
                    className="no-drag"
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "#fff",
                      padding: "8px 12px",
                      fontSize: "14px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      minWidth: "100px",
                      minHeight: "36px",
                      touchAction: "manipulation",
                      visibility:"hidden"
                    }}
                  >
                    Change Cart
                  </button>
{/* 
                  <button
                    onClick={handleAddNewCart}
                    onTouchEnd={handleAddNewCart}
                    className="no-drag"
                    style={{
                      backgroundColor: "#10b981",
                      color: "#fff",
                      padding: "8px 12px",
                      fontSize: "14px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      minWidth: "100px",
                      minHeight: "36px",
                      touchAction: "manipulation"
                    }}
                  >
                    Add New Cart
                  </button> */}

                  <div 
                    className="no-drag"
                    style={{ 
                      position: "absolute", 
                      top: "-8px", 
                      right: "-8px", 
                      color: "#ef4444",
                      cursor: "pointer",
                      fontWeight: "bold",
                      padding: "4px",
                      touchAction: "manipulation"
                    }} 
                    onClick={handleVisibilityCart}
                    onTouchEnd={handleVisibilityCart}
                  >
                    <AiOutlineClose size={18} />
                  </div>
                </div>
              </div>

              <div style={{ maxHeight: "40vh", overflowY: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f3f4f6", textAlign: "left" }}>
                      <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>Model</th>
                      <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>Price</th>
                      <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts[selectedCart]?.map((item, index) => (
                      <tr
                        key={index}
                        style={{ borderBottom: "1px solid #e5e7eb", cursor: "pointer" }}
                        onClick={() => setHoveredLight(item)}
                        onTouchEnd={() => setHoveredLight(item)}
                      >
                        <td style={{ padding: "10px" }}>{item.Model}</td>
                        <td style={{ padding: "10px" }}>₹{item.ListPrice}</td>
                        <td style={{ padding: "10px" }}>
                          <div 
                            style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "6px",
                              touchAction: "manipulation"
                            }}
                            className="no-drag"
                          >
                            <button
                              onClick={(e) => updateQty(item.Model, -1, e)}
                              onTouchEnd={(e) => updateQty(item.Model, -1, e)}
                              style={{
                                padding: "8px 12px",
                                backgroundColor: "#d1d5db",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                minWidth: "36px",
                                minHeight: "36px",
                                touchAction: "manipulation"
                              }}
                            >
                              -
                            </button>
                            <span>{item.qty || 1}</span>
                            <button
                              onClick={(e) => updateQty(item.Model, 1, e)}
                              onTouchEnd={(e) => updateQty(item.Model, 1, e)}
                              style={{
                                padding: "8px 12px",
                                backgroundColor: "#d1d5db",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                minWidth: "36px",
                                minHeight: "36px",
                                touchAction: "manipulation"
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={handleSaveCart}
                onTouchEnd={handleSaveCart}
                className="no-drag"
                style={{
                  marginTop: "16px",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  padding: "12px 24px",
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  width: "100%",
                  minHeight: "44px",
                  touchAction: "manipulation"
                }}
              >
                Save Cart
              </button>
            </div>
          </Draggable>
        )}
      </div>
    </>
  );
};

export default LightPanel3;