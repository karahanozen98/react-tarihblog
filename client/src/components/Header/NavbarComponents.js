import React from "react";
import { Link } from "react-router-dom";

export var NavbarComponents = [
  <li key="home">
    <Link to="/">Anasayfa</Link>
  </li>,
  <li key="categories">
    <Link to="/categories">Başlıklar</Link>
  </li>,
  <li key="about">
    <Link to="/about">Hakkımızda</Link>
  </li>,
  <li key="login">
    <Link to="/login">Giriş Yap</Link>
  </li>,
];
