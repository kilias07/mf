import {FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {useState} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import {urlFor} from "../../lib/sanity";


export const ProductGallery = ({gallery}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="w-screen md:w-[40rem] p-3 md:p-0 h-[45rem]">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    loop={true}
                >

                    {gallery.images.map(image => (
                        <SwiperSlide key={image._key}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={`${urlFor(image).url()}`}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {gallery.images.map(image => (
                        <SwiperSlide key={image._key}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={`${urlFor(image).url()}`}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
         </div>
    );
};

