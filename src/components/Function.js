import React from "react";
import { Ti, Te, Fe, Fi, Ni, Ne, Si, Se } from "./Paragraphs";
import { useParams } from "react-router-dom";
function Function() {
  const functionComponents = {
    Ti: Ti,
    Te: Te,
    Fi: Fi,
    Fe: Fe,
    Ni: Ni,
    Ne: Ne,
    Si: Si,
    Se: Se,
  };
const {id} = useParams()
  let Component = functionComponents[id];
  console.log(id);
  return (
    <div>
      <Component />
    </div>
  );
}

export default Function;
