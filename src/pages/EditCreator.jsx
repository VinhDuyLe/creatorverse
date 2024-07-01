import React, { useState } from "react";
import { supabase } from "../client";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";
import 'react-confirm-alert/src/react-confirm-alert.css';

function EditCreator({ creatorToEdit }) {
    const [name, setName] = useState(creatorToEdit.name); 
    const [description, setDescription] = useState(creatorToEdit.description);
    const [imageUrl, setImageUrl] = useState(creatorToEdit.imageUrl); 
    const [youtube, setYoutube] = useState(creatorToEdit.youtube);
    const [instagram, setInstagram] = useState(creatorToEdit.instagram);
    const [twitter, setTwitter] = useState(creatorToEdit.twitter);

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedCreator = { name, description, imageUrl, youtube, instagram, twitter };
        
        try {
            const { data, error } = await supabase 
                .from('creators')
                .update(updatedCreator)
                .eq('id', creatorToEdit.id);

            if (!error) {
                alert('Successfully edited content creator!');
                window.location = '/';
            } else {
                alert('Error editing content creator');
            }
        } catch (error) {
            alert('Error editing content creator');
            console.error('Error:', error);
        }
    }

    const handleDelete = async () => {
        console.log('proceed to delete');
        const { error } = await supabase    
            .from('creators')
            .delete()
            .eq('id', creatorToEdit.id);

        if (error) {
            throw error;
        } else { 
            alert('Successfully deleted creator!');
            window.location = '/';
        }
    }

    const showConfirmDeleteDialog = () => {
        ConfirmDeleteDialog({ onDelete: handleDelete });
    }

    return (
        <div className="add-creator-container">
            <h2>Edit Creatorverse's Info</h2>
            <form onSubmit={handleEditSubmit} className="add-creator-form">
                {/* Form inputs */}
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} />
                <br />
                <label htmlFor="description">Description: </label>
                <p className="input-description">Provide a description of the creator. Who are they? What makes them interesting?</p>
                <textarea rows="5" cols="50" id="description" name="description" required value={description} onChange={e => setDescription(e.target.value)} />
                <br />
                <label htmlFor="imageUrl">Image:</label>
                <p className="input-description">Provide a link to an image of the creator. Be sure to include the http://</p>
                <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                <br />
                <h4>SOCIAL MEDIA LINKS</h4>
                <p className="input-description">Provide at least one of the creator's social media links.</p>
                <label htmlFor="youtubeHandle"><AiFillYoutube /> Youtube: </label>
                <p className="input-description">The creator's YouTube handle (without the @)</p>
                <input type="text" id="youtube" name="youtube" value={youtube} onChange={e => setYoutube(e.target.value)} />
                <br />
                <label htmlFor="instagramHandle"><AiFillInstagram /> Instagram: </label>
                <p className="input-description">The creator's Instagram handle (without the @)</p>
                <input type="text" id="instagram" name="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} />
                <br />
                <label htmlFor="twitterHandle"><AiOutlineTwitter /> Twitter: </label>
                <p className="input-description">The creator's Twitter handle (without the @)</p>
                <input type="text" id="twitter" name="twitter" value={twitter} onChange={e => setTwitter(e.target.value)} />
                <br />
                <div className="button-group">
                    <button className="submit-edit-button">Save</button> &nbsp;
                    <button id="delete-button" type="button" onClick={showConfirmDeleteDialog}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditCreator;
