import React from "react";
import './Avatar.css'

const Avatar = ({src, alt}) => {

debugger
console.log(src, alt)
  return (
    <img
      src={src}
      alt={alt}
      className="avatar"
    />
  );
};

export default Avatar;
