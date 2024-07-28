import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/Product/ProductDetail';


//BrowserRouter: container: chứa các route url
//Routes: chứa các route url trong ứng dụng
//Route: chứa các url cụ thể
//react-router-dom: thư viện giúp chuyển hướng trang web
function App() {
  return (
      <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<ProductDetail/>} />
      </Routes>
     </BrowserRouter>      
     </>
  );
}
export default App;