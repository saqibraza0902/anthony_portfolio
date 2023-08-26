import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tonymedinatx/" },
  { Social: <FaGithub />, link: "https://github.com/anthonymedinawork" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
