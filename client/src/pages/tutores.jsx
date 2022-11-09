import React, { Component } from "react";
import { Card1, Flexbox1 } from "../components/cards";
import "../styles/cardtutors.css";
import profile from "/assets/profile.png";

export default function Tutor () {
  return (
    <>
      <Flexbox1>
        <Card1
          src={profile}
          title="Tutor 1"
          disponible="M"
        />

        <Card1
          src={profile}
          title="Tutor 2"
          disponible="C"
        />

        <Card1
          src={profile}
          title="Tutor 3"
          disponible="T"
        />
      </Flexbox1>

      <Flexbox1>
        <Card1
          src={profile}
          title="Tutor 4"
          disponible="M"
        />

        <Card1
          src={profile}
          title="Tutor 5"
          disponible="Q"
        />

        <Card1
          src={profile}
          title="Tutor 6"
          disponible="F"
        />
      </Flexbox1>
      </>
  );
};