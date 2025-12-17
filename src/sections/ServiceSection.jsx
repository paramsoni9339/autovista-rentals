import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";


const ServiceSection = () => {
  return (
    <section className="">
        <div className="">

            {/* Heading  */}
            <div className="">
                <div>
                    <h2 className="">
                        Our Premium Fleet & <br className=""/> Services 
                    </h2>

                    <p className="">
                        Discover our diverse range of luxury vehicles and exceptional services tailored to elevate your driving experience.
                    </p>
                </div>

                <Link to="/fleet" className="">
                    View All Cars <MoveRight className=""/>

                </Link>

            </div>
            {/* service cards */}
            <div className=""></div>

            

        </div>

    </section>

)
}

export default ServiceSection