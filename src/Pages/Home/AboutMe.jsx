import { Link as ScrollLink } from "react-scroll";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img className="aboutMe--img" src="./img/about_me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content content--box--rounded">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hi, I’m Mike. I am a Pastor and a Coach, and myself and my wife Abi
            live in the beautiful Surrey, England. Through my experience working
            with countless individuals in pastoring, coaching, mentoring and
            personal training, and going through my own journey of personal
            transformation, I have grown incredibly passionate about helping
            people become who they were designed to be. Physically, emotionally
            & spiritually healthy.
          </p>
          <br />
          <p className="hero--section-description">
            I want to help you in your journey. To move from surviving to
            thriving. To become you, you were created to be.
          </p>
        </div>
      </div>
      <ScrollLink to="testimonial" smooth duration={500} className="scroll-bnt">
        <div class="arrow bounce"></div>
      </ScrollLink>
    </section>
  );
}
