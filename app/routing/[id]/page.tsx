"use client";
import { ProductContext } from "@/app/components/dynamicProduct/ProductContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const context = useContext(ProductContext);
  const { fetchSingleProduct, loading }: any = context;
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
        <div className="mx-auto max-w-7xl p-44 bg-violet-400 mt-4 flex justify-around">
          <div>
            <Image
              src={singleProduct?.thumbnail}
              width={100}
              height={100}
              alt="product-img"
            />
          </div>
          <div className=" w-[700px]">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
