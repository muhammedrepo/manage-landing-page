import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Button, Logo } from "../../components";
import { footerLinks, socialLink } from "../../util/links";

const Wrapper = styled.footer`
  ${tw`bg-dark-blue py-12`}

  .social-icons {
    ${tw`flex justify-center p-2 font-medium items-center h-10 w-10 rounded-full hover:bg-main-red hover:text-light-gray`}
  }

  .footer-link {
    ${tw`mb-2 inline-block text-base leading-loose text-grayish-blue hover:text-main-red`}
  }

  @media (max-width: 667px) {
    .container {
      ${tw`grid place-items-center`}
    }

    .columns-2 {
      ${tw`mt-10`}
    }
    .logo-social-wrap {
      ${tw`flex flex-col-reverse items-center justify-center`}
    }

    .footer-content {
      ${tw`flex flex-col-reverse`}
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="container mx-auto">
        <div className="footer-content flex flex-wrap">
          <div className="w-full sm:w-2/3 md:w-4/12">
            <div className="logo-social-wrap mb-10 w-full">
              <div className="md:hidden mt-8">
                <p className="inline-block text-sm leading-loose text-grayish-blue ">
                  Copyright 2022. All Rights Reserved
                </p>
              </div>
              <Logo logoWhite />
              <div className="flex flex-wrap items-center text-light-gray mb-4 md:mb-0 md:mt-24">
                {socialLink.map((link) => {
                  const { id, url, icon } = link;

                  return (
                    <a href={url} className="social-icons" key={id}>
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-4/12">
            <div className="mb-10 w-full">
              <ul className="columns-2">
                {footerLinks.map((link) => {
                  const { id, url, text } = link;

                  return (
                    <li key={id}>
                      <a href={url} className="footer-link">
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="form-wrap w-full sm:w-1/2 md:w-4/12 ">
            <form>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <input
                    type="email"
                    placeholder="Updates in your inbox..."
                    className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <Button title="go" />
              </div>
            </form>

            <div className="hidden md:flex justify-end mt-24">
              <p className="inline-block text-xs leading-loose text-grayish-blue ">
                Copyright 2022. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
