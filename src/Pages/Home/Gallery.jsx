import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/ebc/gallery/image-1.jpg",
  "/ebc/gallery/image-2.jpg",
  "/ebc/gallery/image-3.jpg",
  "/ebc/gallery/image-4.jpg",
  "/ebc/gallery/image-5.jpg",
  "/ebc/gallery/image-6.jpg",
  "/ebc/gallery/image-7.jpg",
  "/ebc/gallery/image-8.jpg",
  "/ebc/gallery/image-9.jpg",
  "/ebc/gallery/image-10.jpg",
  "/ebc/gallery/image-11.jpg",
  "/ebc/gallery/image-12.jpg",
  
 
];

export default function Gallery() {
  const swiperRef = useRef(null);

  return (
    <div id="gallery" className="py-6 px-6 md:px-12 bg-white  ">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
        Gallery
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-3 md:mb-6 rounded-full"></div>

      <div className="relative borderRadius">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-md"
        >
          <FaChevronLeft size={12} />
        </button>

        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                loading="lazy"
                alt={`Slide ${idx + 1}`}
                className="w-full h-[240px] aspect-video borderRadius object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-md"
        >
          <FaChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
