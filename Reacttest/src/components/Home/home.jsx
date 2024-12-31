import React from 'react'
import Header from "../../Header.jsx";
import Banner from "./Banner";
import Footer from "./Footer";


function home() {
  return (
  <>
   <Header/>
   
   <Banner/>
   <img src="https://static.zara.net/assets/public/7770/7ba9/d4fb4af28f62/adc366b29cda/image-landscape-1149c047-700e-4e38-84d1-96feb6924ac6-default_0/image-landscape-1149c047-700e-4e38-84d1-96feb6924ac6-default_0.jpg?ts=1728907215376&w=1922" alt="" />
  <img src="https://static.zara.net/assets/public/4c4a/2877/dc814e8f9ca8/d6873da2d771/image-landscape-default-4f5f059c-ff79-4763-8582-79408091606c-default_0/image-landscape-default-4f5f059c-ff79-4763-8582-79408091606c-default_0.jpg?ts=1728906823256&w=1922" alt="" />
  <Footer />
   </>
  )
}

export default home;