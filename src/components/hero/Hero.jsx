import React from "react";
import { Button } from "../../components";
import { image } from "../../util";
import { Wrapper } from "./HeroStyles";

function Hero() {
  return (
    <Wrapper>
      <div className="container mx-auto">
        <div className="hero-wrap">
          <div className="hero-content flow">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <div>
              <Button title="get started" url="/" />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img src={image.heroImage} alt="hero" />
          </div>
        </div>
      </div>

      <div className="hidden absolute lg:block lg:-top-56 lg:right-24 -z-10">
        <img src={image.bgPattern} alt="" />
      </div>
    </Wrapper>
  );
}

export default Hero;
