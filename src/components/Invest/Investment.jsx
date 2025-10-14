import React from "react";
import "../../styles/Investment.css";

const Investment = () => {
  return (
    <section className="investment">
      <div className="text">
        <div className="invest">
          <h2>Investment</h2>
          <p>
            Invested as professionals in government bonds from as early as CFAF
            1000 and earns up to 6.5% annual interest. Capital is guaranteed by
            the Central African Bank of States (BEAC)
          </p>

          <div className="download">
            <img
              src="public/images/Ejara-assets/invest/images/imgi_2_2560px-Download_on_the_App_Store_Badge_blk.svg.png"
              alt="Download app from App store"
            />

            <img
              src="public/images/Ejara-assets/invest/images/imgi_3_1200px-Google_Play_Store_badge_FR.svg.png"
              alt="Download app from Play store"
            />
          </div>
        </div>
      </div>

      {/* {container for image} */}
      <div className="background-color">
        <div className="seventy-six-k">
          <img
            src="public/images/Ejara-assets/invest/images/imgi_4_Rectangle.png"
            alt="76,500"
          />
        </div>
      </div>
    </section>
  );
};

export default Investment;
