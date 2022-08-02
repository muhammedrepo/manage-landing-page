import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.section`
  ${tw`overflow-hidden pt-20`}

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */

    display: flex;

    justify-content: center;

    align-items: center;
  }

  .swiper-slide img {
    display: block;
    height: 100%;
    object-fit: cover;
  }
`;
