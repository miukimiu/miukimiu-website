import styled from "styled-components";

const SubLine = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey.light};
  ${props => props.sectionTitle && "margin-top: -3rem"};
  ${props => props.sectionTitle && "margin-bottom: 4rem"};
  ${props => props.sectionTitle && "text-align: center"};
`;

export default SubLine;
