"use client";
import { ProductContext } from "@/app/components/dynamicProduct/ProductContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const context = useContext(ProductContext);
  const { fetchSingleProduct, addToCart, loading, cartItems }: any = context;
  const [singleProduct, setSingleProduct]: any = useState([]);

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await fetchSingleProduct(params.id);
      setSingleProduct(response);
    };
    getSingleProduct();
  }, [params.id]);
  return (
    <div>
      {loading ? (
        <h1>Product is loading...</h1>
      ) : (
        <div className="mx-auto  max-w-7xl p-4  h-[90vh]  shadow-lg flex justify-around items-center bg-white">
          <div className="max-w-6xl bg-white shadow-md">
            <Image
              src={singleProduct?.thumbnail}
              width={300}
              height={0}
              alt="product-img"
            />
          </div>
          <div className=" w-[700px] flex flex-col gap-3">
            <h1>{singleProduct.title}</h1>
            <p>{singleProduct.description}</p>
            <p> ${singleProduct.price}</p>
            <p>
              {singleProduct.reviews?.map((val: any, index: any) => {
                return (
                  <div key={index}>
                    <h1>{val.rating}</h1>
                    <p>{val.comment}</p>
                    <p>{val.date}</p>
                  </div>
                );
              })}
            </p>
            <button
              className="max-w-[200px] px-1 py-1 bg-blue-900 text-white shadow-lg text-center rounded-md hover:bg-blue-800"
              onClick={() => addToCart(singleProduct)}>
              Add to Cart
            </button>
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
        </div>
      )}
    </div>
  );
};

export default Page;
