import React from 'react'
import TourCard from '../../shared/TourCard'
import tourdata from '../../assets/data/tours'
import {col} from 'reactstrap';

const FeaturedTourList = () => {
  return (<>
  {
    tourdata?.map(tour=>(
        <col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></col>
    ))
  }
  </>
  );
}

export default FeaturedTourList