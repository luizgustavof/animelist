import React from 'react'
import ReactDOM from 'react-dom/client'
import RootContainer from './styles/components/RootContainer'
import GlobalStyle from './styles/GlobalStyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProviderBackgroundContainer } from './contexts/BackgroundContainer'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ProviderBackgroundContainer>
        <RootContainer />
      </ProviderBackgroundContainer>
    </QueryClientProvider>
  </React.StrictMode>,
)