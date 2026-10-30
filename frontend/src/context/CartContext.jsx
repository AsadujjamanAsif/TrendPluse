import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems((prevItems) => {
      const existItem = prevItems.find((x) => x._id === product._id);
      if (existItem) {
        return prevItems.map((x) =>
          x._id === existItem._id ? { ...existItem, qty: existItem.qty + qty } : x
        );
      } else {
        return [...prevItems, { ...product, qty }];
      }
    });
  };

  // নতুন: কার্ট থেকে প্রোডাক্ট মুছে ফেলার ফাংশন
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((x) => x._id !== id));
  };

  // নতুন: প্রোডাক্টের পরিমাণ (Quantity) আপডেট করার ফাংশন
  const updateQuantity = (id, qty) => {
    if (qty <= 0) return; // পরিমাণ যেন 0 বা মাইনাস না হয়
    setCartItems((prevItems) =>
      prevItems.map((x) => (x._id === id ? { ...x, qty } : x))
    );
  };

  return (
    // নতুন ফাংশনগুলো Provider এর মাধ্যমে পাস করা হলো
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};