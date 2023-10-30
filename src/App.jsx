import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Login from './auth/Login';
import TableVendor from './components/TableVendor';
import Neraca from './components/Neraca';
import LabaRugi from './components/LabaRugi';
import ArusKas from './components/ArusKas';
import Kontak from './components/Kontak';
import Customer from './components/Customer';
import Product from './components/Products';
import Sales from './components/Sales';
import Inbox from './components/Inbox';
import Register from './auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route element={<Layout />}>
          {/* Ini yang di bawah adalah Outlet */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="vendor" element={<TableVendor />} />
          <Route path="produk" element={<Product />} />
          <Route path="sales" element={<Sales />} />
          <Route path="neraca" element={<Neraca />} />
          <Route path="labarugi" element={<LabaRugi />} />
          <Route path="aruskas" element={<ArusKas />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="customer" element={<Customer />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          {/* Ini yang di atas adalah Outlet */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
