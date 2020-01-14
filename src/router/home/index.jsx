import React, { useEffect } from "react";
import { getAllData } from "./homeApi";

export default function Home() {
  useEffect(() => {
    getAllData({}).then(res =>{
      console.log(res)
    })
    
  }, []);

  return (
    <>
      首页1
    </>
  );
}
