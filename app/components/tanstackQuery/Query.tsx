"use client ";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProductList, newProductList } from "./Index";
import { greet } from "@naveenonyx/jsinstaller";

interface Product {
  id: number;
  name: string;
}

const ReactQuery = () => {
  console.log(greet("naveen"));
  const [inputValue, setInputValue] = useState("");

  const getQueryClient: any = useQueryClient();
  const { data: productList, isLoading }: any = useQuery<Product[]>({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });

  const mutation = useMutation({
    mutationFn: (newProduct: string) => newProductList(newProduct),
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });
  const handleAddNewProduct = async () => {
    await mutation.mutateAsync(inputValue);
    setInputValue("");
  };

  return (
    <div className=" flex flex-col gap-4 m-6">
      <h1 className=" font-extrabold text-4xl text-[900] text-indigo-800 ">
        These is React Query
      </h1>
      <input
        type="text"
        value={inputValue}
        name="product"
        id="product"
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter the Product"
        className="border w-[300px] focus:outline-none"
      />
      <button
        type="button"
        onClick={handleAddNewProduct}
        disabled={inputValue.trim() === ""}
        className={` bg-blue-500 p-3 rounded-sm text-white disabled:bg-gray-800`}>
        Add New Product
      </button>
      <ul>
        {isLoading ? (
          <p>Loading.....</p>
        ) : productList?.length ? (
          productList.map((val: any) => (
            <li key={val.id} className="list-disc">
              {val.name}
            </li>
          ))
        ) : (
          <p>No more Products</p>
        )}
      </ul>
    </div>
  );
};

export default ReactQuery;
