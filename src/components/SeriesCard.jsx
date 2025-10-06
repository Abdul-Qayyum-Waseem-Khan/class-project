import React from "react";
import "./SeriesCard.css";
import dataSeries from "../api/dataSeries.json";
export default function SeriesCard() {
  return <div>
    {
        dataSeries.map((curElem, index)=>{
            reuturn(
                <>
                </>
            )
        })
    }
  </div>;
}
