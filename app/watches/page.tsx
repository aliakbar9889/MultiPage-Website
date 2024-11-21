import React from 'react';
import Image from 'next/image';  // Importing the Image component

const CustomComponent = () => {
  return (
    <div className="container">
      {/* Cards */}
      <div className="cards">
        {/* Card 1 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic1.png" 
              alt="Card Image 1" 
              width={500}  // Set width for the image
              height={300} // Set height for the image
            />
          </div>
          <div className="card-content">
            <h2><b><i>ROLEX</i></b></h2>
            <p><i>Luxury Watch</i></p>
            <p><span className="cost">$12000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic3.png" 
              alt="Card Image 2" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>OMEGA</i></b></h2>
            <p><i>Sporty Design</i></p>
            <p><span className="cost">$8000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic4.png" 
              alt="Card Image 3" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>PATEK PHILLIPE</i></b></h2>
            <p><i>Elegant timeplace</i></p>
            <p><span className="cost">$18000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Card 4 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic5.png" 
              alt="Card Image 4" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>TAG HEUER</i></b></h2>
            <p><i>Sporty & Stylish</i></p>
            <p><span className="cost">$11000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Card 5 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic6.png" 
              alt="Card Image 5" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>Breitling</i></b></h2>
            <p><i>Bold & Rugged</i></p>
            <p><span className="cost">$16000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Card 6 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/pic7.png" 
              alt="Card Image 6" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>SEIKO</i></b></h2>
            <p><i>Affordable & Reliable</i></p>
            <p><span className="cost">$10000</span></p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
