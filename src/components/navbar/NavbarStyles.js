import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.header`
  ${tw`pt-12`}

  .nav-header {
    ${tw`flex items-center justify-between`}
    transition: all 0.3s linear;
  }
  .nav-toggle {
    ${tw`text-2xl bg-transparent border-transparent cursor-pointer`}
    transition: all 0.3s linear;
  }

  .links {
    ${tw`text-center`}
  }
  .links a {
    ${tw`text-main-blue text-base capitalize font-medium block py-2 px-4`}
    transition: all 0.3s linear;
  }
  .links a:hover {
    ${tw`text-main-red pl-6`}
  }

  .links-container {
    ${tw`h-0 overflow-hidden`}
    transition: all 0.3s linear;
  }

  .nav-button {
    ${tw`hidden`}
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      ${tw`flex items-center justify-between`}
    }
    .nav-header {
      ${tw`p-0`}
    }
    .nav-toggle {
      ${tw`hidden`}
    }
    .links-container {
      height: auto !important;
    }
    .links {
      ${tw`flex`}
    }
    .links a {
      ${tw`p-0 my-0 mx-2`}
    }
    .links a:hover {
      ${tw`p-0 bg-transparent`}
    }
    .nav-button {
      ${tw`flex`}
    }
  }
`;
