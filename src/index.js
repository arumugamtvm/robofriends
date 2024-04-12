import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons'
import App from './containers/App'
import Welcome from './components/Welcome'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/robofriends/' element={<App />} />
      <Route path='/robofriends/:name' element={<Welcome />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
