import React from 'react';
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import { supabase } from '../client';
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";

function ViewCreator({ contentCreator, handleEditCreator }) {
    const handleEditCreatorClick = () => {
        handleEditCreator(contentCreator);
    }

    const formatUrl = (url, baseUrl) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return baseUrl + url;
    }

    const displayName = (url, baseName) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return baseName;
        }
        return url;
    }

    const handleDelete = async () => {
        console.log('proceed to delete');
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', contentCreator.id);

        if (error) {
            console.error('Error deleting creator:', error);
            alert('Error deleting creator');
        } else {
            alert('Successfully deleted creator!');
            window.location = '/';
        }
    }

    const showConfirmDeleteDialog = () => {
        ConfirmDeleteDialog({ onDelete: handleDelete });
    }

    return (
        <div className='view-one'>
            <div className="view-one-container">
                <div className="view-one-content">
                    <div className='reator-image'>
                        <img src={contentCreator.imageUrl} alt={contentCreator.name} />
                    </div>
                    <div className='creator-details'>
                        <h2>{contentCreator.name}</h2>
                        <p>{contentCreator.description}</p>
                        <div className='social-btns'>
                            {contentCreator.youtube && (
                                <a className='btns' href={formatUrl(contentCreator.youtube, 'https://youtube.com/@')} target='_blank'>
                                    <AiFillYoutube size={30} /> {displayName(contentCreator.youtube, 'YouTube')}
                                </a>
                            )}
                            {contentCreator.instagram && (
                                <a className='btns' href={formatUrl(contentCreator.instagram, 'https://www.instagram.com/')} target='_blank'>
                                    <AiFillInstagram size={30} /> {displayName(contentCreator.instagram, 'Instagram')}
                                </a>
                            )}
                            {contentCreator.twitter && (
                                <a className='btns' href={formatUrl(contentCreator.twitter, 'https://twitter.com/')} target='_blank'>
                                    <AiOutlineTwitter size={30} /> {displayName(contentCreator.twitter, 'Twitter')}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="button-group">
                    <button className="submit-edit-button" onClick={handleEditCreatorClick}>Edit</button>
                    <button id="delete-button" type="button" onClick={showConfirmDeleteDialog}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ViewCreator;
