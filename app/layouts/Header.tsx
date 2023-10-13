"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/6.jpg";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type Props = {};

export default function Header({}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-28 bg-white border-2 shadow-3xl mb-11">
      <div className="flex mx-32">
        <Image src={logo} alt="" width={109} height={109} />
        <div className="w-1/2 mt-8 ml-24">
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
              placeholder="Tìm kiếm ...."
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <button
              className="relative z-[2] flex items-center rounded-r-full bg-gradient-to-r from-[#fec5c5] to-[#97a0f6] px-6 py-2.5 text-lg font-medium uppercase leading-tight text-slate-800  marker:shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8 ml-3">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="bg-gradient-to-r from-[#facece] to-[#cacff9] text-slate-800 px-3 py-2 capitalize rounded-xl"
          >
            <DehazeIcon className="mr-1 text-lg" />
            Danh sách
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button ",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className=" bg-gradient-to-r from-[#facece] to-[#cacff9] text-slate-800 mx-3 px-3 py-2 capitalize rounded-xl"
          >
            Việt Nam
            <ExpandMoreIcon className="text-lg" />
          </Button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="bg-gradient-to-r from-[#facece] to-[#cacff9] text-slate-800 px-3 py-2 capitalize rounded-xl"
          >
            Hoàng Văn Sơn
          </Button>
        </div>
      </div>
    </div>
  );
}
