import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, The name's ${pageInfo?.name}`, "Guy-who-love-Games.jsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            {/* Terminal Portfolio Section - Positioned at bottom right */}
            <div className="absolute bottom-20 right-5 z-20">
                <a
                    href="https://terminal-portfolio-five-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#1E1E1E] text-white px-4 py-2 rounded-lg
                    transition-all duration-300 hover:bg-[#2D2D2D] hover:scale-105"
                >
                    <img src="/terminal-orange.png" alt="Terminal" className="w-6 h-6" />
                    <span className="text-sm font-medium font-['Montserrat'] tracking-wide">
                        Are you a Developer? Check out my Terminal Portfolio →
                    </span>
                </a>
            </div>

            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
            />
            <div className="z-20 relative">
                <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">{pageInfo?.role}</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
