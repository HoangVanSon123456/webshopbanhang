"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ItemPhone from "../public/images/image 6.png";
import ItemLaptop from "../public/images/image 15.png";
import ItemTrademark from "../public/images/image (1).png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="mx-28 relative group mb-8">
      <div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[416px] rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute -mt-60 -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <ChevronLeftIcon onClick={prevSlide} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute -mt-60 -translate-x-0 right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
          <ChevronRightIcon onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <FiberManualRecordIcon
                style={{ color: "#eb8f8f", fontSize: "medium" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-3">
          <span className="text-xl font-semibold">Kategoriyalar</span>
        </div>
        <div className="flex justify-center flex-wrap gap-x-5">
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
          <div className="pt-4 pb-7 px-1 bg-white rounded-lg">
            <Image src={ItemPhone} alt="" />
            <span className="text-lg ml-5">Smartfonlar</span>
          </div>
        </div>
        <div className="mt-5 w-full text-center p-2 bg-white rounded-md hover:bg-slate-100">
          <button>Batafsil</button>
        </div>
      </div>
      <div className="mt-7">
        <div className="mb-3">
          <span className="text-xl font-semibold">Eng ommabop</span>
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
          <div className="pt-2 pb-7 px-5 bg-white rounded-lg">
            <Image src={ItemLaptop} alt="" />
            <div className="">
              <span className="text-lg text-blue-500">299 000 so’m</span>
            </div>
            <div className="mb-3">
              <div>
                <span className="text-sm break-words">Apple Airpods Pro</span>
              </div>
              <div>
                <span className="text-sm break-words">
                  simsiz quloqchin , Oq rangda
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm py-3 text-gray-400">
                1230 ta buyurtma
              </span>
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-3 rounded-lg">
                Sotib olish
              </button>
              <ShoppingCartOutlinedIcon style={{ marginLeft: "55px" }} />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full text-center p-2 bg-white rounded-md hover:bg-slate-100">
          <button>Ko’proq ko’rish</button>
        </div>
      </div>
      <div className="mt-7 mb-20">
        <div className="mb-3">
          <span className="text-xl font-semibold">Brendlar bo’yicha</span>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
          <div className="py-4 px-10 bg-white rounded-lg">
            <Image src={ItemTrademark} alt="" width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
}
