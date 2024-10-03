import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Server"
import Vanslist from './Vanslist.jsx';
import VanDetail from './pages/vanDetail.jsx';
// import VanDetail from './src/pages/vanDetail.jsx';

const Root = () => (
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
          {/* About Route */}
      <Route path="/about" element={<About />} />
      <Route path="/Vans" element={<Vanslist />} />
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
  </BrowserRouter>   
  </React.StrictMode>
);
// );

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
