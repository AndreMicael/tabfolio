import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          
          baseStyle: {
            color: 'branco.100',
            border: '2px solid', 
            borderColor: 'gray.200', 
          },
        
          
          _selected: {
            bg: 'verde.100',
            color: 'branco.100',
            borderRadius: '10px 10px 0 0',
            border: 'none', 
          },
          _hover: {
            borderColor: 'gray.300',
          }
        }
      }
    }
  },
  colors: {
    verde: {
      100: "#23CE99",
    },
    preto: {
      100: "#252527",
    },
    branco: {
      100: "#FFFFFF",
      300: "#D1D1D1",
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
