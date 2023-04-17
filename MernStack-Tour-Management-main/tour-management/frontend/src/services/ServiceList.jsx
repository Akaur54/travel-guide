import React from 'react';
import ServiceCard from './ServiceCard';
import {col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "calculate weather",
        desc: "Lorem ipsum dolor sit amet, consectetcur aadipisicing elit.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Weather",
        desc: "Lorem ipsum dolor sit amet, consectetcur aadipisicing elit.",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Lorem ipsum dolor sit amet, consectetcur aadipisicing elit.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item, index)=> <col lg='3' kety={index}><ServiceCard item={item}/>
    </col>)
  }
  </>
}

export default ServiceList