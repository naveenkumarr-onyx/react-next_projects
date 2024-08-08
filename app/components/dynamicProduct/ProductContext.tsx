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
  const [cartItems, setCartItems]: any = useState([]);

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

  const addToCart = (Items: any) => {
    var exstingItems: any = [...cartItems];
    var findIndexOfCurrentItem = exstingItems.findIndex(
      (cartItem: any) => cartItem.id === Items.id
    );
    if (findIndexOfCurrentItem === -1) {
      console.log("product adding but not quantity increasing");
      exstingItems.push({
        ...Items,
        quantity: 1,
        totalPrice: Items.price,
      });
    } else {
      console.log("product already but quantity only  increasing");
      exstingItems[findIndexOfCurrentItem] = {
        ...exstingItems[findIndexOfCurrentItem],
        quantity: exstingItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (exstingItems[findIndexOfCurrentItem].quantity + 1) *
          exstingItems[findIndexOfCurrentItem].price,
      };
    }
    setCartItems(exstingItems);
    localStorage.setItem("cartItems", JSON.stringify(exstingItems));
  };

  const removeFromCart = (cartItemDetails: any, isFullyRemoved: boolean) => {
    var exstingItems: any = [...cartItems];
    const findingIndexItem = exstingItems.findIndex((cartItem: any) => {
      return cartItem.id === cartItemDetails.id;
    });

    if (isFullyRemoved) {
      console.log("Remove full cart of item");
      exstingItems.splice(findingIndexItem, 1);
    } else {
      console.log(
        "Not Remove full cart of item and also decreasing  the Quantity"
      );
      exstingItems[findingIndexItem] = {
        ...exstingItems[findingIndexItem],
        quantity: exstingItems[findingIndexItem].quantity - 1,
        totalPrice:
          (exstingItems[findingIndexItem].quantity - 1) *
          exstingItems[findingIndexItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(exstingItems));
    setCartItems(exstingItems);
  };

  useEffect(() => {
    fetchListOfProducts();
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  return (
    <ProductContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        fetchSingleProduct,
        addToCart,
        cartItems,
        removeFromCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
