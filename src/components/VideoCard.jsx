import React from 'react'
import Card from 'react-bootstrap/Card';

function VideoCard() {
  return (
    <div>
      <Card style={{ width: '300px' }}>
        <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://c-cl.cdn.smule.com/smule-gg-uw1-s-6/arr/1b/31/854cbc23-4c6c-494a-8c6f-e33a4151c591_1024.jpg" />
        <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>Video Caption</h6>
            <button className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
        </Card.Title>
        </Card.Body>
        </Card>
    </div>
  )
}

export default VideoCard
