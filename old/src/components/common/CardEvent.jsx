import React from "react";
import styled from "styled-components";
import { FiCalendar, FiMapPin, FiYoutube, FiMic } from "react-icons/fi";

const Card = styled.div`
  @media screen and (max-width: ${props => props.theme.tablet}) {
    text-align: center;
    justify-content: center;
  }
  ul {
    padding: 0 0 1rem 0;
    margin: 0;

    @media screen and (max-width: ${props => props.theme.tablet}) {
      text-align: center;
      justify-content: center;
    }
  }

  li,
  a {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${props => props.theme.tablet}) {
      text-align: center;
      justify-content: center;
    }
  }

  svg {
    margin-right: 6px;
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }

  h4 {
    margin: 1rem 0 0.5rem;
  }
`;

const CardEvent = ({ title, date, location, youtube, talk }) => (
  <Card>
    <h4>{title}</h4>
    <ul>
      <li>
        <FiMic /> <b>{talk}</b>
      </li>
      <li>
        <FiCalendar /> {date}
      </li>
      <li>
        <FiMapPin /> {location}
      </li>
      {youtube && (
        <li>
          <a href={youtube} target="blank">
            {" "}
            <FiYoutube />
            Watch Video
          </a>
        </li>
      )}
    </ul>
  </Card>
);

export default CardEvent;
