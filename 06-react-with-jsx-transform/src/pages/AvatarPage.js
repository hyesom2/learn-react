import React from "https://esm.sh/react";
// > Avatar Component 가져오기
import Avatar from "../components/Avatar.js";

function AvatarListPage() {
  return React.createElement(
    "ul",
    {
      className: "avatar-list",
    },
    React.createElement(
      "li",
      null,
      React.createElement(Avatar, {
        name: "야무",
        photoURL: "man-01.jpg",
        status: "online",
      })
    ),
    React.createElement(
      "li",
      null,
      React.createElement(Avatar, {
        name: "범쌤",
        photoURL: "man-02.jpg",
        status: "",
      })
    ),
    React.createElement(
      "li",
      null,
      React.createElement(Avatar, {
        name: "김씨",
        photoURL: "woman-01.jpg",
        status: "dont-disturb",
      })
    ),
    React.createElement(
      "li",
      null,
      React.createElement(Avatar, {
        name: "박씨",
        photoURL: "woman-02.jpg",
        status: "away",
      })
    )
  );
}

export default AvatarListPage;
