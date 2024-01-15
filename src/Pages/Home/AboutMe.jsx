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
        <div class="arrow bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            class="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />{" "}
          </svg>
        </div>
      </ScrollLink>
    </section>
  );
}
