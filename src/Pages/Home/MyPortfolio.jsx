import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Resources</h2>
        </div>
            </div>
           <div className="portfolio--section--container">
            <div className="portfolio--section--card">
            <div className="portfolio--section--img">
             <img src="./img/writing.jpg" alt="Placeholder" />
            </div>

            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">My Blog</h3>
                <p className="text-md">Collections of blogs designed to help you to thriv</p>
                <a href="https://mikestrongcoaching.wordpress.com/" target="_blank">Link</a>
              </div>
              <p className="text-sm portfolio--link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div> 
        </div>
            <div className="portfolio--section--card">
            <div className="portfolio--section--img">
             <img src="./img/life-cards.jpg" alt="Placeholder" />
            </div>

            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Life Cards</h3>
                <p className="text-md">Unlock the power of your attention with life cards</p>
                <a href="https://shopmikestrong.bigcartel.com//" target="_blank">Link</a>
              </div>
              <p className="text-sm portfolio--link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
        </div>

      </div>
</section>
  );
}
