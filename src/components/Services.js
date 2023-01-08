import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section">
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Web Design</h5>
                <p>
                  As a Web designer I am responsible for desigining different
                  websites that are displayed on the internet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                  As a web devekloper I am responsible for creating the
                  structure, layout, and functionality of a website.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO Marketing</h5>
                <p>
                  SEO, or search engine optimization, is the practice of
                  improving the ranking of a website on search engines like
                  Google. I achieve this through a variety of techniques, such
                  as optimizing the content and structure of a website, building
                  high-quality backlinks, and making the website responsive and
                  mobile-friendly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-bugz" />
              <div className="feature-content media-body">
                <h5>Unit Testing</h5>
                <p>
                  The goal of unit testing is to validate that each unit of the
                  application is working as intended and meets the specified
                  requirements. Unit tests are typically automated, and they are
                  run every time the code is changed to ensure that new changes
                  have not introduced any regressions or broken any existing
                  functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Debbuging</h5>
                <p>
                  I identify and remove errors from code as it allows me to
                  locate and fix problems in my code, which can help them to
                  improve the quality of my code and make it more reliable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>AWS And GCS</h5>
                <p>
                 I am suffiecient in both Amazon Web Sevices and Google Cloud Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
