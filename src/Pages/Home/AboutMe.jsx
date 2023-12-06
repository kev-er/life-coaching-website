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
            live in the beautiful Surrey, England. Over the years, going through
            my own journey of personal transformation (A journey that never
            ends!) I have grown incredibly passionate about helping people
            become who they were designed to be.
          </p>
          <br />
          <p className="hero--section-description">
            Throughout my life I've journeyed through trauma, unhelpful
            mindsets, bad habits, facing my greatest fears, and journeying
            through broken relationships to get to a place of thriving abundant
            life. I want to help you in your journey to have the same story. To
            move from surviving to thriving. To become you, you were created to
            be.
          </p>
        </div>
        <button className="btn btn-primary hero--bnt about--bnt">
          Get In Touch
        </button>
      </div>
      <a className="scroll--down">
        <span className="scroll--icon">&#8681;</span>
      </a>
    </section>
  );
}
