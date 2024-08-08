"use client";
import React, { useContext } from "react";
import { ProductContext } from "../dynamicProduct/ProductContext";
import Link from "next/link";
import CartProducts from "./CartProducts";

const CartList = () => {
  const context = useContext(ProductContext);
  const { cartItems }: any = context;
  console.log(cartItems);
  return (
    <div className=" max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800">My Cart Page</h1>
      <div className=" grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 flex flex-col 1 space-y-4">
          {cartItems?.length > 0 ? (
            cartItems.map((items: any) => (
              <CartProducts key={items.id} products={items} />
            ))
          ) : (
            <p className=" font-bold text-gray-700 text-2xl">
              No items available in cart!!
            </p>
          )}
        </div>
        <div className=" bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="font-extralight text-gray-950 text-xl">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total
              <span>
                $.
                {cartItems
                  .reduce((acc: any, curr: any) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className=" flex flex-row mt-5  gap-3">
            <button className=" text-sm px-4 py-3 bg-black text-white font-extrabold ">
              Checkout
            </button>
            <Link
              href={"/routing"}
              className=" text-sm px-4 py-3 bg-black text-white font-extrabold ">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
