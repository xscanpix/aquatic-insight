"use client";

import { getQueryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type AppProviderProps = {
  children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <p>Loading!</p>
        </div>
      }
    >
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <QueryClientProvider client={getQueryClient()}>{children}</QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default ReactQueryProvider;
