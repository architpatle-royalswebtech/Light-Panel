import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Search, FileDown, Trash2, ChevronDown, ChevronUp, X, ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Pencil, Check, X as CloseIcon } from 'lucide-react';

const CartsPage = () => {
  const navigate = useNavigate();
  const [allCarts, setAllCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(null);
  const [selectedCartData, setSelectedCartData] = useState(null);
  const [cartSearch, setCartSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [tempAddress, setTempAddress] = useState('');
  const [tempContact, setTempContact] = useState('');

  useEffect(() => {
    fetchAllCarts();
  }, []);

  // https://lightpanelbackend-3bkt.onrender.com

  const fetchAllCarts = async () => {
    try {
      const response = await axios.get("https://lightpanelbackend-3bkt.onrender.com/api/allcarts");
      setAllCarts(response.data.carts);
    } catch (err) {
      console.error("Error fetching carts:", err);
    }
  };

  const handleCartClick = async (cartName) => {
    if (selectedCart === cartName) {
      setSelectedCart(null);
      setSelectedCartData(null);
      setEditingField(null);
    } else {
      try {
        const res = await axios.get(`https://lightpanelbackend-3bkt.onrender.com/api/cart/${cartName}`);
        setSelectedCart(cartName);
        setSelectedCartData(res.data);
        setTempAddress(res.data.address || '');
        setTempContact(res.data.contact || '');
      } catch (e) {
        console.error("Error fetching cart:", e);
        setSelectedCart(cartName);
        setSelectedCartData(null);
      }
    }
  };

  const startEditing = (field) => {
    setEditingField(field);
  };

  const cancelEditing = () => {
    setEditingField(null);
  };

  const saveEditing = async () => {
  try {
    const updatedData = {
      ...selectedCartData,
      address: editingField === 'address' ? tempAddress : selectedCartData.address,
      contact: editingField === 'contact' ? tempContact : selectedCartData.contact
    };
    
    
    await axios.post("https://lightpanelbackend-3bkt.onrender.com/api/carts", {
      cartName: selectedCart,
      items: selectedCartData.items,
      address: updatedData.address,
      contact: updatedData.contact
    });
    
    setSelectedCartData(updatedData);
    setEditingField(null);
    alert("Changes saved successfully");
  } catch (err) {
    console.error("Error saving field:", err);
    alert("Failed to save changes");
  }
};

  const exportPDF = () => {
    if (!selectedCartData) return;
  
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Cart: ${selectedCart}`, 14, 16);
    doc.setFontSize(10);
    doc.text(`Created: ${new Date(selectedCartData.createdAt).toLocaleString()}`, 14, 28);
    
    if (selectedCartData.address) {
      doc.text(`Address: ${selectedCartData.address}`, 14, 40);
    }
    if (selectedCartData.contact) {
      doc.text(`Contact: ${selectedCartData.contact}`, 14, selectedCartData.address ? 46 : 40);
    }

    const tableBody = selectedCartData.items.map((item) => [
      item.Model || "-",
      item.Dimensions || "-",
      (item.ListPrice || "0").toLocaleString(),
      item.remark || "-",  
      item.qty || 1,
      


    ]);
  
    const total = selectedCartData.items.reduce((sum, item) => {
      const price = parseFloat(item.ListPrice?.replace(/[^0-9.]/g, "") || 0);
      return sum + price * (item.qty || 1);
    }, 0);
  
    autoTable(doc, {
      startY: selectedCartData.address || selectedCartData.contact ? 52 : 34,
      head: [["Model", "Dimensions", "List Price", "Remark","Qty",]],
      body: tableBody,
      theme: "striped",
      styles: { halign: "left" },
    });
  
    doc.setFontSize(12);
    doc.text(`Total: ${total.toLocaleString()}`, 14, doc.lastAutoTable.finalY + 10);
    doc.save(`${selectedCart}.pdf`);
  };

  const deleteCart = async () => {
    if (!selectedCart || isDeleting) return;
    
    setIsDeleting(true);
    const confirmDelete = window.confirm(`Delete cart "${selectedCart}"?`);
    if (!confirmDelete) {
      setIsDeleting(false);
      return;
    }

    try {
      await axios.delete(`https://lightpanelbackend-3bkt.onrender.com/api/cart/${selectedCart}`);
      alert("Cart deleted successfully.");
      fetchAllCarts();
      setSelectedCart(null);
      setSelectedCartData(null);
      setEditingField(null);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete cart.");
    } finally {
      setIsDeleting(false);
    }
  };

  const updateQty = (model, delta) => {
    const updated = selectedCartData.items.map((item) =>
      item.Model === model ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) } : item
    );
    setSelectedCartData({ ...selectedCartData, items: updated });
  };

  const removeItem = (model) => {
    const updated = selectedCartData.items.filter((item) => item.Model !== model);
    setSelectedCartData({ ...selectedCartData, items: updated });
  };

 const saveChanges = async () => {
  try {
    await axios.post("https://lightpanelbackend-3bkt.onrender.com/api/carts", {
      cartName: selectedCart,
      items: selectedCartData.items,
      address: selectedCartData.address || '',
      contact: selectedCartData.contact || ''
    });
    alert("Cart updated successfully.");
  } catch (err) {
    console.error("Save error:", err);
    alert("Failed to save cart.");
  }
};

  const totalPrice = () => {
    if (!selectedCartData) return 0;
    return selectedCartData.items.reduce((sum, item) => {
      const price = parseFloat(item.ListPrice?.replace(/[^0-9.]/g, "") || 0);
      return sum + price * (item.qty || 1);
    }, 0);
  };

  const uniqueCartNames = [...new Set(allCarts.map((c) => c.cartName))];
  const filteredCarts = uniqueCartNames.filter((name) =>
    name.toLowerCase().includes(cartSearch.toLowerCase())
  );

  const filteredItems = selectedCartData
    ? selectedCartData.items.filter((item) =>
        item.Model?.toLowerCase().includes(productSearch.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        
        <div className="flex items-center mb-8">
          <ShoppingCart className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Shopping Carts Manager
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar - Cart List */}
          <div className="w-full lg:w-auto lg:col-span-1 bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 h-fit lg:sticky top-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-200">Your Carts</h2>
              <span className="bg-purple-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                {filteredCarts.length}
              </span>
            </div>

            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search carts..."
                value={cartSearch}
                onChange={(e) => setCartSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-200 sm:text-sm"
              />
            </div>

            <ul className="space-y-2 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
              {filteredCarts.length > 0 ? (
                filteredCarts.map((cartName) => (
                  <li key={cartName}>
                    <button
                      className={`w-full flex justify-between items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                        selectedCart === cartName
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => handleCartClick(cartName)}
                    >
                      <span className="truncate">{cartName}</span>
                      {selectedCart === cartName && (
                        <span className="bg-black bg-opacity-30 text-white text-xs px-2 py-0.5 rounded-full">
                          {selectedCartData?.items.length || 0}
                        </span>
                      )}
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-center text-gray-500 py-4 text-sm">
                  {cartSearch ? "No matching carts" : "No carts available"}
                </li>
              )}
            </ul>
          </div>

          {/* Main Content - Cart Details */}
          <div className="lg:col-span-4">
            {selectedCartData ? (
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                {/* Cart Header */}
                <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 bg-opacity-50">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{selectedCart}</h3>
                    <p className="text-sm text-gray-400">
                      Created: {new Date(selectedCartData?.createdAt).toLocaleString()}
                    </p>
                    
                    {/* Address Field */}
                    <div className="flex items-start gap-2 mt-2">
                      <span className="text-sm text-gray-400 min-w-[60px]">Address:</span>
                      {editingField === 'address' ? (
                        <div className="flex flex-col gap-2 w-full">
                          <textarea
                            value={tempAddress}
                            onChange={(e) => setTempAddress(e.target.value)}
                            className="bg-gray-700 text-white px-3 py-2 rounded text-sm w-full min-h-[80px]"
                            autoFocus
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={saveEditing}
                              className="flex items-center gap-1 text-xs px-2 py-1 bg-green-600 hover:bg-green-700 rounded"
                            >
                              <Check size={14} /> Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded"
                            >
                              <CloseIcon size={14} /> Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2 w-full">
                          <p className="text-sm text-gray-300 flex-1 whitespace-pre-line">
                            {selectedCartData?.address || (
                              <span className="italic text-gray-500">No address provided</span>
                            )}
                          </p>
                          <button
                            onClick={() => startEditing('address')}
                            className="text-gray-400 hover:text-purple-400 p-1"
                            title="Edit address"
                          >
                            <Pencil size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Contact Field */}
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-sm text-gray-400 min-w-[60px]">Contact:</span>
                      {editingField === 'contact' ? (
                        <div className="flex items-center gap-2 w-full">
                          <input
                            type="text"
                            value={tempContact}
                            onChange={(e) => setTempContact(e.target.value)}
                            className="bg-gray-700 text-white px-3 py-2 rounded text-sm flex-1"
                            autoFocus
                          />
                          <button
                            onClick={saveEditing}
                            className="p-1 text-green-400 hover:text-green-300"
                            title="Save"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="p-1 text-red-400 hover:text-red-300"
                            title="Cancel"
                          >
                            <CloseIcon size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 w-full">
                          <p className="text-sm text-gray-300 flex-1">
                            {selectedCartData?.contact || (
                              <span className="italic text-gray-500">No contact provided</span>
                            )}
                          </p>
                          <button
                            onClick={() => startEditing('contact')}
                            className="text-gray-400 hover:text-purple-400 p-1"
                            title="Edit contact"
                          >
                            <Pencil size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-400 mt-2">
                      {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} • 
                      Total: ₹{totalPrice().toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    {filteredItems.length > 0 && (
                      <button
                        onClick={exportPDF}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Export PDF
                      </button>
                    )}
                    <button
                      onClick={deleteCart}
                      disabled={isDeleting}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all ${isDeleting ? 'opacity-70' : ''}`}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {isDeleting ? 'Deleting...' : 'Delete Cart'}
                    </button>
                  </div>
                </div>

                {/* Product Search */}
                <div className="px-6 py-4 border-b border-gray-700">
                  <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-200 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900 bg-opacity-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Model
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Dimensions
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Remark
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-900 hover:bg-opacity-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-white">{item.Model}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">{item.Dimensions}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-green-400">₹{item.ListPrice}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => updateQty(item.Model, -1)}
                                  className="p-1.5 rounded-md border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                >
                                  <ChevronDown className="h-4 w-4 text-gray-300" />
                                </button>
                                <span className="text-sm font-medium text-white w-6 text-center">
                                  {item.qty || 1}
                                </span>
                                <button
                                  onClick={() => updateQty(item.Model, 1)}
                                  className="p-1.5 rounded-md border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                >
                                  <ChevronUp className="h-4 w-4 text-gray-300" />
                                </button>
                              </div>
                            </td>
    
        <td className="px-6 py-4 whitespace-nowrap">
          {editingField === `remark-${item.Model}` ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={item.remark || ''}
                onChange={(e) => {
                  const updated = selectedCartData.items.map(i => 
                    i.Model === item.Model ? {...i, remark: e.target.value} : i
                  );
                  setSelectedCartData({...selectedCartData, items: updated});
                }}
                className="bg-gray-700 text-white px-2 py-1 rounded text-sm w-full"
                autoFocus
              />
              <button
                onClick={() => setEditingField(null)}
                className="p-1 text-green-400 hover:text-green-300"
              >
                <Check size={14} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300">
                {item.remark || 'N/A'}
              </span>
              <button
                onClick={() => setEditingField(`remark-${item.Model}`)}
                className="text-gray-400 hover:text-purple-400 p-1"
              >
                <Pencil size={14} />
              </button>
            </div>
          )}
        </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => removeItem(item.Model)}
                                className="text-red-400 hover:text-red-300 flex items-center justify-end w-full transition-colors"
                              >
                                <X className="mr-1.5 h-4 w-4" /> Remove
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
  <td colSpan="6" className="px-6 py-8 text-center"> {/* Updated from 5 to 6 */}
    <div className="text-gray-500 flex flex-col items-center">
      <ShoppingCart className="h-10 w-10 mb-2 opacity-50" />
                              <p className="mb-4">
                                {productSearch ? 
                                  "No products match your search" : 
                                  "This cart is empty"}
                              </p>
                              <button
                                onClick={deleteCart}
                                disabled={isDeleting}
                                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all ${isDeleting ? 'opacity-70' : ''}`}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                {isDeleting ? 'Deleting...' : 'Delete Empty Cart'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Cart Footer */}
                {filteredItems.length > 0 && (
                  <div className="px-6 py-4 border-t border-gray-700 bg-gray-900 bg-opacity-50 flex justify-between items-center">
                    <div className="text-lg font-bold text-white">
                      Total: <span className="text-green-400">₹{totalPrice().toLocaleString()}</span>
                    </div>
                    <button
                      onClick={saveChanges}
                      className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-12 text-center">
                <div className="mx-auto h-24 w-24 text-gray-600 mb-4">
                  <ShoppingCart className="h-full w-full opacity-50" />
                </div>
                <h3 className="mt-2 text-xl font-medium text-gray-200">No cart selected</h3>
                <p className="mt-2 text-gray-500 max-w-md mx-auto">
                  {filteredCarts.length > 0 ? 
                    "Select a cart from the sidebar to view and manage its contents." : 
                    "Create a new cart to get started."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsPage;