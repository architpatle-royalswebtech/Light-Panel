
// export default CartSystem;
import React, { useEffect } from "react";
import axios from "axios";

const CartSystem = ({ cartData, selectedCart, setSelectedCart, updateCart }) => {
  const currentItems = (selectedCart && cartData[selectedCart]) || [];

  useEffect(() => {
    const fetchCart = async () => {
      if (!selectedCart) return;
      try {
        const res = await axios.get(`https://light-panel-muvs.onrender.com/api/cart/${selectedCart}`);
        const cart = res.data;
        updateCart(selectedCart, cart.items || []);
      } catch (e) {
        console.log("No cart found.");
        updateCart(selectedCart, []);
      }
    };

    fetchCart();
  }, [selectedCart, updateCart]);

  const addItem = async (item) => {
    if (!selectedCart) {
      const choice = prompt("Type 'new' to create new cart");
      if (choice === "new") {
        const name = prompt("Enter new cart name:");
        if (!name) return;
        if (cartData[name]) return alert("Cart already exists.");
        setSelectedCart(name);
        updateCart(name, [item]);
        await saveCart(name, [item]);
      } else if (choice === "use") {
        const name = prompt("Enter cart name:");
        try {
          const res = await axios.get(`https://light-panel-muvs.onrender.com/api/cart/${name}`);
          const cart = res.data;
          setSelectedCart(name);  
          updateCart(name, cart.items || []);
        } catch (err) {
          alert("Cart not found.");
        }
      }
    } else {
      const exists = currentItems.some((i) => i.Model === item.Model);
      if (!exists) {
        const newItems = [...currentItems, { ...item, qty: 1 }];
        updateCart(selectedCart, newItems);
      } else {
        alert("Item already exists in cart.");
      }
    }
  };

  const removeItem = (model) => {
    const newItems = currentItems.filter((i) => i.Model !== model);
    updateCart(selectedCart, newItems);
  };

  const changeQty = (model, delta) => {
    const updated = currentItems.map((i) =>
      i.Model === model ? { ...i, qty: Math.max(1, (i.qty || 1) + delta) } : i
    );
    updateCart(selectedCart, updated);
  };

  const saveCart = async (name, items) => {
    try {
      await axios.post("https://light-panel-muvs.onrender.com/api/carts", {
        cartName: name,
        items: items,
      });
      alert("Cart saved successfully!");
    } catch (e) {
      console.error("Save error:", e);
      alert("Failed to save cart.");
    }
  };

 
};

export default CartSystem;
