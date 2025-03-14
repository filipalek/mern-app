import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby meggings food truck distillery, prism organic health goth
            next level retro bespoke synth adaptogen deep v activated charcoal
            fixie. Waistcoat marxism kitsch synth. Cliche keffiyeh shoreditch
            portland tofu gatekeep hot chicken flexitarian meditation solarpunk.
            Master cleanse single-origin coffee raw denim yr fam. Locavore
            neutra lumbersexual pug helvetica blackbird spyplane waistcoat
            actually fashion axe.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
