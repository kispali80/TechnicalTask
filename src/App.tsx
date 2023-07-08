import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { ProductsPage } from './pages/products'
import { CartPage } from './pages/cart'
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}
export default App
