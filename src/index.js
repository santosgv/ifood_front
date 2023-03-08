import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Background from './components/Background';
import MultiActionAreaCard from './components/MultiActionAreaCard'
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ResponsiveAppBar />
    <Background />
    <MultiActionAreaCard />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
