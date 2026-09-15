
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LightPanel.css";
import Button from "../assets/Editbtn";



const LightPanel = ({wallName, pic , LightData }) => {
  const [lights, setLights] = useState([]);
  const [hoveredLight, setHoveredLight] = useState(null);
  
  const [visibleLights, setVisibleLights] = useState({}); // Track visibility of lights
 // Track visibility of bollards

  useEffect(() => {
    const fetchLights = async () => {
      try {
        const response = await axios.get(LightData);
        setLights(response.data.data);
        console.log(response.data.data);
        
      } catch (error) {
        console.error("Error fetching light data:", error);
      }
    };
    fetchLights();
  }, [LightData]);
// setBollards(Bollards)


  // Toggle visibility & tooltip on click
  const handleLightClick = (light) => {
    setHoveredLight((prev) => (prev === light ? null : light)); // Toggle tooltip
    setVisibleLights((prev) => ({
      
      [light._id]: !prev[light._id], // Toggle visibility of clicked light
    }));
  };

 
// console.log(pic);

  return (
  <>
  {/* <Top /> */}
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
            key={light._id || light.Model}
            style={{
              position: "absolute",
              top: light.y,
              left: light.x,
              cursor: "pointer",
            }}
            onClick={() => handleLightClick(light)}
            // onMouseLeave={() => setHoveredLight(null)}
          >
            <div
              className="lightDiv"
              style={{
                width: light.width||"30px",
                height: light.height || "30px",
                backgroundColor: "grey",
                opacity: 0.4,
                // border: "2px solid black",
                visibility: visibleLights[light._id] ? "visible" : "hidden",
                // visibility:"visible"
              }}
            ></div>
          </div>
        ))}

       

        {/* Tooltip for Clicked Light or Bollard */}
        {hoveredLight && (
          <div
            className="absolute z-10 w-[200px] bg-gray-900/90 text-white p-4 rounded-lg shadow-xl"
            style={{
              top: hoveredLight.y,
              left: hoveredLight.x,
              transform: "translate(-50%, -100%)",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              zIndex: 10,
              width: "200px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            {hoveredLight?.Model ? (
              <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>
                {`Model: ${hoveredLight.Model}`}
              </h4>
            ) : (
              <p>Data not available</p>
            )}
            {/* {hoveredLight.MRP !== 0 && (
              <p style={{ fontSize: "14px", margin: "4px 0" }}>
                {(hoveredLight.MRP && `MRP: ₹${hoveredLight.MRP}`)}
              </p>
            )} */}
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
             {hoveredLight.CutOut && (
              <p style={{ fontSize: "14px", margin: "4px 0" }}>
                {`CutOut: ${hoveredLight.CutOut}`}
              </p>
            )}
         </div>
          
        )}
      </div>
      <Button />
    </div></>
  );
};

export default LightPanel;

