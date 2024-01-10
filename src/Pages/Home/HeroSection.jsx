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
          Coaching. Writing. Resourcing
        </p>
        <button href="#Video--about" className="btn btn-primary hero--bnt">
          ABOUT COACHING
        </button>
      </div>
      <ScrollLink to="Contact" smooth duration={500} className="">
        <button href="#Video--about" className="btn btn-primary hero--bnt">
          ABOUT COACHING
        </button>
      </ScrollLink>
    </section>
  );
}
