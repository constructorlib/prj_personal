import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        {/* <!-- INTRODUCTION --> */}
        <div class="intro">
          <div class="salute">
            <div class="saluteTextContainer">
              <h1 class="saluteText">Hi</h1>
            </div>
            <div class="saluteImgContainer">
              <img src="./img/person.png" alt="" class="saluteImg" />
            </div>
          </div>
          <div class="nameContainer">
            <h2 class="name">I'm John</h2>
          </div>
          <div class="jobTitleContainer dark">
            <h2 class="jobTitle">a Web Developer</h2>
          </div>
          <div class="jobTitleContainer purple">
            <h2 class="jobTitle">and Designer</h2>
          </div>
        </div>
        {/* <!-- PROJECTS --> */}
        <div class="projects">
          <h1 class="projectsTitle">Here are some of my projects</h1>
          <div class="project">
            <div class="phone">
              <img src="./img/phone.png" alt="" />
              <div class="phoneScreen">
                <img src="./img/phoneApp.png" alt="" class="phoneApp" />
              </div>
            </div>
            <div class="projectDetail">
              <h1 class="projectTitle">Vortex</h1>
              <p class="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus repudiandae quia natus et iste earum ab fugiat eum
                ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium
                recusandae illo veritatis possimus! Accusamus repudiandae quia
                natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! laudantium recusandae illo veritatis possimus!
                recusandae illo veritatis.
              </p>
              <button class="projectButton">Learn More</button>
            </div>
          </div>
          <div class="project">
            <div class="laptop">
              <img src="./img/laptop.png" alt="" />
              <div class="laptopScreen">
                <img src="./img/laptopApp.png" alt="" class="laptopApp" />
              </div>
            </div>
            <div class="projectDetail">
              <h1 class="projectTitle">Vortex</h1>
              <p class="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus repudiandae quia natus et iste earum ab fugiat eum
                ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium
                recusandae illo veritatis possimus! Accusamus repudiandae quia
                natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! laudantium recusandae illo veritatis possimus!
                recusandae illo veritatis.
              </p>
              <button class="projectButton">Learn More</button>
            </div>
          </div>
          <div class="project">
            <div class="phone">
              <img src="./img/phone.png" alt="" />
              <div class="phoneScreen">
                <img src="./img/phoneApp.png" alt="" class="phoneApp" />
              </div>
            </div>
            <div class="projectDetail">
              <h1 class="projectTitle">Vortex</h1>
              <p class="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus repudiandae quia natus et iste earum ab fugiat eum
                ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium
                recusandae illo veritatis possimus! Accusamus repudiandae quia
                natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! laudantium recusandae illo veritatis possimus!
                recusandae illo veritatis.
              </p>
              <button class="projectButton">Learn More</button>
            </div>
          </div>
        </div>
        {/* <!-- GITHUB --> */}
        <div class="githubContainer">
          <h1 class="githubTitle">Want to see all projects?</h1>
          <div class="githubChart">
            <div class="dates">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Agu</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
            <div class="boxContainer"></div>
            <h1 class="githubTitle">ON GITHUB</h1>
          </div>
          <div class="githubSm">
            <a href="">
              <img src="./img/github.png" alt="" />
            </a>
            <h2>Find Me on Github</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
