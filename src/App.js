import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
const App = () => {
  const [filterParam, setFilterParam] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = () => {
    console.log(filterParam);
    let x = data.filter(
      (f) =>
        f.product[0].name.includes(filterParam.product) &&
        f.amount == filterParam.amount &&
        f.date.substring(0, 10) === filterParam.date
    );
    setFilteredData(x);
  };
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState("");
  const [mostdate, setDate] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch(
      "https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json"
    );
    const data = await res.json();
    console.log(data);
    let max = Math.max(...data.map((e) => e.amount));
    let x = data.find((e) => e.amount === max).product[0].name;
    let date = data.find((e) => e.amount === max).date.substring(0, 10);
    setDate(date);
    setBrand(x);
    setData(data);
    setFilteredData(data);
  };

  return (
    <div>
      <Navbar />
      <div className="flex mx-auto mt-20 justify-center mr-2">
        <div className="w-5/12">
          <div className="flex">
            <input
              onChange={(e) =>
                setFilterParam({
                  ...filterParam,
                  [e.target.name]: e.target.value,
                })
              }
              className="border-2"
              name="product"
              type="text"
              placeholder="Search Product"
            />
            <input
              onChange={(e) =>
                setFilterParam({
                  ...filterParam,
                  [e.target.name]: e.target.value,
                })
              }
              className="border-2"
              type="text"
              name="amount"
              placeholder="Enter order amount"
            />

            <div className="relative">
              <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                onChange={(e) =>
                  setFilterParam({
                    ...filterParam,
                    [e.target.name]: e.target.value,
                  })
                }
                type="text"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                placeholder="Select date"
              />
            </div>

            <button
              onClick={handleClick}
              className="bg-blue-700 text-white px-2">
              Filter
            </button>
          </div>
          <Table data={filteredData} />
        </div>
        <div className="w-5/12 justify-between flex flex-col">
          <div className="mt-10 ml-10">
            <h1 className="text-3xl">Statistika(Son 1ay)</h1>
            <h2 className="text-xl">
              Ən çox satılan məhsul <span className="font-bold">{brand}</span>{" "}
            </h2>
            <span>Ən çox satılan gün {mostdate}</span>
          </div>
          <div>
            <BarChart stats={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
