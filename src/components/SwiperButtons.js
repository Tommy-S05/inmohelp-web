import {useSwiper} from "swiper/react";

const SwiperButtons = () => {
    const swiper = useSwiper();
    return (
        <div className={'sm:absolute sm:right-0 sm:-top-16 flex justify-center items-center gap-4 mt-5'}>
            <button
                className={'text-xl text-[#4066ff] py-[0.2rem] px-[0.8rem] rounded-md bg-[#EEEEFF] cursor-pointer'}
                onClick={() => swiper.slidePrev()}
            >
                &lt;
            </button>
            <button
                className={'text-xl text-[#4066ff] py-[0.2rem] px-[0.8rem] rounded-md swiper-button cursor-pointer'}
                onClick={() => swiper.slideNext()}
            >
                &gt;
            </button>
        </div>
    )
}

export default SwiperButtons;