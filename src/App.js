import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div className='navbar'>
                <div className='header'>
                    <img src='assets/logoText.png' alt='logoText'/>
                </div>
                <div className='nav'>
                    <ul>
                        <li>
                            <a href='./contact.html'>
                            CONTACT  
                            </a>
                        </li>
                        <li>
                            <a href='./team.html'>
                                TEAM
                            </a>
                        </li>
                        <li>
                            <a href='./vision.html'>
                                VISION
                            </a>
                        </li>
                        <li>
                            <a href='./products.html'>
                                PRODUCTS 
                            </a>
                        </li>
                        <li>
                            <a href='./services.html'>
                                SERVICES
                            </a>
                        </li>
                    </ul>
                </div>
            </div>



            <div className='container'>


                <div className='first'>
                    <div className='first_content'>
                        <h1>
                            What we are?
                        </h1>
                        <p>
                            We aim to bring a change in the field of agriculture by efficient combination of 
                            technologies like artificial intelligence with IOT and modern farming techniques.
                        </p>
                    </div>
                    <div className='first_image'>
                        <span><img src="./assets/home_1.png" alt='home_1' /></span>
                    </div>
                </div>


                <div className='second'>
                    <div className='second_image'>
                        <span><img src="./assets/home_2.png" alt='home_2'/></span>
                    </div>
                    <div className='second_content'>
                        <h1>
                            Lorem Ipsum?
                        </h1>
                        <p>
                            Lorem Ipsum !?! Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummypx text ever since the 1500s,
                        </p>
                    </div>
                </div>


                <div className='third'>
                    <center>
                    <span>
                        <img src="./assets/home_3.png" alt='home_3'/>
                    </span>
                    </center>
                </div>

                
            </div>
    </div>
  );
}}

export default App;
