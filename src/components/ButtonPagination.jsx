import React from "react";
export function ButtonPagination({number, active}) {
  if(active) {
    return <button className="border-2 border-transparent px-3 py-1 text-sm rounded-md bg-base-kuning-clr hover:text-white hover:bg-base-kuning-clr text-white">{number}</button>;
  } else {
    return <button className="border-2 border-transparent px-3 py-1 text-sm rounded-md hover:text-white hover:bg-base-kuning-clr text-base-kuning-clr">{number}</button>
  }
}
  