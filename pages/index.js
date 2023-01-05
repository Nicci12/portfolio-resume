import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {

  function handleClick(event) {
    event.preventDefault()
    // You can add code here to track the download or perform other actions
    const url = '/static/img/resume.pdf'
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'resume.pdf')
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Nicola</h1>
                  <p className="lead">
                    I Am Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                 I am a fullstack developer with a passion for building modern and responsive web applications. With experience in a variety of languages and frameworks, including JavaScript, React, and Node.js, I have the skills and expertise to bring any project from idea to implementation. When I am not coding, you can find them learning new technologies, participating in hackathons, or contributing to open-source projects.I am always looking for new challenges and opportunities to grow as a developer. 
                  </p>
                  <div className="btn-bar">
                  <button
      onClick={handleClick}
      className="px-btn px-btn-theme"
    >
                      Donwload CV
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-ban.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
