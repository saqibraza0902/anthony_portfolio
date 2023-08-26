import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["All", "Full-stack", "Front-end", "Back-end", "Mobile"];
const AllPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Headspace",
    subTitle: "React/MERN, React Native, GraphQL",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://www.headspace.com/",
  },
  {
    img: "img/portfolio/8.jpg",
    title: "Quizizz",
    subTitle: "Vue/Nuxt.js, Tailwind CSS, RESTful API",
    alterText: "Elearning App",
    portfolioLink:
      "https://quizizz.com/",
  },
  {
    img: "img/portfolio/9.jpg",
    title: "Seebiz",
    subTitle: "Angular, Node.js, Bootstrap, TypeScript",
    alterText: "E-commerce store",
    portfolioLink:
      "https://www.seebiz.com/",
  },
  {
    img: "img/portfolio/4.jpg",
    title: "Servmask",
    subTitle: "Laravel, Vue, Tailwind CSS, MySQL, Twilio",
    alterText: "Email Marketing Platform",
    portfolioLink:
      "https://www.servmask.com/",
  },
  {
    img: "img/portfolio/7.jpg",
    title: "Joinhoney",
    subTitle: "Python/Django, PostgreSQL, Authorize.net",
    alterText: "Automatic Coupons, Promo Code, and Deals platform",
    portfolioLink:
      "https://www.joinhoney.com/",
  },
  {
    img: "img/portfolio/6.jpg",
    title: "Brainly",
    subTitle: "React/React Native, C#, JavaScript, Firebase",
    alterText: "Recording and Interactive platform",
    portfolioLink:
      "https://www.bullhorn.fm/",
  },
];
const FullstackPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Headspace",
    subTitle: "React/MERN, React Native, GraphQL",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://www.headspace.com/",
  },
  {
    img: "img/portfolio/4.jpg",
    title: "Servmask",
    subTitle: "Laravel, Vue, Tailwind CSS, MySQL, Twilio",
    alterText: "Email Marketing Platform",
    portfolioLink:
      "https://www.servmask.com/",
  },
  {
    img: "img/portfolio/6.jpg",
    title: "Brainly",
    subTitle: "React/React Native, C#, JavaScript, Firebase",
    alterText: "Recording and Interactive platform",
    portfolioLink:
      "https://www.bullhorn.fm/",
  },
];

const FrontendPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Headspace",
    subTitle: "React/MERN, React Native, GraphQL",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://www.headspace.com/",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "Quizizz",
    subTitle: "Vue/Nuxt.js, Tailwind CSS, RESTful API",
    alterText: "Elearning App",
    portfolioLink:
      "https://quizizz.com/",
  },
];

const BackendPortfolioContent = [
  {
    img: "img/portfolio/7.jpg",
    title: "Joinhoney",
    subTitle: "Python/Django, PostgreSQL, Authorize.net",
    alterText: "Automatic Coupons, Promo Code, and Deals platform",
    portfolioLink:
      "https://www.joinhoney.com/",
  },
];

const MobilePortfolioContent = [
  {
    img: "img/portfolio/6.jpg",
    title: "Brainly",
    subTitle: "React/React Native, C#, JavaScript, Firebase",
    alterText: "Recording and Interactive platform",
    portfolioLink:
      "https://www.bullhorn.fm/",
  },
];

const Portfolio = () => {
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex justify-content-center">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <Gallery>
            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {AllPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={1440}
                          height={1963}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>

                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-link */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {FullstackPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={1440}
                          height={1963}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        {/* End gallery link */}
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {FrontendPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={1440}
                          height={1963}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        {/* End gallery link */}
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {BackendPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={1440}
                          height={1963}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* grid item  */}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {MobilePortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={1440}
                          height={1963}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* grid item  */}
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </Gallery>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
