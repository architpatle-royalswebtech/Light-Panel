import React from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
import Button from "./Editbtn"

const Top = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (<div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
    <div className="h-32 flex items-center w-80 justify-center">
      <select
        onChange={handleChange}
        className="border p-2 rounded-md"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="/wall1">Wall no. 1</option>
        <option value="/">Wall no. 2</option>
        <option value="/wall3">Wall no. 3</option>
        <option value="/wall4">Wall no. 4</option>
        <option value="/wall5">Wall no. 5</option>
        <option value="/hybec1">Hybec 1</option>
        <option value="/hybec2">Hybec 2</option>
        <option value="/gatelight">Gate Lights</option>
        <option value="/hanging1">Hanging 1</option>
        <option value="/hanging2">Hanging 2</option>
        <option value="/nirvana1">Nirvana 1</option>
        <option value="/nirvana2">Nirvana 2</option>
        <option value="/philips">Philips</option>
        <option value="/Fan1">Fan 1</option>      
        <option value="/Fan2">Fan 2</option>
        <option value="/Fan3">Fan 3</option>
        <option value="/SC1">SurfaceCOB</option>
        <option value="/Geyser2">Geysers 2</option>
        <option value="/exhaustfan1">ExhaustFan</option>
        <option value="/Astberg">astberg</option>
        
      </select>
    
    </div>
     <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
     <Button />
     </div></div>
     
  );
};

export default Top;
