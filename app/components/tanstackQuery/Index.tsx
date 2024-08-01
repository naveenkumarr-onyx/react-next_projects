"use client";

const productList = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
  {
    id: 5,
    name: "Product 5",
  },
  {
    id: 6,
    name: "Product 6",
  },
];

export const fetchProductList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return productList;
};

export const newProductList = async (productName: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newCreateProduct: any = {
    id: productList.length + 1,
    name: productName,
  };
  productList.push(newCreateProduct);
  return newCreateProduct;
};
