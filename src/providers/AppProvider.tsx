import { ReactNode } from "react"
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"
import { AuthProvider } from "../contexts/AuthContext"

const queryClient = 
  new QueryClient()

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider
      client={queryClient}  
    >
      <AppProvider>
        {children}
      </AppProvider>
    </QueryClientProvider>
  )
}

export default AppProvider;