import React from "react";

const Experiences = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 my-3">
          <div className="sm-title">
            <h5 className="font-alt">BrandExtract</h5>
          </div>
          <ul className="aducation-box theme-bg">
            <h6>Senior Web Developer</h6>
            <span className="dark-bg">Oct 2014 - Feb 2016</span>
            <li>
              <p>Worked to modernize a legacy monolith application</p>
            </li>
            <li>
              <p>Integrated external API connections and automated background tasks</p>
            </li>
            <li>
              <p>Built localization infrastructure to enable translation of full websites</p>
            </li>
            <li>
              <p>Developed & managed class syllabus, planned and created lectures, discussions, exams, final papers, etc.</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>

        <div className="col-lg-6 my-3">
          <div className="sm-title">
            <h5 className="font-alt">SailPoint</h5>
          </div>
          <ul className="aducation-box dark-bg">
            <h6>Full Stack Engineer</h6>
            <span className="theme-bg">Apr 2016 - May 2017</span>
            <li>
              <p>Maintained the front-end of a SaaS analytics web application using numerous javascript libraries but specifically React</p>
            </li>
            <li>
              <p>Ensure the app worked across all browsers and made updates where necessary to maintain cross-browser support</p>
            </li>
            <li>
              <p>Worked with product and product designers to build net new features</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 my-3">
          <div className="sm-title">
            <h5 className="font-alt">Yahara Software</h5>
          </div>
          <ul className="aducation-box theme-bg">
            <h6>Full-Stack Web Developer</h6>
            <span className="dark-bg">Jun 2017 - Sep 2019</span>
            <li>
              <p>Designed and implemented solutions to customer-reported issues</p>
            </li>
            <li>
              <p>Implement a website to mirror the features of android application and allow event administrators to manage attendees and conference details.</p>
            </li>
            <li>
              <p>Rewrited customer-facing software modules to improve performance and usability</p>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 my-3">
          <div className="sm-title">
            <h5 className="font-alt">Etchasoft Inc.</h5>
          </div>
          <ul className="aducation-box dark-bg">
            <h6>Senior Software Developer</h6>
            <span className="theme-bg">Nov 2019 - Jan 2023</span>
            <li>
              <p>Developed 67 key features and resolved 51 issues that lead to 118 favorable outcomes</p>
            </li>
            <li>
              <p>Designed and planed complete rewrite of existing software features</p>
            </li>
            <li>
              <p>Participated in code reviews and contribute to the development of coding standards</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experiences;
