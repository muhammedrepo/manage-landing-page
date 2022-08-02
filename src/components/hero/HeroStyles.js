import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.section`
  ${tw`relative pt-20`}
  .hero-wrap {
    ${tw`flex flex-col-reverse`}
  }

  .hero-content {
    ${tw`flex flex-col items-center justify-center text-center`}
  }
  h1 {
    ${tw` text-main-blue text-3xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]`}
  }

  @media (min-width: 800px) {
    &:before {
      background-position: 64rem -15rem;
    }

    .hero-wrap {
      ${tw`grid gap-4 grid-flow-col auto-cols-fr`}
    }
    .hero-content {
      ${tw`items-start justify-start text-left lg:max-w-md`}
    }
  }
`;
