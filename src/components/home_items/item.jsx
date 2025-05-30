import React from 'react';
import styled from 'styled-components';
import hotel from '../../assets/image/hotel.png';

const Item = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
        <div className="card-image" style={{ backgroundImage: `url(${hotel})` }}></div>
        <p className="card-title">Card title</p>
        <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p>
        <p className="footer">Written by <span className="by-name">John Doe</span> on <span className="date">25/05/23</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    width: 330px;
    min-height: 370px;
    border-radius: 20px;
    background: #e8e8e8;
    box-shadow: 5px 5px 6px #dadada,
                 -5px -5px 6px #f6f6f6;
    transition: 0.4s;
  }

  .card:hover {
    translate: 0 -10px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #2e54a7;
    margin: 15px 0 0 10px;
  }

  .card-image {
    min-height: 170px;
    background-color: #c9c9c9;
    border-radius: 15px;
    box-shadow: inset 8px 8px 10px #c3c3c3,
              inset -8px -8px 10px #cfcfcf;
              background-image: {hotel};
    background-size: cover;
  }

  .card-body {
    margin: 13px 0 0 10px;
    color: rgb(31, 31, 31);
    font-size: 15px;
  }

  .footer {
    float: right;
    margin: 28px 0 0 18px;
    font-size: 13px;
    color: #636363;
  }

  .by-name {
    font-weight: 700;
  }`;

export default Item;
