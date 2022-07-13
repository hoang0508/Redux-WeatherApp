import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const WeatherContentStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  a {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .active-link {
    color: #f45c43;
  }
`;

const dataLink = [
  {
    id: 1,
    to: "/",
    title: "Today",
  },
  {
    id: 2,
    to: "/week",
    title: "Week",
  },
  {
    id: 3,
    to: "/hours",
    title: "Hours",
  },
];

const WeatherMenu = ({ children, ...props }) => {
  return (
    <WeatherContentStyled>
      {dataLink &&
        dataLink.length > 0 &&
        dataLink.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={item.to}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
    </WeatherContentStyled>
  );
};

export default WeatherMenu;
