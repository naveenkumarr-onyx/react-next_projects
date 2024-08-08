import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ProductComponent = ({ val }: any) => {
  const context = useContext(ProductContext);
  const { addToCart, cartItems }: any = context;
  return (
    <div className="border border-cyan-700 flex flex-col items-center justify-center p-2">
      <div className="transition-all duration-700">
        <Image
          src={val?.thumbnail}
          alt="product-images"
          width={500}
          height={1000}
          className="h-full w-full object-cover transform hover:scale-110 group-hover:duration-700  group-hover:ease-linear"
        />
      </div>
      <div className=" flex flex-col items-center  mt-4 space-x-4 gap-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs flex">
          <h1 className=" w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
            {val.title}
          </h1>
          <p className="text-gray-600">$.{val.price}</p>
        </div>
        <Link
          href={`/routing/${val.id}`}
          className="bg-black text-white p-[10px] rounded-md">
          More Details
        </Link>
        <button
          className="bg-black text-white p-[10px] rounded-md disabled:opacity-65"
          disabled={cartItems.findIndex((item: any) => item.id === val.id) > -1}
          onClick={() => addToCart(val)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
