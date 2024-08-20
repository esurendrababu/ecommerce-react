import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel'; // Ensure this path is correct
import './App.css'; // Ensure this path is correct


const Home = () => {
  const images = [
    // { title: 'Grocery', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.awMDGNF8SNtIv3J8MLTAvAHaGV&pid=Api&P=0&h=180', link: '/Grocery' },
    { title: 'Mobiles', imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.lOTik0f8GkiNZ7cIY6GLawHaGP&pid=Api&P=0&h=180', link: '/Mobiles' },
    { title: 'Fashion', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.zwPq3RpHexw7gIpMOVRnZgHaFn&pid=Api&P=0&h=180', link: '/Fashion' },
    { title: 'Electronics', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.m-S_4lNDvdwclqbXwNjqcgHaHa&pid=Api&P=0&h=180', link: '/Electronics' },
    { title: 'Furniture', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.Xbxgf1tYne0ArGBFyeWN6wHaDj&pid=Api&P=0&h=180', link: '/Furniture' },
    { title: 'Appliances', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP._CpI19ftpaxaoR5zBBr3_AHaC1&pid=Api&P=0&h=180', link: '/Appliances' },
    { title: 'Travel', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.52vm7d1XQxGEb6woXkHH0wHaHa&pid=Api&P=0&h=180', link: '/Travelling/header' },
    { title: 'Toys', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.r4P0GQ58mRxDLtrHp2Ni2wHaD8&pid=Api&P=0&h=180', link: '/Toys' },
    { title: 'Two Wheelers', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.vYYX2G3AKuJe1K555iTluQHaEP&pid=Api&P=0&h=180', link: '/TwoWheeler' },
    { title: 'Health', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.uL_0SwCfon-S-wVE-OMKNgHaHa&pid=Api&P=0&h=180', link: '/DoctorConsultation' },
    { title: 'Four wheelers', imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.uL-6FbO6x4o6-y96OcMmAAAAAA&pid=Api&P=0&h=180', link: '/FourWheeler' }

  ];

  return (
    <div class="container" className="home-container">
      <div className="image-container" id="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <Link to={image.link}>
              <img src={image.imgSrc} alt={image.title} className="image" />
              <div className="image-title">{image.title}</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="full-width">
        
       
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
