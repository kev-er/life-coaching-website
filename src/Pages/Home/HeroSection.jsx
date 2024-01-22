import { ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section montserrat">
      <div className="hero--section--img">
        <img
          id="hero--img--main"
          className="hero---picture"
          src="./img/cool_guy.jpg"
          alt="Hero Section"
        />
      </div>
      <div className="hero--section--content">
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Become the person</span>{" "}
          you were made to be
        </h1>
        <p className="hero--section-description hero--description">
          Emotionally, spiritually, physically healthy
        </p>
      </div>
    </section>
  );
}
