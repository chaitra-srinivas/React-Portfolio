import Navigation from "./Navigation";
import background from "./pages/images/geo.png";

export default function Header() {
  return (
    <header id='header' className='bg-gray-800 md:sticky top-0 z-10'  style={{
      backgroundImage: `url(${background})`,
    }}>
      <Navigation />
    </header>
  );
}
