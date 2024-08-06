"use client";
import React, { useContext } from "react";
import { ProductContext } from "../components/dynamicProduct/ProductContext";
import ProductComponent from "../components/dynamicProduct/ProductComponent";

const Page = () => {
  const context = useContext(ProductContext);
  const { listOfProducts, loading }: any = context;
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
      <div className="px-4 mx-auto sm:px-6 lg-px-8 max-w-6xl ">
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
    </section>
  );
};

export default Page;
