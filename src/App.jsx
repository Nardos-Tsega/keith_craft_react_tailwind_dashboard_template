import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          </Route>
        </Routes>
    </Router>
  )
}
