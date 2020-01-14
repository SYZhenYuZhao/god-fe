import React, { useState, useEffect, useCallback } from "react";
import { getAllData } from "./hupuApi";

export default function() {
  const [dataList, setDataList] = useState([]);

  const getData = useCallback(async () => {
    let res = await getAllData();
    console.log(res.data);
    setDataList(res.data);
  });

  useEffect(() => {
    getData({});
  }, []);

  console.log(dataList, "dataList");
  return (
    <ul>
      {dataList.map(item => {
        return (
          <li key={item.title}>
            <a href={item.origin} target="_blank">
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
