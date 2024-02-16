"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
function Home() {
  const [client, setclient] = useState<Boolean | null>(null);
  const [width, setwidth] = useState<Boolean | null>(null);

  useEffect(() => {
    const sizeclient = () => {
      const body = document.body.clientWidth;
      if (body <= 1340) {
        setclient(true);
      } else {
        setclient(false);
      }
      if (body <= 1356) {
        setwidth(true);
      } else {
        setwidth(false);
      }
    };
    sizeclient();
    window.addEventListener("resize", sizeclient);
    return () => {
      window.removeEventListener("resize", sizeclient);
    };
  }, []);

  return (
    <>
      <section className="p-[40px]">
        <div className={`relative`}>
          <h2 className={`font-bold ${client ? "text-[30px]" : "text-[45px]"}`}>
            So lets talk about me!
          </h2>
          <p className={`font-[500] mb-[10px] ${client ? "text-[10px]" : ""}`}>
            So i love so much to coding and trying studying alot something :)
            <br></br>
            So yes i'm programmer for 3 Years, So you must be asking yourself
            what programming language I know..
            <br></br>
            <br></br>
            <span className="font-bold">
              Here the programming language i know:
            </span>
          </p>
          <div className="max-w-[1232px]">
            <section
              className={`grid ${
                client
                  ? "grid-cols-[repeat(auto-fill,_minmax(45px,_1fr))]"
                  : "grid-cols-[repeat(auto-fill,_minmax(95px,_1fr))]"
              } relative gap-[18px] LanguagesStyles mb-[50px]`}
            >
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } p-[16px] rounded-[5px] bg-sky-600 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[40px]" : "w-[80px]"
                  } z-[1]`}
                  src="./Images/lua.png"
                />
              </div>
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } p-[16px] rounded-[5px] bg-yellow-500 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[40px]" : "w-[80px]"
                  } z-[1]`}
                  src="./Images/javascript.png"
                />
              </div>
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } p-[16px] rounded-[5px] bg-sky-500 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[40px]" : "w-[80px]"
                  } z-[1]`}
                  src="./Images/python.png"
                />
              </div>
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } p-[16px] rounded-[5px] bg-sky-700 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[40px]" : "w-[80px]"
                  } z-[1]`}
                  src="./Images/typescript.png"
                />
              </div>
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } p-[16px] rounded-[5px] bg-purple-700 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[40px]" : "w-[90px]"
                  } z-[1]`}
                  src="./Images/C.png"
                />
                <h2
                  className={`relative ${
                    client ? "top-[40px] text-[10px]" : "top-[70px]"
                  } font-extrabold `}
                >
                  studying
                </h2>
              </div>
              <div
                className={`${client ? "w-[50px]" : "w-[109px]"} ${
                  client ? "h-[50px]" : "h-[104px]"
                } w-[109px] h-[104px] p-[16px] rounded-[5px] bg-sky-700 grid place-items-center place-content-center`}
              >
                <img
                  className={`absolute box-border p-[0] block ${
                    client ? "w-[60px]" : "w-[130px]"
                  } z-[1]`}
                  src="./Images/C++.png"
                />
                <h2
                  className={`relative ${
                    client ? "top-[40px] text-[10px]" : "top-[70px]"
                  } font-extrabold `}
                >
                  studying
                </h2>
              </div>
            </section>
          </div>
          <p className={`font-[500] mb-[10px] ${client ? "text-[10px]" : ""}`}>
            But wait shalev, how did you learn all them?!
            <br></br>
            Good question!, you should see on YouTbe about the programming
            language!
            <br></br>
            Or just read some random site that can let you learn how!
          </p>
          <h1
            className={`${client ? "text-[10px]" : "text-[45px]"} font-[800]`}
          >
            if you want some src from the website
            <br></br>
            look inside from{" "}
            <span className="hover:text-[#6e6e6e] cursor-pointer">
              <Link href={"https://github.com/TheMoonSir"}>my github</Link>
            </span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Home;
