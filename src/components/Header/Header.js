import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
          <Logo />
        <ButtonGroup>
          <VisuallyHidden>subscribe button</VisuallyHidden>
          <Button>subscribe</Button>
          <Text>Already a subscriber?</Text>
        </ButtonGroup>
      </DesktopHeader>
    </>
  );
};

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 16px;
    margin-bottom: 83px;
  }
`;

const MobileHeader = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-self: start;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  justify-self: end;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px;
  }
`;

const Text = styled.span`
  color: var(--color-gray-900);
  font-weight: var(--font-size-normal);
  font-size: calc(14 / 16 * 1rem);
  font-style: italic;
  text-decoration: underline;
  text-align: center;
`;

export default Header;
