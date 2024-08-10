"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./components/tanstackQuery/Query";
import { useState } from "react";
import RenderHtml from "./components/htmlparser/RenderHtml";
import TextEditor from "./components/TextEditor";

export default function Home() {
  return (
    <main>
      <TextEditor />
    </main>
  );
}
