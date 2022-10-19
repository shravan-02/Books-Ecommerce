import React, { useEffect, useState } from "react";

import { fetchData } from "../../database";

import Navbar from "../navbar/navbar";
import crackCodingInterview from "../../assets/crack the coding interview.png";
import atomicHabits from "../../assets/atomic habits.jpg";
import cantHurtMe from "../../assets/david goggins.jpeg";
import deepWork from "../../assets/deep work.jpeg";
import Header from "../header/header";
import Footer from "../footer/footer";
import Books from "../books/books";
const Home = () => {
      const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://react-course-e35b0-default-rtdb.firebaseio.com/meetups', {
    //         method: 'GET'
    //     })
    //     .then((response) =>{
    //         return response.json();
    //     })
    //     .then((data) => {
    //         const bookIcons = []
    //         for (const key in data){
    //             const bookIcon = {
    //                 id: key,
    //                 ...data(key)
    //             }
    //             bookIcons.push(bookIcon)
    //         }
    //         setBookData(bookIcons)
    //         console.log(data)
    //     })
    // }, [])


    useEffect(() => {
        const fetchBookData = () => {
          fetchData('books',setData)
      }
        fetchBookData();
       
      }, [])
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <section id="highlights">
          <div class="container">
            <div class="row">
              <h2 class="section__title">
                Why choose <span class="purple">Library</span>
              </h2>
              <div class="highlight__wrapper">
                <div class="highlight">
                  <div class="highlight__img">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <h3 class="highlight__subtitle">Easy and Quick</h3>
                  <p class="highlight__para">
                    Get access to the book you purchased
                  </p>
                </div>
                <div class="highlight">
                  <div class="highlight__img">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <h3 class="highlight__subtitle">10,000+ Books</h3>
                  <p class="highlight__para">
                    Library has books from all your favorite categories
                  </p>
                </div>
                <div class="highlight">
                  <div class="highlight__img">
                    <i class="fas fa-tags"></i>
                  </div>
                  <h3 class="highlight__subtitle">Affordable</h3>
                  <p class="highlight__para">
                    Get your hands on popular titles as low as 10$
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="features">
          <div class="container">
            <div class="row">
              <h2 class="section__title">
                Featured <span class="purple">Books</span>
              </h2>
              <div class="books">

                {data.map(book => <Books data={book.data} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="explore">
        <div class="container">
          <div class="row row__column">
            <h2>
              Explore more <span class="purple">books</span>
            </h2>
            <a href="#features">
              <button class="btn">Browse books</button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </> 
  );
};

export default Home;
