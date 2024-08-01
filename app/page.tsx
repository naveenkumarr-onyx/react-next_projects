"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./components/tanstackQuery/Query";
import { useState } from "react";

export default function Home() {
  const [client] = useState(new QueryClient());
  return (
    <main>
      <div>
        <QueryClientProvider client={client}>
          <ReactQuery />
        </QueryClientProvider>
      </div>
    </main>
  );
}
