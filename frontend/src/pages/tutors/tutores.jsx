import React from "react";
import { Card1, Flexbox1 } from "../../components/tutores/card-tutor";
import "../../components/tutores/card-tutor.css";
import profile from "../../assets/profile.png";

export const Tutor = () => {
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

        <Card1
          src={profile}
          title="Tutor 3"
          disponible="T"
        />
        
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