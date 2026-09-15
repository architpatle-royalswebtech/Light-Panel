import React from "react";
import { useNavigate } from "react-router-dom";

const Top2 = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <div className="h-20 flex items-center w-80 justify-center">
      <select
        onChange={handleChange}
        className="border p-2 rounded-md"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="/nav">Wall no. 1</option>
        <option value="/nav2">Wall no. 2</option>
       <option value="/nav3">Wall no. 3</option>
       <option value="/nav4">Wall no. 4</option>
        <option value="/nav5">Wall no. 5</option>
       <option value="/navHybec1">Hybec 1</option>
        <option value="/navHybec2">Hybec 2</option>
       <option value="/Gatelightnav">Gate Lights</option>
       <option value="/navHanging1">Hanging 1</option>
       <option value="/navHanging2">Hanging 2</option>
       <option value="/navNirvana1">Nirvana 1</option>
       <option value="/navNirvana2">Nirvana 2</option>
       <option value="/navPhilips">Philips</option>
        <option value="/navFan1">Fan 1</option>
        <option value="/navFan2">Fan 2</option>
       <option value="/navFan3">Fan 3</option>
       <option value="/navSC1">Surface COB</option>
       <option value="/navGeysers1">Geysers 1</option>
       <option value="/navExhaustFan1">Exhaust Fan</option>
        <option value="/navAstberg">Astberg</option>

        {/* 
        <option value="/wall5">Wall no. 5</option>
        <option value="/nav">Table</option> */}
      </select>
    </div>
  );
};

export default Top2;
