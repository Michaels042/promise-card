import React from "react";
// import whatsapp from '../images/whatsapp.svg';
// import facebook from '../images/facebook.svg';
// import twitter from '../images/twitter.svg';
import download from '../images/download.svg';
import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";

const PNG_FILE_URL = "https://mywishlists.netlify.app/file_png.png";
const DownloadShare = ({ open, onClose }) => {
  if (!open) return null;
  
  const downloadFileAtURL=(url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });

  };
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
        <span onClick={()=>{downloadFileAtURL(PNG_FILE_URL)}}>
            <img src={download} alt="save file icon" />
            <p>Save image</p>
          </span>
            <span>
              <FacebookShareButton
                url={'https://mywishlists.netlify.app/'}
                quote={'An awesome promise card'}
                hashtag={"#mywishlist"}>
                  <FacebookIcon size={32} round />
              </FacebookShareButton>
              <p>Facebook</p>
            </span>
            <span>
              <WhatsappShareButton
                url={'https://mywishlists.netlify.app/'}
                quote={'An awesome promise card'}
                hashtag={"#mywishlist"}>
                  <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <p>Whatsapp</p>
            </span>
            <span>
              <TwitterShareButton
                url={'https://mywishlists.netlify.app/'}
                quote={'An awesome promise card'}
                hashtag={"#mywishlist"}>
                  <TwitterIcon size={32} round />
              </TwitterShareButton>
              <p>Twitter</p>
            </span>

        </div>
      </div>
    </div>
  );
};

export default DownloadShare;
