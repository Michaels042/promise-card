import React from "react";
import whatsapp from '../images/whatsapp.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import download from '../images/download.svg';

const DownloadShare = ({ open, onClose }) => {
  if (!open) return null;
    
  // SHARE BUTTON
  const shareOnTwitter = () => {
    const link = "https://michaels042.github.io/Deo-Gracias-Blog/";
    const msg = encodeURIComponent("An awesome promise card");
    const title = encodeURIComponent(document.querySelector("title").textContent);
    console.log([link, msg, title]);
    const twitter = document.querySelector(".twitter");
    twitter.href = `https://twitter.com/share?url=${link}&text=${msg}&hastags=javascript,programming`;
};

  // const shareOnFacebook = () => {
  //     const facebook = document.querySelector(".facebook");
  //     twitter.href = `https://twitter.com/share?url=${link}&text=${msg}&hastags=javascript,programming`;
  // };
  // const shareOnWhatsapp = () => {
  //   const whatsapp = document.querySelector(".whatsapp");
  //   twitter.href = `https://twitter.com/share?url=${link}&text=${msg}&hastags=javascript,programming`;
  // };
  


  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalwrapper">
        <div>
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <p className="modal-text">Share with friends</p>
          <p className="modal-text-two">
            Download a screenshot and <br /> share across social media
          </p>
        </div>

        <div className="share-btn">
          <span className="twitter" onClick={download}>
            <img src={download} alt="save file icon" />
            <p>Save image</p>
          </span>
          <span className="facebook" onClick={onClose}>
            <img src={facebook} alt="facebook icon" />
            <p>Facebook</p>
          </span>
          <span className="whatsapp" onClick={onClose}>
            <img src={whatsapp} alt="whatsapp icon" />
            <p>Whatsapp</p>
          </span>
          <span className="twitter" onClick={shareOnTwitter}>
            <img src={twitter} alt="twitter icon" />
            <p>Twitter</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DownloadShare;
