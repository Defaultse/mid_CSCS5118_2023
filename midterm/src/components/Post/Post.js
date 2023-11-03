import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
      <Card style={{ width: '20rem', marginBottom: '20px'  }}>
        <Card.Header>{post.user.username}</Card.Header>
        <Card.Img variant="top" src={post.user.avatarUrl} />
        <Card.Body>
          <Card.Title>{post.user.name}</Card.Title>
          <Card.Text>
            {post.content}
          </Card.Text>
          <div className="row">
          <div className="col">
            <Button variant="primary" onClick={handleLike}>Like ({likes})</Button>
          </div>
          <div className="col">
            <Button variant="danger" onClick={handleDislike}>Dislike ({dislikes})</Button>
          </div>
        </div>   
        </Card.Body>
      </Card>
  );
}

export default Post;
