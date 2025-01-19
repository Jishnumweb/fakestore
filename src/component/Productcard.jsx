import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function ProductCard({item}) {
  return (
    <>
         <Card className='cards' >
      <Card.Img variant="top" src={item.image}className='proImage' />
      <Card.Body className=''>
        <Card.Title className=''>{item.title}</Card.Title>
        <Card.Text>
        {item.description.slice(0,100)}
        </Card.Text>
        <div className="proContens">
        <Card.Text className='fw-bold m-0'>{item.price}</Card.Text>
        <Link to={`productcard/${item.id}`}><Button variant="primary" className='proBtn p-0'>View details</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
      
   </>
  )
}

export default ProductCard
