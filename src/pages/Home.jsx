import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import Plans from '../components/Plans'
import About from '../components/AboutComponent'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import PricingComparison from '../components/PricingComparison'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks /> 
            <Plans />
            <Timeline />
            <Footer />
        </div>
    );
}