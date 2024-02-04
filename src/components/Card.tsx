import { ReactNode } from "react";

export default function Card(): ReactNode {
  return (
    <div className="flex flex-col m-5">
      <h2>Point Of Sales</h2>
      <img src="/image/image-pos.jpg" className="w-20 h-20" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <h2>Role</h2>
          <p>:</p>
          <p>Tech Lead</p>
        </div>
        <div className="flex justify-between items-center ">
          <h2>Tech Stack </h2>
          <p>:</p>
          <p>Laravel , Livewire, Tailwind, Flutter</p>
        </div>
        <div className="flex justify-between items-center ">
          <h2>Published by </h2>
          <p>:</p>
          <p>Emadika Technology</p>
        </div>
      </div>
    </div>
  );
}
