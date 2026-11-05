export const instant = false
import React, { Suspense } from "react";
import ClonePage from "./component/ClonePage";

const page = async () => {

  const prom = await fetch(`${process.env.SURVER_URI}/visitor`);
  const res = await prom.json();

  return (
    <div>
      <Suspense fallback={'loading'}>
        <ClonePage res={res}/>
      </Suspense>
    </div>
  );
};

export default page;
