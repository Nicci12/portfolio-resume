import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  My Name is Nicola Dimant and {`I'm`} a FullStack Developer
                  with over 3 years of experience.{" "}
                </h3>
                <p>
                  I was born in South Africa, and moved to Israel to further
                  persue my passion in the Hi-tech industry and software
                  development.
                  {`I'm`} a Fullstack developer with over 3 years of experience.
                </p>
                <div className="btn-bar">
                  <Link className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </Link>
                  <Link
                    className="px-btn px-btn-theme github"
                    href="https://github.com/Nicci12">
                    <span>GitHub </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2016-2019</span>
                <h6>BA majoring in Psychology and Sociology</h6>
                <p>The University of Witwaaterstrand</p>
              </li>
              <li>
                <span>2019-2021</span>
                <h6>Self Taught Full Stack Developer & Freelancer</h6>
                <p>Udemy & FreeCodeCamp</p>
              </li>
              <li>
                <span>2022</span>
                <h6>Full Stack Developer Bootcamp</h6>
                <p>Israel Tech Challenge</p>
              </li>
              <li>
                <span>2022-2023</span>
                <h6>Fullstack Developer Internship</h6>
                <p>Money Club for Makers</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <div className="skill-lt">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "100%" }}>
                    <span data-toggle="tooltip" title="100%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>JavaScript/React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "100%" }}>
                    <span data-toggle="tooltip" title="100%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Node.js & Express</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "100%" }}>
                    <span data-toggle="tooltip" title="100%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>MongoDB & SQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="792%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>AWS & GCS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>FullStack Developer</h6>
                  <label>Udemy| Remote | Jan 2019 - May 2022</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Learning fullstack development on Udemy has been a fantastic
                    experience for me. With a wide variety of courses and
                    instructors to choose from, I was able to find a learning
                    path that suited my needs and goals. The online format
                    allowed me to learn at my own pace and fit my studies into
                    my busy schedule. The interactive exercises and projects in
                    the courses helped me apply what I learned and build a
                    portfolio of work to showcase my skills. Additionally, the
                    support and community in the Udemy forums were invaluable
                    for answering questions and getting feedback on my progress.
                    Overall, learning fullstack development on Udemy has had a
                    positive impact on my career by giving me the skills and
                    confidence to take on new challenges and pursue new
                    opportunities as a fullstack developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>FullStack Developer</h6>
                  <label>
                    Israel Tech Challange | Tel-Aviv | May 2022 - September 2022
                  </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Becoming a fullstack developer by participating in Israel
                    Tech Challenge bootcamp was a transformative experience for
                    me. The immersive and intensive nature of the bootcamp
                    allowed me to focus solely on my studies and make rapid
                    progress. The instructors were highly skilled and
                    supportive, and the curriculum was designed to cover a wide
                    range of technologies and techniques. In addition to the
                    technical skills I acquired, the bootcamp also helped me
                    improve my problem-solving, communication, and collaboration
                    skills through group projects and team challenges. Since
                    completing the bootcamp, I have seen significant growth in
                    my career as a fullstack developer. I have been able to take
                    on more complex projects, work with a wider range of
                    technologies, and contribute to the development of
                    successful products. I am grateful for the opportunity to
                    participate in the coding bootcamp and for the positive
                    impact it has had on my career as a fullstack developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>FullStack Developer Internship</h6>
                  <label>
                    Money Club for Makers | Hybrid | October 2022- Present
                  </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    During this inetrnship I worked side by side with a
                    FullStack Developer where we created a mental health blog
                    that focused on alternative types of treament for mental
                    health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
