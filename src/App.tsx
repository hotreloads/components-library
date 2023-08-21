import FaqFour from "./Components/landing/faq/FaqFour";
import FeatureFour from "./Components/landing/feature/FeatureFour";
import FooterOne from "./Components/landing/footer/FooterOne";
import HeroOne from "./Components/landing/hero/HeroOne";
import NavOne from "./Components/landing/nav/NavOne";
import PricingThree from "./Components/landing/pricing/PricingThree";

function App() {
	return (
		<main className="min-h-screen flex flex-col">
			<NavOne />
			<HeroOne />
			<FeatureFour />
			<PricingThree />
			<FaqFour />
			<FooterOne />
		</main>
	);
}

export default App;
