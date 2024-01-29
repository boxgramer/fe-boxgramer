import { ReactNode } from "react";

export default function About(): ReactNode {
  return (
    <div className="flex justify-center items-center  px-64  bg-about h-screen bg-no-repeat bg-cover     bg-top-left  after:-z-0   after:absolute after:w-screen after:bottom-0 after:bg-third after:shadow-color-third">
      <div className="z-10 flex flex-col items-center justify-center gap-5">
        <h1 className="uppercase text-primary text-64px font-extrabold text-center mb-3">
          Boxgramer
        </h1>
        <p className="text-secondary text-24px font-bold  text-center leading-10 mb-5 mx-52 ">
          hi, i am Boxgramer, i am a professional programmer who developed some
          software for clients and have more than 3 years experience using
          laravel, flutter, godot , phaser , nextjs
        </p>
        <button className="rounded-lg border-primary text-center text-primary border-4 py-4 px-10 text-24px mt-5 font-bold ">
          explore more
        </button>
      </div>
    </div>
  );
}
