import React, { useState } from "react";
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

function AddCreator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCreator = { 
      name, 
      description, 
      imageUrl, 
      youtube, 
      instagram, 
      twitter 
    };

    try {
      const { data, error } = await supabase
        .from('creators')
        .insert([newCreator]);

      if (error) {
        console.error('Supabase error:', error);
        alert('Error adding creator');
      } else {
        alert('Successfully added creator!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding creator');
    }
  }

  return (
    <div className="add-creator-container">
      <h2>Add a New Creatorverse</h2>
      <form onSubmit={handleSubmit} className="add-creator-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} /><br />

        <label htmlFor="description">Description:</label>
        <p className="input-description">Provide a description of the creator. Who are they? What makes them interesting?</p>
        <textarea id="description" rows="5" required value={description} onChange={e => setDescription(e.target.value)} /><br />

        <label htmlFor="imageUrl">Image:</label>
        <p className="input-description">Provide a link to an image of the creator. Be sure to include the http://</p>
        <input type="text" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} /><br />

        <h4>SOCIAL MEDIA LINKS</h4>
        <p className="input-description">Provide at least one of the creator's social media links.</p>

        <label htmlFor="youtube"><AiFillYoutube size={30} /> YouTube:</label>
        <p className="input-description">The creator's YouTube handle (without the @)</p>
        <input type="text" id="youtube" value={youtube} onChange={e => setYoutube(e.target.value)} /><br />

        <label htmlFor="instagram"><AiFillInstagram size={30} /> Instagram:</label>
        <p className="input-description">The creator's Instagram handle (without the @)</p>
        <input type="text" id="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} /><br />

        <label htmlFor="twitter"><AiOutlineTwitter size={30} /> Twitter:</label>
        <p className="input-description">The creator's Twitter handle (without the @)</p>
        <input type="text" id="twitter" value={twitter} onChange={e => setTwitter(e.target.value)} /><br />

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddCreator;
