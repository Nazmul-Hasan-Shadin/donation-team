import React, { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";
import { getStoredCard } from "../../utilities/localStorage";
import { useLoaderData } from "react-router-dom";

const Statistcs = () => {
  const [donatedData, setDonatedData] = useState([]);
  const donataionData = useLoaderData();

  useEffect(() => {
    const storedDonationCard = getStoredCard();
    if (donataionData) {
      const storedDonateData = [];
      for (const singleDonateId of storedDonationCard) {
        const matchedData = donataionData.find(
          (donationData) => donationData.id === singleDonateId
        );
        if (matchedData) {
          storedDonateData.push(matchedData);
        }
      }
      setDonatedData(storedDonateData);
    }
  }, [donataionData]);

  const allDonateCardPrice = donataionData.reduce(
    (preValue, donatePrice) => preValue + donatePrice.price,
    0
  );

  const totalDonatePrice = donatedData.reduce(
    (preValue, donatePrice) => preValue + donatePrice.price,
    0
  );
  const percentageOfDonate = (
    (totalDonatePrice / allDonateCardPrice) *
    100
  ).toFixed(2);
  const restTotalOutOf100 = (allDonateCardPrice - percentageOfDonate).toFixed(
    2
  );

  const data = [
    {
      name: "You Donate ",
      value: parseFloat(percentageOfDonate),
      color: "#FF444A",
    },
    {
      name: "Total Donate",
      value: parseFloat(restTotalOutOf100),
      color: "#00C49F",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="60%"
            cy="50%"
            outerRadius={143}
            fill="#8884d8"
            dataKey="value"
          >
            {
            
            data.map((color, index) => (
              <Cell key={index} fill={color.color} />
            ))
            
            }
          </Pie>

          <Tooltip />
        </PieChart>
        <div className="flex ml-40 flex-col md:flex-row justify-center">
          Total Donate{" "}
          <progress
            className="progress progress-success w-56"
            value="40"
            max="100"
          ></progress>
          Your Donate{" "}
          <progress
            className="progress progress-error w-56"
            value="40"
            max="100"
          ></progress>
        </div>
      </div>

      <h2 className="relative right-64   bottom-[201px] left-[86px] md:left-[-38%] -top-[260px] md:top-2  text-2xl text-white ">
        {" "}
        {percentageOfDonate}%{" "}
      </h2>

      <h2 className="relative right-64   bottom-[201px] left-[86px] md:left-[-48%] -top-[447px] md:top-[-93px]  text-2xl text-red-800  ">
        {" "}
        {restTotalOutOf100} %{" "}
      </h2>
    </div>
  );
};

export default Statistcs;
