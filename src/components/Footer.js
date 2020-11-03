import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white font-weight-bold text-center p-3">
      <p>
        ⓒ {year} Made with <i class="far fa-heart"></i> by{" "}
        <a href="https://karen-developer.com" target="_blank">
          <span className="text-info font-weight-bold text-decoration-none">Karen Chang</span>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
