import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title: "NBBT Transporter - Fast. Reliable. Nationwide Transport Solutions.",
  description:
    "Experience premium logistics services with unmatched safety, lightning-fast delivery, and affordable pricing. Your cargo, our commitment.",
  keywords:
    "transportation, logistics, freight, trucking, delivery, cargo, nationwide transport, local trucking, freight transport, long-distance delivery, business logistics",
};

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
