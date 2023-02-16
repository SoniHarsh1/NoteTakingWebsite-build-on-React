import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const name = "Harsh Soni";
  return (
    <footer>
      <p>Copyright ⓒ {year} | {name}</p>
    </footer>
  );
}

export default Footer;
