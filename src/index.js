import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Forum from "./page/Forum";
import Main from "./page/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Style = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Style.Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Style.Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
