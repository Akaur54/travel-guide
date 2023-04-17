import React from 'react';
import '../Styles/home.css';
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero_content">
            <div className="hero_Subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=''/>
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum quod, odio, quasi repellendus deserunt eius eveniet perspiciatis excepturi ratione voluptate aliquid beatae modi pariatur? Numquam, eveniet! Repudiandae, hic iusto.</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt='' />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt='' controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt='' />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services_subtitle">What we serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience_content">
            <Subtitle subtitle = {'Experience'}/>
          </div>
        </Col>
        <Col lg='6'>
        </Col>
      </Row>
    </Container>
  </section>
  </>
};

export default Home;
