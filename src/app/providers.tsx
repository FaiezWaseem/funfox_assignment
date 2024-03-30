// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

const theme = {
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    app : {
      bgPink : '#F8D1E0',
      bglightGray : '#F7F9FE'
    }
  },
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider  theme={theme} >{children}</ChakraProvider>
}