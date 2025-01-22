import "animate.css";
import Container from "../Container";
import SectionSubTitle from "../SectionSubTitle";
import SectionTitle from "../SectionTitle";

const Portfolio = () => {
  return (
    <Container>
      <div>
        {/* Title */}
        <div className="grid grid-cols-1 mb-7">
          <SectionSubTitle>Portfolio</SectionSubTitle>
          <SectionTitle>Gallery</SectionTitle>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <img
          className="animate__animated animate__fadeInUp"
          src="/src/assets/images/album/01.jpg"
          alt=""
        />
        <img
          className="animate__animated animate__fadeInUp animate__slow"
          src="/src/assets/images/album/02.jpg"
          alt=""
        />
        <img
          className="animate__animated animate__fadeInUp animate__slower"
          src="/src/assets/images/album/07.jpg"
          alt=""
        />
        <img
          className="animate__animated animate__fadeInUp"
          src="/src/assets/images/album/01.jpg"
          alt=""
        />
        <img
          className="animate__animated animate__fadeInUp animate__slow"
          src="/src/assets/images/album/02.jpg"
          alt=""
        />
        <img
          className="animate__animated animate__fadeInUp animate__slower"
          src="/src/assets/images/album/07.jpg"
          alt=""
        />
        {/* <div className="animate__animated animate__fadeInUp w-60 h-60 bg-slate-400"></div>
        <div className="animate__animated animate__fadeInUp animate__slow w-60 h-60 bg-slate-400"></div>
        <div className="animate__animated animate__fadeInUp animate__slower w-60 h-60 bg-slate-400"></div> */}
      </div>
    </Container>
  );
};

export default Portfolio;
