"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ProductContextType {
  loading: boolean;
  listOfProducts: any[];
  setLoading: Dispatch<SetStateAction<boolean>>;
  setListOfProducts: Dispatch<SetStateAction<any[]>>;
  fetchSingleProduct: (id: number) => Promise<any>;
}

export const ProductContext: any = createContext<ProductContextType | null>(
  null
);

export const ProductProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);

  const fetchListOfProducts = async () => {
    const api = await fetch(`https://dummyjson.com/products`);
    try {
      const response = await api.json();
      if (response && response?.products) {
        setListOfProducts(response.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (id: number) => {
    const api = await fetch(`https://dummyjson.com/products/${id}`);
    try {
      const response = await api.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{ listOfProducts, loading, setLoading, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
