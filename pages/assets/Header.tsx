"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import { IoBagHandle } from "react-icons/io5";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/system";
import * as React from "react";

const StyledPopover = styled(Popover)({
  ".css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
    background: "#141414",
    color: "white",
    border: "1px solid #525252",
    borderRadius: "8px",
  },
});

function Header() {
  const [button, setbutton] = useState<HTMLButtonElement | null>(null);
  const [client, setclient] = useState<Boolean | null>(null);

  useEffect(() => {
    const sizeclient = () => {
      const body = document.body.clientWidth;
      if (body <= 1000) {
        setclient(true);
      } else {
        setclient(false);
      }
    };
    sizeclient();
    window.addEventListener("resize", sizeclient);
    return () => {
      window.removeEventListener("resize", sizeclient);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setbutton(event.currentTarget);
  };
  const handleClose = () => {
    setbutton(null);
  };
  const open = Boolean(button);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="transitionn-[all_0.3s_ease_0s] sticky w-screen top-0 max-h-[108px] z-[101] bg-[#141414]">
      <div
        className={`w-[100%] flex justify-center items-center mix-blend-normal border-b-[1.5px] border-solid border-zinc-400 ${
          client ? "p-0 hidden" : ""
        }`}
      >
        <div className="max-w-[1728px] m-auto top-0 h-[72px] z-[100] w-screen p-[12px_40px] flex relative justify-between items-center">
          <div className="flex justify-start items-center h-[40px]">
            <Link href={"/"}>
              <>
                <div className="h-[30px] cursor-pointer min-w-[80px] w-[182px] relative">
                  <span className="box-border block overflow-hidden w-[initial] h-[initial] m-0 p-0 absolute top-0 left-0 right-0 bottom-0">
                    <h1 className="text-[27px] absolute top-[-4px] left-0 right-0 bottom-0 box-border p-0 normal-case font-bold">
                      The Moon
                    </h1>
                  </span>
                </div>
              </>
            </Link>
          </div>
          <div className="block">
            <div className="items-center flex m-auto gap-[4px]">
              <>
                <>
                  <div className="flex cursor-pointer">
                    <div
                      onClick={() => handleClick}
                      className="cursor-pointer relative flex items-center place-content-center w-[48px] rounded-[8px] h-[48px] hover:bg-zinc-700 transitionn-[all_0.3s_ease_0s]"
                    >
                      <span className="inline-block relative m-0 align-middle">
                        <MdAccountCircle size={"29"} />
                      </span>
                    </div>
                  </div>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${
          client ? "flex" : "hidden"
        } h-[64px] w-screen z-[25] p-[10px_16px] border-b-[1.5px] border-solid border-zinc-400`}
      >
        <div className="flex justify-start items-center h-[40px]">
          <Link href={"/"}>
            <>
              <div className="h-[30px] cursor-pointer min-w-[80px] w-[182px] relative">
                <span className="box-border block overflow-hidden w-[initial] h-[initial] m-0 p-0 absolute top-0 left-0 right-0 bottom-0">
                  <h1 className="text-[27px] absolute top-[-4px] left-0 right-0 bottom-0 box-border p-0 normal-case font-bold">
                    The Moon
                  </h1>
                </span>
              </div>
            </>
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex items-center gap-[16px]">
            <>
              <div className="flex cursor-pointer">
                <div
                      onClick={() => handleClick}
                      className="cursor-pointer relative flex items-center place-content-center w-[48px] rounded-[8px] h-[48px] hover:bg-zinc-700 transitionn-[all_0.3s_ease_0s]"
                >
                  <span className="inline-block relative m-0 align-middle">
                    <MdAccountCircle size={"29"} />
                  </span>
                </div>
              </div>
            </>
          </div>
        </div>
      </header>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={button}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="m-0 font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em] p-0">
          <div className="p-[18px]">
            <div className="__ItemPopoverListStyle flex p-[16px] cursor-pointer rounded-[12px] items-[start] gap-[16px] min-w-[313px] hover:bg-[#1d1d1d] transitionn-[all_0.3s_ease_0s]">
              <>
                <span className="inline-block relative m-0 align-middle">
                  <IconContext.Provider
                    value={{
                      size: "29",
                    }}
                  >
                    <MdAccountCircle />
                  </IconContext.Provider>
                </span>
              </>
              <div className="grid gap-[4px]">
                <p className="text-[16px] leading-[19.2px] font-extrabold normal-case">
                  Status
                </p>
                <p className="text-[16px] leading-[19.2px] font-extrabold text-zinc-400 normal-case">
                  Showing to you about website
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledPopover>
    </div>
  );
}

export default Header;
