import React from 'react'
import Slider from './components/Slider'
import styled from 'styled-components'
import slides from './mock.json'
import Marquee from 'react-fast-marquee'

const Home = () => {

  const Section= styled.section`

.thiswidth{
  max-width:auto;
  max-height:auto;
}
  .container {
    margin-left: 20%;
    display: flex;
    flex-direction: row;
    gap: 2px;
}

.container img, .container p {
    flex-grow: 0;
}

.container img {
    max-width: 100%;
    max-height: 100%;
}

h4{
  color: red;
}
h1{
  font-weight: 1000;
}
.container p {
    font-size: 20px;
    margin-left: 10%;
    margin-top: auto;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    line-height: 1.5;
}
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
.img3{
  border-radius: 50%;
  width: 75%;
}
  `;
  return (
    <Section>
    <Slider slides={slides}/>

    <div className='thiswidth'>
        <div className="container">
          <img
            className='img'
            src="./images/home1.png"
            alt="Profile"
            style={{ marginTop: "12%", display: "inline-block;" }}
          ></img>
          <p>
            <h4>What is our identity, and what makes us different?</h4>
            <h1>
What is our identity, and what makes us different?
We Foyer Tech</h1>
Since our inception, our only aim was to provide top-notch IT solutions to firms that may lack behind in coping with Technological advancements. We, at Foyer Technology, aim to work with small and medium-sized organisations to help them with every sort of IT process and to help them secure their information and data of the business.
          </p>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
          <div>
            <h4>Our Project Work Flow</h4>
            <h1>Our Work Process</h1>
          </div>
          <p>
          <h3>Our main focus is towards analysing our client’s business, understanding the loopholes and then crafting software or a web-based application that helps them to to be in sync with the latest Technology.
          </h3></p>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
    <div class="row">
  <div class="column">
    <img className='img3' src="./images/circle1.png" alt="circle"/>
  </div>
  <div class="column">
    <img className='img3' src="./images/circle1.png" alt="circle"/>
  </div>
  <div class="column">
    <img className='img3' src="./images/circle1.png" alt="circle"/>
  </div> 
 </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
    <div>
            <h4>Why you should choose Foyer Tech for business</h4>
            <h1>Our Expertises</h1>
          </div>
          <p>
          <h3>Our services are targeted to serve all industries that involve software development, programming and execution. 
          </h3></p>
    </div>
    <br></br>
    <br></br>
         <Marquee>

            <div>
              <img src="./images/euro-textiles.png" alt="hi"/>
            </div>
            <div>
              <img src="./images/iconic-homes.png" alt="hi"/>
            </div>
            <div>
              <img src="./images/nipponpaint.png" alt="hi"/>
            </div>
            <div>
              <img src="./images/steps.png" alt="hi"/>
            </div>
            <div>
              <img src="./images/loopcommerce.png" alt="hi"/>
            </div>
            <div>
              <img src="./images/cyber-school.png" alt="hi"/>
            </div>

         </Marquee>
    
</div>
    </Section>
  )
}


export default Home