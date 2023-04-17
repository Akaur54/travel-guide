import React,{useRef} from 'react';
import './Search-Bar.css'
import {Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {


    const locationRef = useRef('')
    const distanceRef = useRef(0)

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
    }

  return <Col lg='12'>
    <div className="Search_Bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form_group form-group-fast'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='Where are you going?' ref = {locationRef} />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form_group form-group-fast'>
                <span><i class='ri-map-pin-time-line'></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder='Distance K/m' ref = {distanceRef}/>
                </div>
            </FormGroup>
            <span className="Search_icon" type='submit' onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar