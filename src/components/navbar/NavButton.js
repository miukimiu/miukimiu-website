import styled, { css } from 'styled-components';

const NavButton = styled.button`
  background: none;
  outline: none;
  border: none;
  flex: 0 0 auto;
  min-width: 50px;
  height: 50px;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${p =>
    p.active &&
    css`
      background: rgba(0, 0, 0, 0.07);
    `}
`;

export default NavButton;
