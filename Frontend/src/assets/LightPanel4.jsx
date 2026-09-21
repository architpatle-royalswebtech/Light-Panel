import React, { useEffect, useState } from "react";
  import axios from "axios";
  import "./LightPanel.css";
  import Button from "../assets/Editbtn";
  

  const LightPanel4 = ({ pic, LightData, bollardData, CellingData}) => {
    const [lights, setLights] = useState([]);
    const [visibleLights, setVisibleLights] = useState({});
  
    const [bollards, setBollards] = useState([]);
    const [visibleBollards, setVisibleBollards] = useState({});
  
    const [cellingData, setCellingData] = useState([]);
    const [visibleCelling, setVisibleCelling] = useState({});
  
    // const [gardenSpikeData, setGardenSpikeData] = useState([]);
    // const [visibleGardenSpike, setVisibleGardenSpike] = useState({});
  
    const [hoveredLight, setHoveredLight] = useState(null);
  
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
  
    // useEffect(() => {
    //   const fetchGardenSpikeData = async () => {
    //     try {
    //       const response = await axios.get(GardenSpikeData);
    //       setGardenSpikeData(response.data.data || []);
    //     } catch (error) {
    //       console.error("Error fetching GardenSpike data:", error);
    //     }
    //   };
    //   if (GardenSpikeData) fetchGardenSpikeData();
    // }, [GardenSpikeData]);
  
    // Toggle visibility
    const toggleVisibility = (id, setState) => {
      setState((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
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
              height: "600px"
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
                onClick={() => {
                  setHoveredLight(hoveredLight === light ? null : light);
                  toggleVisibility(light._id, setVisibleLights);
                }}
              >
                <div
                  className="lightDiv"
                  style={{
                    width: light.width || "30px",
                    height: light.height || "30px",
                    backgroundColor: "grey",
                    opacity: 0.4,
                    visibility: visibleLights[light._id] ? "visible" : "hidden",
                    // visibility:"visible",
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
                onClick={() => {
                  setHoveredLight(hoveredLight === bollard ? null : bollard);
                  toggleVisibility(bollard._id, setVisibleBollards);
                }}
              >
                <div
                  style={{
                    width: bollard.width || "18px",
                    height: bollard.height || "119px",
                    backgroundColor: "grey",
                    opacity: 0.5,
                    visibility: visibleBollards[bollard._id] ? "visible" : "hidden",
                    // visibility:"visible"
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
                onClick={() => {
                  setHoveredLight(hoveredLight === celling ? null : celling);
                  toggleVisibility(celling._id, setVisibleCelling);
                }}
              >
                <div
                  style={{
                    width: celling.width || "30px",
                    height: celling.height || "30px",
                    backgroundColor: "grey",
                    opacity: 0.5,
                    visibility: visibleCelling[celling._id] ? "visible" : "hidden",
                    // visibility:"visible"
                  }}
                ></div>
              </div>
            ))}
  
            {/* Garden Spike Lights */}
            {/* {gardenSpikeData.map((gardenSpike) => (
              <div
                key={gardenSpike._id}
                style={{
                  position: "absolute",
                  top: gardenSpike.y,
                  left: gardenSpike.x,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setHoveredLight(hoveredLight === gardenSpike ? null : gardenSpike);
                  toggleVisibility(gardenSpike._id, setVisibleGardenSpike);
                }}
              >
                <div
                  style={{
                    width: gardenSpike.width || "30px",
                    height: gardenSpike.height || "30px",
                    backgroundColor: "grey",
                    opacity: 0.5,
                    visibility: visibleGardenSpike[gardenSpike._id] ? "visible" : "hidden",
                    // visibility:"visible"
                  }}
                ></div>
              </div>
            ))}
   */}
            {/* Tooltip */}
            {hoveredLight && (
              <div
                className="absolute z-10 bg-gray-900/90 text-white p-4 rounded-lg shadow-xl"
                style={{
                  top: hoveredLight.y,
                  left: hoveredLight.x,
                  transform: "translate(-50%, -120%)",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  width: "200px",
                  fontFamily: "'Arial', sans-serif",
                }}
              >
                {hoveredLight?.Model ? (
                  <h4 className="font-bold text-lg mb-2">{`Model: ${hoveredLight.Model}`}</h4>
                ) : (
                  <p>Data not available</p>
                )}
                {hoveredLight.ListPrice && <p>{`List Price: ₹${hoveredLight.ListPrice}`}</p>}
                {hoveredLight.Dimensions && <p>{`Dimensions: ${hoveredLight.Dimensions}`}</p>}
              </div>
            )}
          </div>
          <Button />
        </div>
      </>
    );
  
}

export default LightPanel4