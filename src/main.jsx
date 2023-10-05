import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Stories from "./pages/Stories.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="stories" element={<Stories />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
