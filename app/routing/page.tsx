"use client";
import React, { useContext } from "react";
import { ProductContext } from "../components/dynamicProduct/ProductContext";
import ProductComponent from "../components/dynamicProduct/ProductComponent";
import Link from "next/link";

const Page = () => {
  const context = useContext(ProductContext);
  const { listOfProducts, loading, cartItems }: any = context;

  if (loading)
    return (
      <div className="px-4 py-6 mx-auto sm:px-6 lg-px-8 max-w-7xl">
        <h1 className="text-3l font-extrabold text-gray-950 sm:text-4xl text-center">
          Loading.... Please wait Patiently!!
        </h1>
      </div>
    );

  return (
    <section className="py-12 bg-white sm:py-16 lg:py:20">
      <div className="px-4 mx-auto flex sm:px-6 lg-px-8 max-w-6xl">
        <div>
          <div className="text-3xl font-extrabold text-gray-950 sm:text-4xl text-center">
            List Of Products
          </div>
          <div className="grid grid-flow-row grid-cols-4 gap-7 mt-6">
            {listOfProducts && listOfProducts.length > 0 ? (
              listOfProducts?.map((val: any) => {
                return (
                  <div key={val.id}>
                    <ProductComponent val={val} />
                  </div>
                );
              })
            ) : (
              <h1>No Products Available</h1>
            )}
          </div>
        </div>
        <div className="mt-3 relative max-h-[20px] ">
          <div className="w-[100px] flex items-center justify-center">
            <Link
              href={"/cart"}
              className=" bg-blue-900 text-white  text-center px-3 rounded-md">
              show cart
            </Link>
          </div>
          <div
            className="w-[20px] h-[20px] bg-yellow-200
           absolute left-[87px] top-[-10px] rounded-full">
            <h1 className="flex items-center justify-center font-bold mb-1">
              {cartItems.length}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
