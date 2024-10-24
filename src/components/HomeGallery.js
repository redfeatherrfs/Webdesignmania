import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import '../home-gallery.css';

const HomeGallery = () => {
  const [key, setKey] = useState('portfolio');

  const galleryImages = {
    portfolio: [
     'https://picsum.photos/id/101/300/200',
  'https://picsum.photos/id/102/300/200',
  'https://picsum.photos/id/103/300/200',
  'https://picsum.photos/id/104/300/200',
  'https://picsum.photos/id/105/300/200',
  'https://picsum.photos/id/106/300/200',
  'https://picsum.photos/id/107/300/200',
  'https://picsum.photos/id/108/300/200',
  'https://picsum.photos/id/109/300/200',
  'https://picsum.photos/id/110/300/200',
  'https://picsum.photos/id/111/300/200',
  'https://picsum.photos/id/112/300/200',
  'https://picsum.photos/id/113/300/200',
  'https://picsum.photos/id/114/300/200',
  'https://picsum.photos/id/115/300/200',
  'https://picsum.photos/id/116/300/200',
  'https://picsum.photos/id/117/300/200',
  'https://picsum.photos/id/118/300/200',
  'https://picsum.photos/id/119/300/200',
  'https://picsum.photos/id/120/300/200'
    ],
    ecommerce: [
      'https://picsum.photos/id/247/300/200',
      'https://picsum.photos/id/248/300/200',
      'https://picsum.photos/id/249/300/200',
      'https://picsum.photos/id/250/300/200',
      'https://picsum.photos/id/251/300/200',
      'https://picsum.photos/id/252/300/200',
      'https://picsum.photos/id/253/300/200',
      'https://picsum.photos/id/254/300/200',
      'https://picsum.photos/id/255/300/200',
      'https://picsum.photos/id/256/300/200'
    ],
    logo: [
      'https://picsum.photos/id/257/300/200',
      'https://picsum.photos/id/258/300/200',
      'https://picsum.photos/id/259/300/200',
      'https://picsum.photos/id/260/300/200',
      'https://picsum.photos/id/261/300/200',
      'https://picsum.photos/id/262/300/200',
      'https://picsum.photos/id/263/300/200',
      'https://picsum.photos/id/264/300/200',
      'https://picsum.photos/id/265/300/200',
      'https://picsum.photos/id/266/300/200'
    ],
    stationary: [
      'https://picsum.photos/id/267/300/200',
      'https://picsum.photos/id/268/300/200',
      'https://picsum.photos/id/269/300/200',
      'https://picsum.photos/id/270/300/200',
      'https://picsum.photos/id/271/300/200',
      'https://picsum.photos/id/272/300/200',
      'https://picsum.photos/id/273/300/200',
      'https://picsum.photos/id/274/300/200',
      'https://picsum.photos/id/275/300/200',
      'https://picsum.photos/id/276/300/200'
    ]
  };
  
 

  return (
    <Container className="home-gallery text-center">
        <h2 className="about-heading">
              We are Professiona
              Digital Team
            </h2>
      <Tabs
        id="gallery-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="portfolio" title="Portfolio Website">
          <GalleryGrid images={galleryImages.portfolio} />
        </Tab>
        <Tab eventKey="ecommerce" title="E-commerce Website">
          <GalleryGrid images={galleryImages.ecommerce} />
        </Tab>
        <Tab eventKey="logo" title="Logo Design">
          <GalleryGrid images={galleryImages.logo} />
        </Tab>
        <Tab eventKey="stationary" title="Stationary Design">
          <GalleryGrid images={galleryImages.stationary} />
        </Tab>
      </Tabs>
    </Container>
  );
};

const GalleryGrid = ({ images }) => {
  return (
    <Row>
        
      {images.map((image, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} className="gallery-item">
          <img src={image} alt="Gallery" className="img-fluid" />
        </Col>
      ))}
    </Row>
  );
};

export default HomeGallery;
