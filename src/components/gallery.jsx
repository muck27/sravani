import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                    <a
                 //     href="img/portfolio/1.jpg"
                 //     title="Project Title"
                //        data-lightbox-gallery="gallery1"
                    >
                    
                      <div className="hover-text">
                        <h4>Ceramic & Pottery</h4>
                      </div>
                      <img
                        src="img/portfolio/1.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
               //       href="img/portfolio/2.jpg"
               //       title="Project Title"
                //      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Home Decor</h4>
                      </div>
                      <img
                        src="img/portfolio/2.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
               //       href="img/portfolio/03-large.jpg"
               //       title="Project Title"
               //       data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Clothing & Textile</h4>
                      </div>
                      <img
                        src="img/portfolio/3.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                //      href="img/portfolio/04-large.jpg"
                //      title="Project Title"
                //      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Antiques</h4>
                      </div>
                      <img
                        src="img/portfolio/4.jpg"
                        className="img-responsive"
                         alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                 //     href="img/portfolio/05-large.jpg"
                 //     title="Project Title"
                  //    data-lightbox-gallery="gallery1"
                    >
 
                      <img
                        src="img/portfolio/5.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                 //     href="img/portfolio/06-large.jpg"
                 //     title="Project Title"
                 //     data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Accessories</h4>
                      </div>
                      <img
                        src="img/portfolio/6.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
               //       href="img/portfolio/07-large.jpg"
               //       title="Project Title"
                //      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Stationery</h4>
                      </div>
                      <img
                        src="img/portfolio/7.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
              //        href="img/portfolio/08-large.jpg"
              //        title="Project Title"
               //       data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Candles & Fragrances</h4>
                      </div>
                      <img
                        src="img/portfolio/8.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                 //     href="img/portfolio/09-large.jpg"
                 //     title="Project Title"
                //      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Sustainable Products</h4>
                      </div>
                      <img
                        src="img/portfolio/9.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
