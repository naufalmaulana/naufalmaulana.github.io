import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/4.png" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Naufal Maulana <span>
            <h5>(Front End Web Developer)</h5>  
          </span></h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I am a front end web developer based in Banten, Indonesia. I am fueled by passion for learning
                new things in life and is eager to continue not only learning but also improving myself to get better.
                I am currently working freelance and is always interested in a challenge!.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>11.06.2000
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>21
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Cilegon, Banten, Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="naufallmaulana@yahoo.com">naufallmaulana@yahoo.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="https://api.whatsapp.com/send?phone=6281288487450" target="_blank">+62 812 8848 7450</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Bina Nusantara University
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li> */}
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
          
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">HTML & CSS</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="88">
                      <span>
                        <span className="label">JavaScript</span>
                        <span className="number">88%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 88 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Bootstrap</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3 className="text-white">Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">SCSS/SASS</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">  
                      <span>
                        <span className="label">Laravel</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">React.Js</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Other Interest</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>Sports</h3>
                      <span>Basketball</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Music</h3>
                      <span>I play piano & guitar</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Fashion</h3>
                      <span>All genres</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Video Games</h3>
                      <span>Mainly pc games</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Cooking</h3>
                      <span>My main speciality is steak</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Movies</h3>
                      <span>Kingsman is my favorite</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              {/* <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div> */}
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
