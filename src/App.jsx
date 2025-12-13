import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//all future pages to go here
import HomePage from "./pages/HomePage";

const App = () => {
  return <div className="text-zinc-100 bg-zinc-950">
    <NavBar/>  
    
    <main className="min-h-screen">
        {/*  pages here */}
    
        <HomePage />
    
    </main>

    <Footer/>
  </div>;

};

export default App;
