import Category from "../../component/category/Category"
import HeroSection from "../../component/heroSection/HeroSection"
import HomePageProductCard from "../../component/homePageProductCard/HomePageProductCard"
import Layout from "../../component/layout/Layout"
import Testimonial from "../../component/testimonial/Testimonial"
import Track from "../../component/track/Track"

const NewHome = () => {
  return (
    <Layout>
    <HeroSection/>
    <Category/>
    <HomePageProductCard/>
    <Track/>
    <Testimonial/>
    


</Layout>
  )
}

export default NewHome