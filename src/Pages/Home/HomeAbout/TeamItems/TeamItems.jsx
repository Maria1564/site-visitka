import React from "react";
import s from "./TeamItems.module.css"
import { Avatar } from "../../../../components/ui";


const TeamItems = ({ key, src, alt }) => {
  return (
    <div key={key}>
      <Avatar src={src} alt={alt} />
      <p className={s.name}>{alt}</p>
    </div>
  );
};

export default TeamItems;
