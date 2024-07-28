import React, { Fragment } from "react";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import Navlink from "../navlink/navlink";
export default function MainHeader() {
  
  return (
    <Fragment>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="food on plate" />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">
                Browse Meals
              </Navlink>
            </li>
            <li>
              <Navlink href="/community">
                Foodies Community
              </Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
