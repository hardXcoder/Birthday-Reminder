import React, { useEffect, useState } from "react";
import birthdayDataList from "./data/BirthdayData";

const BirthDayList = () => {
  const [birthdayData, setBirthDayData] = useState([]);

  function clearAllBirthdays() {
    setBirthDayData([]);
  }

  useEffect(() => {
    setBirthDayData(birthdayDataList);
    console.log("UseEffect is called");
  }, []);

  //   console.log(birthdayDataList);
  console.log("Render called");

  return (
    <div className="birthdayContainer">
      {birthdayData.length != 0 ? (
        <>
          <h1> 5 birthdays today !</h1>
          <ul>
            {birthdayData.map((data) => {
              return (
                <div key={data.key} className="birthdayDetais">
                  <li>
                    <div>
                      <img className="profileImage" src={data.image} />
                    </div>
                    <div>
                      <h3>{data.name}</h3>
                      <h3 className="greyText">{data.age}</h3>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <h1> 0 birthdays today !</h1>
      )}
      <div className="clrDiv">
        <button className="clrBtn" onClick={clearAllBirthdays}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default BirthDayList;
