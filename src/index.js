import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//
import { ThemeProvider } from '@mui/material/styles';
//
import { App } from 'components/App/App';
import './index.css';
import { theme } from './Theme/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import { ThemeProvider } from "@emotion/react";
//
// import { theme } from "./Theme/Theme";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
