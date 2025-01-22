import Container from "../Container";
import SectionSubTitle from "../SectionSubTitle";
import SectionTitle from "../SectionTitle";

const HeroAboutUs = () => {
  return (
    <Container>
      <div>
        {/* Title */}
        <div className="grid grid-cols-1 mb-7">
          <SectionSubTitle>About Us</SectionSubTitle>
          <SectionTitle>RAW EXPOSER</SectionTitle>
        </div>
        {/* Description */}
        <div className="flex">
          <span className="w-36 h-[1px] border border-[var(--primary-color)] mt-5"></span>
          <div className="w-[600px] ml-2">
            <h6 className="text-xl font-extralight leading-8 tracking-wide mb-5 ml-4">
              Photography bibendu tunc duntez varius. Vestibulum viverra the
              mana mattis gravida sapien
            </h6>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="relative team-img-div">
            <img src="/src/assets/images/team.jpg" alt="" />
            {/* <img src="/src/assets/images/group.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroAboutUs;
