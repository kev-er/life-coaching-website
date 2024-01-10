import { Link as ScrollLink } from "react-scroll";

export default function VideoSection() {
  return (
    <section id="Video--about" className="video--section">
      <div>
        <iframe
          className="video--container"
          width="740"
          height="515"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <ScrollLink to="Contact" smooth duration={500} className="scroll-bnt">
        <button className="btn btn-primary hero--bnt about--bnt">
          Get In Touch
        </button>
      </ScrollLink>
    </section>
  );
}
