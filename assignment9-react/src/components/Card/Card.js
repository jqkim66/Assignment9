import React from "react";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


// import './Card.css'; // 用于样式，可选

function BootstrapCard({ title, content }) {
  return (
    <Card className="bg-primary text-white" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BootstrapCard;