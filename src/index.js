import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Comment this line out or remove it
import App from './App';

// PrimeReact CSS imports
import 'primereact/resources/themes/saga-blue/theme.css';  // Or any other theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // PrimeIcons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);