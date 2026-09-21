import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import "./nav.css"
import { useLocation, useNavigate } from 'react-router-dom';  // ⬅️ added useNavigate
import LoaderLight from '../assets/Loader';
const DataTable = ({ apiUrl , searchUrl , UpdateUrl , title}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Loader, setLoader] = useState(true);
  const itemsPerPage = 10;
  const [showUpdForm, setUpdForm] = useState(false); // State to toggle form visibility
  const [UpdformData, setUpdFormData] = useState({
    id: "",
    wallNo: "",
    sNo: "",
    Model: "",
    Dimensions: "",
    ListPrice: "",
    CutOut: ""
  });

    const navigate = useNavigate(); // ⬅️ for back navigation

  const handleClick = () => {
    setUpdForm(false) // Navigate to the previous page
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      // console.log(response.data.data._id);

      const filteredData = response.data.data.map(({ _id, wallNo, sNo, Model, Dimensions, ListPrice, CutOut }) => ({
        _id, wallNo, sNo, Model, Dimensions, ListPrice, CutOut
      }));
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  };
  
  const hasStatusField = data.some((item) => item.CutOut !== undefined);
  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // const toggleFormVisibility = () => {
  //   setUpdForm((prevState) => !prevState);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the specific field in the form data state
    setUpdFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  const HandleEdit = (Id) => {
    console.log(Id);
    setUpdForm(true);
    IdData(Id);
  }
  const IdData = async (id) => {
    try {
      console.log("from api",id);
      // const response = await fetch(`https://lighpanelbackend.onrender.com/api/getLightId/${id}`);
      const response = await fetch(searchUrl+id);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data.data);
  
      // Assuming the response data contains the expected fields
      setUpdFormData({
        id: data.data._id || "",
        wallNo: data.data.wallNo || "",
        sNo: data.data.sNo || "",
        Model: data.data.Model || "",
        Dimensions: data.data.Dimensions || "",
        ListPrice: data.data.ListPrice || "",
        CutOut: data.data.CutOut || ""
      });
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const UpdateData = async (e) => { 
    e.preventDefault(); // Prevent the form from reloading the page on submit
  
    try {
      console.log("Submitting data:", UpdformData);
      // "https://lighpanelbackend.onrender.com/api/update"
      // Send the updated data to the API using PUT
      const response = await fetch(UpdateUrl, {
        method: "PUT", // Using PUT method for update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdformData), // Sending form data as JSON
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Response from API:", data);
      setUpdForm(false);
      fetchData();
      // Handle successful update if needed (e.g., reset form or show a success message)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  if (showUpdForm) {
    return (
      <form onSubmit={UpdateData} className="relative max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
        <p className='absolute right-2 cursor-pointer 'onClick={handleClick}>❌</p>
        <input type="hidden" name="id" value={UpdformData.id} onChange={handleChange} />

        <label className="block text-white">Wall No:</label>

        <input
          type="text"
          name="wallNo"
          onChange={handleChange}
          value={UpdformData.wallNo}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="block text-white">Serial No:</label>
        <input
          type="text"
          name="sNo"
          onChange={handleChange}
          value={UpdformData.sNo}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="block text-white">Model:</label>
        <input
          type="text"
          name="Model"
          onChange={handleChange}
          value={UpdformData.Model}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="block text-white">Dimensions:</label>
        <input
          type="text"
          name="Dimensions"
          onChange={handleChange}
          value={UpdformData.Dimensions}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="block text-white">List Price:</label>
        <input
          // type={location.pathname === "/navHybec1" ? "text" : "number"}
          type = "text"
          name="ListPrice"
          onChange={handleChange}
          value={UpdformData.ListPrice}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


  
{hasStatusField && (<> <label className="block text-white">CutOut:</label>
        <input
          type="text"
          name="CutOut"
          onChange={handleChange}
          value={UpdformData.CutOut}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        /></>  )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  }
  
  
  return (<>
  
   { Loader ? <LoaderLight /> :  <div className="p-4 relative m-auto w-fit">
     {/* ✅ Back button at the top */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out"
        >
          <span className="text-lg">⬅</span> Back to Main
        </button>
      </div>
      <h1 className='text-3xl text-white font-bold text-center mb-2'>{title}</h1>
      <div className='container mx-auto max-w-[1140px]'>
        <table className="w-full border border-gray-300">
          <thead className='border-gray-500'>
            <tr className="bg-gray-200 w-full">
              <th className="border px-4 py-2">wallNo</th>
              <th className="border px-4 py-2">sNo</th>
              <th className="border px-4 py-2">Model</th>
              <th className="border px-4 py-2">Dimensions</th>
              <th className="border px-4 py-2">ListPrice</th>
              {hasStatusField && <th className="border px-4 py-2">CutOut</th>}
              <th className="border px-4 py-2">Action</th>
            
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border w-full">
                <td className="border text-white px-4 py-2 font-semibold">{item.wallNo}</td>
                <td className="border text-white px-4 py-2 font-semibold">{item.sNo}</td>
                <td className="border text-white px-4 py-2 font-semibold">{item.Model}</td>
                <td className="border text-white px-4 py-2 font-semibold">{item.Dimensions}</td>
                <td className="border text-white px-4 py-2">{item.ListPrice}</td>
                {hasStatusField &&  <td className="border text-white px-4 py-2"> <p>{item.CutOut}</p></td> }

                <td>
                  <button
                    onClick={() => { HandleEdit(item._id) }}

                    className="bg-blue-500 w-full text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Edit
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>}</>
  );
};

export default DataTable;
