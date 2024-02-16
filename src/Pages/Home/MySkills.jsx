import data from "../../data/index.json";
import { Link as ScrollLink } from "react-scroll";

export default function MySkills() {
  return (
    <section className="skills--section" id="AboutMe">
      <div className="portfolio--container">
        <ScrollLink to="AboutMe" smooth duration={500} className="scroll-bnt">
        <div class="arrow bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />{" "}
          </svg>
        </div>
        </ScrollLink>
        <h2 className="skills--section--heading">
          “Take the first <br /> steps to thriving”
        </h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="skills--section--containere--arrow">
       <ScrollLink to="video--section" smooth duration={500} className="scroll-bnt">
        <div class="arrow bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />{" "}
          </svg>
        </div>
        </ScrollLink>
      </div>

    </section>
  );
}
