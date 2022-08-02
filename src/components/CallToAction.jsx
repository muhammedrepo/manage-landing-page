import React from "react";
import { Button } from "../components";
import styled from "styled-components";
import tw from "twin.macro";
import { image } from "../util";

const Wrapper = styled.section`
  ${tw`relative overflow-hidden isolate py-16`}

  .cta-content {
    ${tw`lg:flex flex-wrap items-center gap-4 lg:grid-flow-col lg:auto-cols-fr lg:justify-between`}
  }

  .cta-content h2 {
    ${tw`text-4xl lg:text-5xl font-medium text-center lg:text-left`}
  }

  &:before {
    position: absolute;
    z-index: -1;
    content: "";
    inset: 0;
    background-image: url(${image.bgPattern}), url(${image.bgPattern});
    background-position: 6rem -2rem, 80rem -42rem;
    background-repeat: no-repeat;
    opacity: 0.1;
  }
`;

function CallToAction() {
  return (
    <Wrapper className="bg-main-red">
      <div className="container mx-auto">
        <div className="cta-content">
          <div className="text-light-gray lg:max-w-xl">
            <h2>Simplify how your team works today.</h2>
          </div>

          <div className="text-center mt-8 lg:mt-0 cursor-pointer">
            <Button title="get started" bGround />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CallToAction;
