import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.a`
  ${tw`rounded-full py-2 px-7 text-base capitalize font-bold hover:bg-opacity-90`}

  box-shadow: 0 1.125em 1em -1em hsl(12, 88%, 69%);
`;

function Button({ title, url, bGround }) {
  return (
    <Wrapper
      href={url}
      className={
        bGround ? "bg-light-gray text-main-red" : "bg-main-red text-light-gray"
      }
    >
      {title}
    </Wrapper>
  );
}
export default Button;
