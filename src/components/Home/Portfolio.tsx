// import "animate.css";
// import Container from "../Container";
// import SectionSubTitle from "../SectionSubTitle";
// import SectionTitle from "../SectionTitle";

// const Portfolio = () => {
//   return (
//     <Container>
//       <div>
//         {/* Title */}
//         <div className="grid grid-cols-1 mb-7">
//           <SectionSubTitle>Portfolio</SectionSubTitle>
//           <SectionTitle>Gallery</SectionTitle>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         <img
//           className="animate__animated animate__fadeInUp"
//           src="/src/assets/images/album/01.jpg"
//           alt=""
//         />
//         <img
//           className="animate__animated animate__fadeInUp animate__slow"
//           src="/src/assets/images/album/02.jpg"
//           alt=""
//         />
//         <img
//           className="animate__animated animate__fadeInUp animate__slower"
//           src="/src/assets/images/album/07.jpg"
//           alt=""
//         />
//         <img
//           className="animate__animated animate__fadeInUp"
//           src="/src/assets/images/album/01.jpg"
//           alt=""
//         />
//         <img
//           className="animate__animated animate__fadeInUp animate__slow"
//           src="/src/assets/images/album/02.jpg"
//           alt=""
//         />
//         <img
//           className="animate__animated animate__fadeInUp animate__slower"
//           src="/src/assets/images/album/07.jpg"
//           alt=""
//         />
//         {/* <div className="animate__animated animate__fadeInUp w-60 h-60 bg-slate-400"></div>
//         <div className="animate__animated animate__fadeInUp animate__slow w-60 h-60 bg-slate-400"></div>
//         <div className="animate__animated animate__fadeInUp animate__slower w-60 h-60 bg-slate-400"></div> */}
//       </div>
//     </Container>
//   );
// };

// export default Portfolio;

import { motion } from "framer-motion";
import Container from "../Container";
import SectionSubTitle from "../SectionSubTitle";
import SectionTitle from "../SectionTitle";

const Portfolio = () => {
  const images = [
    "/src/assets/images/album/01.jpg",
    "/src/assets/images/album/02.jpg",
    "/src/assets/images/album/07.jpg",
    "/src/assets/images/album/01.jpg",
    "/src/assets/images/album/02.jpg",
    "/src/assets/images/album/07.jpg",
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      {/* Title */}
      <div className="grid grid-cols-1 mb-7">
        <SectionSubTitle>Portfolio</SectionSubTitle>
        <SectionTitle>Gallery</SectionTitle>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Album ${index + 1}`}
            className="w-full rounded shadow-md"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: index * 0.4 }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
