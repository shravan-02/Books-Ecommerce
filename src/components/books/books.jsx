import React,{useEffect, useState} from "react";
import crackCodingInterview from "../../assets/crack the coding interview.png";


const Books = ({data}) => {

console.log(data)
    
  return (
    <>
      <div class="book" >
        <figure class="book__img--wrapper">
          <img class="book__img" src={data.coverImg} alt="" />
        </figure>
        <div class="book__title">{data.name}</div>
        <div class="book__ratings">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="book__price"></div>
        <span class="book__price--normal">$59.99</span> $14.95
      </div>
    </>
  );
};

export default Books;
