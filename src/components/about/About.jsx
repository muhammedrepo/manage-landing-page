import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button, Slider } from "../../components";
import { image } from "../../util";
import { aboutData } from "../../util/aboutData";

const Wrapper = styled.section`
  ${tw`relative overflow-hidden py-20`}

  .number h3 {
    ${tw` text-main-blue text-base font-bold leading-snug lg:text-[18px] xl:text-[20px]`}
  }

  @media (max-width: 50em) {
    .number {
      ${tw`bg-pale-red rounded-2xl items-center`}
    }
  }
`;
function About() {
  return (
    <Wrapper>
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-flow-col md:auto-cols-fr">
          <div className="flow text-center lg:mt-0  lg:text-left">
            <h2 className="text-3xl font-bold text-main-blue sm:text-4xl">
              What's different about Manage?
            </h2>
            <p className="text-base text-body-color">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="mt-10 lg:mt-0 flow">
            {aboutData.map((item) => {
              const { id, title, desc } = item;

              return (
                <div
                  key={id}
                  className="numbered-list flow"
                  style={{ "--flow-spacer": "1em" }}
                >
                  <div className="number flex gap-6">
                    <Button title={id} />
                    <h3 className="title">{title}</h3>
                  </div>
                  <div className="grid lg:justify-end">
                    <p data-width="wide">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Slider />
      <div className="hidden px-4 lg:block lg:w-1/12"></div>
      <div className="hidden lg:block lg:absolute lg:-bottom-16 lg:-left-56 -z-10">
        <img src={image.bgPattern} alt="" />
      </div>
    </Wrapper>
  );
}

export default About;
