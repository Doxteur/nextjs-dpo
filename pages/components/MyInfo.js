/* eslint-disable react/no-unescaped-entities */
import { Image, Text } from "@nextui-org/react";
import React from "react";

function MyInfo() {
  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div>
        <Text
          h1
          className="lg:flex-grow md:w-10/12 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          css={{
            textGradient: "45deg, $green600 -20%, $green300 90%",
          }}
        >
          Jimmy Doussain
        </Text>
        <p b className="w-10/12 sm:text-center md:text-left">
          Je me présente je m'appelle jimmy doussain, je suis Développeur web.
          Je suis passionné par le développement de site web ,de jeux vidéo, et
          par le future de l'informatique en général (IA, BIG DATA etc...).
        </p>
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <div className="absolute w-44 h-full  -inset-800 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-12 sm:rounded-3xl "></div>
        <Image
          width={420}
          src="/coding.png"
          alt="Default Image"
          className="object-cover object-center rounded"
        />
      </div>
    </div>
  );
}

export default MyInfo;
