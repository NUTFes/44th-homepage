import React from "react";
import BackFrame from '@/src/components/common/back_frame';
import About50th from "../../components/greeting/about50th";

export default function GreetingPage() {
  return (
    <div>
      <BackFrame>
        <h1 className="text-center text-2xl font-bold">Greeting Page</h1>
      <About50th />
      <h1>Greeting Page</h1>
      </BackFrame>
    </div>
  );
}