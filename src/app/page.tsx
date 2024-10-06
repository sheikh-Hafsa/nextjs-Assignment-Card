import React from "react";
import Card from "./components/Card";
export default function page() {
  return (
    <>
      <div className="mx-w-[1440px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 grid-cols-1">
        <Card
          studentname="John"
          studentid={123}
          department="Chemistry"
          shift="Morning"
          batch={2022}
          validupto={2025}
        />
      </div>
      <div className="mx-w-[1440px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 grid-cols-1">
        <Card
          studentname="Charlotte"
          studentid={456}
          department="Computer Science"
          shift="Evening"
          batch={2023}
          validupto={2026}
        />
      </div>
      <div className="mx-w-[1440px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 grid-cols-1">
        <Card
          studentname="Jackson"
          studentid={789}
          department="English"
          shift="Morning"
          batch={2024}
          validupto={2027}
        />
      </div>
    </>
  );
}
