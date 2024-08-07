"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./components/tanstackQuery/Query";
import { useState } from "react";
import RenderHtml from "./components/htmlparser/RenderHtml";

export default function Home() {
  const [client] = useState(new QueryClient());
  return (
    <main>
      <div>
        <QueryClientProvider client={client}>
          <ReactQuery />
          <RenderHtml />
        </QueryClientProvider>
      </div>
    </main>
  );
}
