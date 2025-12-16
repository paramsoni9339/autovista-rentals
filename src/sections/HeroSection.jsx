import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[url(/car2.png)] bg-no-repeat bg-top">
      
        {/* container */}
        <div className="container avsolute mx-auto px-6 bottom-10 z-10">

            <div className="z-50 gap-4 md:centered-row lg:gap-80">
      {/* left */}
          <div className="z-10 left">

              <div lassName="col max-w-3xl  mx-auto">
                  {/* sub head */}
                    <div className="mb-4">
                      <div className="bg-zinc-300/20 text-zince-50 reounded-fiull px-4 -y-1 text-sm font-medium inline-flex items-center clash-display">
                        <Sparkles className=""/> Your Journey, Elevated with Autovista Rentals  
                      </div>
                    </div>
                  {/* main head */}

                  <h1 className="">
                    <span className="">Premium </span> Cars, <br /> Rentals
                  </h1>
              </div>

          </div>
          {/* right */}
          
          <div className="">
            
            <p className=""> Unlock unparalleled freedom with our premium car rental service 
             <br className=""/> Experience luxury, comfort, and seamless booking on every journey.     
            </p>
            </div>        

            </div>

        </div>
  
    </div>
  );
};

export default HeroSection;