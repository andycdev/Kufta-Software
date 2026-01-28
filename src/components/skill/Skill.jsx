// Skill.jsx
import React from "react";
import style from "./Skill.module.css";

const Skill = ({ icon, name, type }) => {
  return (
    <div className={style.skill}>
      <img className={style.icon} src={icon} alt={name} />

      <p className={style.skill_name}>{name}</p>
      <p className={style.skill_type}>{type}</p>
    </div>
  );
};

export default Skill;
