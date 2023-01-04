import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/utilits";
const Blog = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setState(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout blog>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>Our Blogs</h3>
          </div>
          <div className="row">
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
          
                      <img src="static/img/blog-1.jpg" title="" alt="" />
                   
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                  
                        I Will Tell You The Truth About Design In The Next 60
                        Seconds.
                   
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
               
                      <img src="static/img/blog-2.jpg" title="" alt="" />
                  
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      
                        Ten Mind-Blowing Reasons Why Design Is Using This
                        Technique For Exposure.
                    
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                  
                      <img src="static/img/blog-3.jpg" title="" alt="" />
                
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                
                        Five Solid Evidences Attending Design Is Good For Your
                        Career Development.
                   
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                   
                      <img src="static/img/blog-6.jpg" title="" alt="" />
                   
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
              
                        10 Things You Most Likely {`Didn't`} Know About Design.
                  
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                  
                      <img src="static/img/blog-5.jpg" title="" alt="" />
              
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                  
                        Why swiming is also another important thing for man.
                    
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    
                      <img src="static/img/blog-4.jpg" title="" alt="" />
              
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      
                        What You Know About Design And What You {`Don't`} Know
                        About Design.
                 
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 blog-pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active == 1 ? "disabled" : ""}`}>
                  <Link
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left" />
                  </Link>
                </li>
                {state.map((state, i) => (
                  <li
                    key={i}
                    className={`page-item ${active === state ? "active" : ""}`}
                  >
                    <Link
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(state);
                      }}
                    >
                      {state} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    active == state.length ? "disabled" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="fas fa-chevron-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
