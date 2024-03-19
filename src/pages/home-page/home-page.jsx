import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `request-builder/1`;
    navigate(path);
  };

  return (
    <div>
      <p>главная страница</p>
      <button type="button" onClick={routeChange}>
        перейти в конструктор
      </button>
    </div>
  );
}

export default HomePage;
