import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Prices from "./pages/Prices"
import Contact from "./pages/Contact"
import BasicPlan from "./pages/plans/basic"
import Premier from "./pages/plans/premier"
import FinancialUpdate from "./pages/plans/financial-update"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/pricing" element={ <Prices/> } />
        <Route path="/contact" element={ <Contact /> } />
        
        <Route path="/basic" element={ <><ScrollToTop /><BasicPlan /></> } />
        <Route path="/premier" element={ <><ScrollToTop /><Premier /></> } />
        <Route path="/financial-update" element={ <><ScrollToTop /><FinancialUpdate /></> } />
    
    </Routes>
  )
}

export default App
