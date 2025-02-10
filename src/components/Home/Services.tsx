import { Link } from "react-router-dom";
import Container from "../Container";
import SectionSubTitle from "../SectionSubTitle";
import SectionTitle from "../SectionTitle";

const Services = () => {
  return (
    <Container>
      {/* Title */}
      <div className="grid grid-cols-1 mb-7">
        <SectionSubTitle>What we do</SectionSubTitle>
        <SectionTitle>Services</SectionTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/services">
          <div className="w-64 my-4">
            <div className="text-right relative z-50">
              <h4 className="service-title">Wedding Photography</h4>
            </div>
            <div className="relative service-img-div">
              <img src="/src/assets/images/about.jpg" alt="" className="service-img"/>
            </div>
          </div>
        </Link>
        <Link to="/services">
          <div className="w-64 my-4">
            <div className="text-right relative z-50">
              <h4 className="service-title">Wedding Photography</h4>
            </div>
            <div className="relative service-img-div">
              <img src="/src/assets/images/about.jpg" alt="" className="service-img"/>
            </div>
          </div>
        </Link>
        <Link to="/services">
          <div className="w-64 my-4">
            <div className="text-right relative z-50">
              <h4 className="service-title">Wedding Photography</h4>
            </div>
            <div className="relative service-img-div">
              <img src="/src/assets/images/about.jpg" alt="" className="service-img"/>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Services;
