import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="f-info text-center gap-2 bg-neutral-300 p-3 mt-[23rem] md:mt-[10rem]">
          <div className="f-info-socials text-xl">
            <a href="https://www.instagram.com" target="_blank" rel="">
              <i className="fa-brands fa-square-instagram m-1 cursor-pointer"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="n">
              <i className="fa-brands fa-facebook m-1 cursor-pointer"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="n">
              <i className="fa-brands fa-linkedin m-1 cursor-pointer"></i>
            </a>
          </div>
          <div className="private"> &copy; WanderLust Private Limited</div>
          <div className="info-links">
            <a href="#">PrivacyTerm</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
