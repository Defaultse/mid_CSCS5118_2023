import React, { useState } from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Feeds.css';

const users = [
  {
    username: "Ghetto666",
    name: "Niggar Ivory",
    bio: "I am nigga bro.",
    avatarUrl: "",
  },
  {
    username: "John Wick",
    name: "John Wick",
    bio: "Nothing Interesting",
    avatarUrl: "",
  },
];

function Feeds() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        username: "Shlepa",
        avatarUrl: "https://i.pinimg.com/originals/bd/33/43/bd3343e3e4e13c58e408c79f0e029b75.jpg",
      },
      content: "Amma cat",
      likes: 10,
      dislikes: 5,
      createdAt: new Date(),
    },
    {
      id: 2,
      user: {
        username: "John Wick",
        avatarUrl: "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
      },
      content: "This is matha fuckin John Wick!",
      likes: 20,
      dislikes: 10,
      createdAt: new Date(),
    },
  ]);
  const [newPost, setNewPost] = useState("");

  const handleNewPostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddNewPost = (e) => {
    const newPostObject = {
      id: Date.now(),
      user: {
        username: "My Post",
        avatarUrl: "",
      },
      content: newPost,
      likes: 0,
      dislikes: 0,
      createdAt: new Date(),
    };

    // Prepend the new post to the posts array
    setPosts([newPostObject, ...posts]);
    setNewPost("");
  };

  const postList = posts.map((post) => (
    <Post key={post.id} post={post}></Post>
  ))

  return (
    <div>
      <InputGroup className="mb-3" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <Form.Control
          placeholder="Make new post"
          aria-label="Make new post"
          aria-describedby="basic-addon2"
          value={newPost}
          onChange={handleNewPostChange}
        />
        <Button 
          variant="outline-secondary" 
          id="button-addon2"
          onClick={handleAddNewPost}
        >
          Button
        </Button>
      </InputGroup>

      <div className="centered-container">
        {postList}
      </div>
    </div>
  );
}

export default Feeds;
