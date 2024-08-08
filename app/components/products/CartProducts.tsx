"use client";
import Image from "next/image";
import React, { Fragment, useContext } from "react";
import { ProductContext } from "../dynamicProduct/ProductContext";

const CartProducts = ({ products }: any) => {
  const context = useContext(ProductContext);
  const { removeFromCart, addToCart }: any = context;
  return (
    <Fragment>
      <div className="transition-all duration-500  gap-2 flex justify-between items-center p-3">
        <div className="flex items-center gap-4">
          <Image
            width={100}
            height={50}
            alt="products-cart"
            className=" bg-white object-cover w-[50px]"
            src={products.thumbnail}
          />
          <div className="font-bold flex-col gap-2 text-gray-900 sm:text-sm text-xs flex">
            <h1 className=" w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              {products.title}
            </h1>
            <button
              onClick={() => removeFromCart(products, true)}
              className="bg-black py-2 rounded-md text-white">
              Remove
            </button>
          </div>
        </div>
        <div className="flex flex-col mr-2">
          <p className="font-bold text-gray-500">
            $.
            {products.totalPrice?.toFixed(2)}
          </p>
          <p className="mt-2 mb-3 font-bolf text-[16px]">
            Quantity: {products.quantity}
          </p>
          <div className="mt-2 flex gap-3">
            <button
              className="border border-black px-2 rounded-sm disabled:cursor-not-allowed"
              disabled={products.quantity === 1}
              onClick={() => removeFromCart(products, false)}>
              -
            </button>
            <button
              onClick={() => addToCart(products)}
              className="border border-black px-2 rounded-sm ">
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-[1px] opacity-[5px] border-black" />
    </Fragment>
  );
};

export default CartProducts;
