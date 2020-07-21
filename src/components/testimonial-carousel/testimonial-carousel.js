import React from "react"
import Slider from "react-slick"
import QuoteLeftIcon from "../../assets/quote-left.svg"
import QuoteRightIcon from "../../assets/quote-right.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./testimonial-carousel.scss"

const TestimonialCarousel = ({ testimonials = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => <div className="testimonial-carousel__dot"></div>,
  }

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map(testimonial => {
          return (
            <div className="testimonial-carousel__slide">
              <div className="testimonial-carousel__left-quote">
                <QuoteLeftIcon />
              </div>
              <div className="testimonial-carousel__content">
                {testimonial.testimonial_text}
              </div>
              <div className="testimonial-carousel__right-quote">
                <QuoteRightIcon />
              </div>
              <div className="testimonial-carousel__author">
                {testimonial.testimonial_name}
              </div>
              <div className="testimonial-carousel__occupation">
                {testimonial.testimonial_occupation}
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default TestimonialCarousel
