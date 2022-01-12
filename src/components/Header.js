import Navigation from "./Navigation";

export default function Header(){
    return (
        <section id="header" className="bg-gray-500 p-8 dark:bg-gray-800">
            <Navigation />
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> 
            </div>
        </section>
      );
}