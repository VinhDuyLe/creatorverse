import React from "react";
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IoInformationCircle } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function ContentCreatorCard({ contentCreator, handleCurrentCreator, handleEditCreator }) {
  const handleViewCreatorClick = () => {
    handleCurrentCreator(contentCreator);
  }

  const handleEditCreatorClick = () => {
    handleEditCreator(contentCreator);
  }

  const formatUrl = (url, baseUrl) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return baseUrl + url;
  }

  return (
    <>
      <div className="content-creator-card">
        <div className="content-creator-card-image">
          <img src={contentCreator.imageUrl} alt={contentCreator.name} />
        </div>
        <div className="content-creator-card-details">
          <h2>{contentCreator.name}</h2> {/* Updated to use h2 for consistency */}
          <div className="content-creator-card-header">
            <Link to={'/' + contentCreator.id} data-tooltip-id="info-tooltip" data-tooltip-content="Display creator's info">
              <IoInformationCircle size={30} onClick={handleViewCreatorClick} />
              <Tooltip id="info-tooltip" />
            </Link> &nbsp; 
            <Link to={'/edit/' + contentCreator.id} data-tooltip-id="edit-tooltip" data-tooltip-content="Edit the creator's info">
              <AiTwotoneEdit size={30} onClick={handleEditCreatorClick} className="pointer-link" />
              <Tooltip id="edit-tooltip" />
            </Link>
          </div>
          <p className="description">{contentCreator.description}</p>
          {contentCreator.youtube && (
            <a href={formatUrl(contentCreator.youtube, 'https://youtube.com/@')} target='__blank'>
              <AiFillYoutube size={30} />
            </a>
          )} &nbsp;
          {contentCreator.instagram && (
            <a href={formatUrl(contentCreator.instagram, 'https://www.instagram.com/')} target='__blank'>
              <AiFillInstagram size={30} />
            </a>
          )} &nbsp;
          {contentCreator.twitter && (
            <a href={formatUrl(contentCreator.twitter, 'https://twitter.com/')} target='__blank'>
              <AiOutlineTwitter size={30} />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ContentCreatorCard;
