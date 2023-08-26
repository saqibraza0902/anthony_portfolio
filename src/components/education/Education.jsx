import React from "react";

const Education = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">Apr 2010 - Mar 2014</span>
              <h6>University of Houston</h6>
              <p>Bachelor of Applied Science, Computer Science</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-8 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React/Next.js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Vue/Nuxt.js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Angular/AngularJS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>PHP/Laravel</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Python/Django</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>.NET</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>React Native</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Education;
