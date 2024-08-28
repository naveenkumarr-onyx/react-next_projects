"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

export default function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
