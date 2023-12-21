"use client"

import { queryClient } from "@/services/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
