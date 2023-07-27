"use client";
import React, {useState, useEffect, useContext} from "react";
import Header from "@/components/roomHeader";
import {CartContext} from "@/contexts/cart";
import Cart from "@/components/cart";
import {rooms} from "@/lib/links";

export default function Room() {
  const [showModal, setshowModal] = useState(false);
  const {cartItems, addToCart} = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <section className="p-10">
        <div className="flex flex-col justify-center bg-gray-100">
          <div className="flex justify-between items-center px-20 py-5">
            <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
              Our Rooms
            </h1>
            {!showModal && (
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={toggle}
              >
                Cart ({cartItems.length})
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white shadow-md rounded-lg px-10 py-10"
              >
                <img
                  src={room.thumbnail}
                  alt={room.title}
                  className="rounded-md h-48"
                />
                <div className="mt-4">
                  <h1 className="text-lg uppercase font-bold">{room.title}</h1>
                  <p className="mt-2 text-gray-600 text-sm">
                    {room.description.slice(0, 40)}...
                  </p>
                  <p className="mt-2 text-gray-600">${room.price}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(room);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Cart showModal={showModal} toggle={toggle} />
        </div>
      </section>
    </>
  );
}
