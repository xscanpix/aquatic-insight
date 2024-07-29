import { DefaultOptions, defaultShouldDehydrateQuery, isServer, QueryClient } from "@tanstack/react-query";

// Configuration for react-query QueryClient
const queryConfig = {
  queries: {
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 6 * 1000,
  },
  dehydrate: {
    shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
  },
} satisfies DefaultOptions;

// Create and return a new QueryClient
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: queryConfig,
  });
}

// Cache client side QueryClient
let browserQueryClient: QueryClient | undefined = undefined;

// Return correct QueryClient
export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
}
