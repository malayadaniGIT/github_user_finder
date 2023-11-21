import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Custom } from './Components/Context';

ReactDOM.render(
  <ChakraProvider>
    <Custom>
      <div style={{ backgroundColor:"lightsteelblue" }}>
        <App />
      </div>
    </Custom>
  </ChakraProvider>,
  document.getElementById('root')
);

