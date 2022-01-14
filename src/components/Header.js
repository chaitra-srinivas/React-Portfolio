import Navigation from "./Navigation";

export default function Header(){
    return (
        <header id="header" className="bg-gray-800 md:sticky top-0 z-10">
            <Navigation />
        </header>
      );
}