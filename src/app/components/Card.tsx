import React from "react";

interface CardType {
  studentname: string;
  studentid: number;
  department: string;
  shift: string;
  batch: number;
  validupto: number;
}
const Card = (props: CardType) => {
  return (
    <>
      <div className="items-center justify-center p-5 m-5 bg-slate-200 font-sans border-4 border-green-700">
        <h1 className=" xl:text-3xl text-3xl font-bold pb-5 bg-green-700">
          Student Identity Card
        </h1>

        <p className="items-center justify-center xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Student Name : <span className="font-bold">{props.studentname}</span>
        </p>
        <p className="items-center justify-center xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Student ID : <span className="font-bold">{props.studentid}</span>
        </p>
        <p className="items-center justify-centerxl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Department : <span className="font-bold">{props.department}</span>
        </p>
        <p className="items-center justify-center xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Shift : <span className="font-bold">{props.shift}</span>
        </p>
        <p className="items-center justify-center xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Batch: <span className="font-bold">{props.batch}</span>
        </p>
        <p className="items-center justify-cemter xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Valid up to : <span className="font-bold">{props.validupto}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
