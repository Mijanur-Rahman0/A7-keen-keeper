import React from "react";
import FooterLogo from "../../assets/images/logo-xl.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white text-center p-10">
      <div className="container mx-auto">
        <div className="space-y-2">
          <img src={FooterLogo} alt="" className="mx-auto" />
          <p className="">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div>
            <h4 className="font-medium mb-2">Social Links</h4>
            <div className="flex gap-3 justify-center">
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              <a href="">
                <img src={Facebook} alt="" />
              </a>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr className="opacity-10 mt-3 mb-3" />
        <div className="flex justify-between">
            <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-6">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service </a>
            <a href="">Cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
