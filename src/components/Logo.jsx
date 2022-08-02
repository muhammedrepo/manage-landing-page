import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { image } from "../util";

const Wrapper = styled.div`
  ${tw``}
`;

function Logo({ logoWhite }) {
  return (
    <Wrapper>
      <a href="/" className="logo-link">
        {logoWhite ? (
          <img src={image.logoWhite} alt="Manage" />
        ) : (
          <img src={image.logo} alt="Manage" />
        )}
      </a>
    </Wrapper>
  );
}

export default Logo;
