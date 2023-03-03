import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../components/AdminPanelComp/SideBar";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import CustomButton from "../../../components/CustomButton";
import styles from "../../../style";
import TextArea from "antd/es/input/TextArea";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const formHeading = (headingText) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl whitespace-nowrap mr-3">{headingText}</h1>
      <div className="h-[1px] w-full bg-gray-200"></div>
    </div>
  );
};

const outerStyles = () => {
  return "grid grid-cols-1 md:grid-cols-2 gap-2 my-5";
};
const outerStylesSingle = () => {
  return "grid grid-cols-1 gap-2 my-5";
};

const textFieldStyles = () => {
  return "w-full bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all";
};

const textField = (propertyName, nameProp) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-600 mb-2">{propertyName}</h1>
      <input type="text" name={nameProp} className={textFieldStyles()} />
    </div>
  );
};

const AddProperty = () => {
  return (
    <>
      <SideBar component={<AddPropertyForm />} selectedKey="1" />
    </>
  );
};

const features = ["Location", "Residential", "ROI", "Occupancy", "Yield"];

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddPropertyForm = () => {
  const featuresRadio = useRef(features.map((x) => false));
  const [specialClick, setSpecialClick] = useState(false);
  const [timelineStages, settimelineStages] = useState(3);
  const [calendarOn, setcalendarOn] = useState(-1);
  const [date, setdate] = useState(new Date());

  const onCalChange = (date) => {
    setdate(date);
  };

  const fundingStages = () => {
    let tempArr = [];
    for (let i = 0; i < timelineStages; i++) {
      tempArr.push(
        <div
          className="w-full text-gray-500
        "
          key={i}
        >
          Stage {i + 1}
          <input
            type="text"
            name="fundingTimelineDetail"
            placeholder="brief details"
            className={textFieldStyles() + " mt-2"}
          />
          <input
            type="text"
            name="fundingTimelineDate"
            placeholder="date"
            className={textFieldStyles() + " mt-2"}
            value={date}
            onClick={() => {
              setcalendarOn(i);
            }}
          />
          {calendarOn === i && <Calendar onChange={onCalChange} value={date} />}
          {i === timelineStages - 1 && (
            <div>
              <div
                onClick={() => {
                  settimelineStages(timelineStages + 1);
                }}
                className="inline-block border border-gray-300 w-fit p-1 cursor-pointer rounded-md mt-2 hover:border hover:border-gray-600 hover:text-gray-600"
              >
                Add Stage
              </div>
              <div
                onClick={() => {
                  if (timelineStages > 1) {
                    settimelineStages(timelineStages - 1);
                  }
                }}
                className="ml-2 inline-block border border-gray-300 w-fit p-1 cursor-pointer rounded-md mt-2 hover:border hover:border-red-600 hover:text-red-600"
              >
                Remove
              </div>
            </div>
          )}
        </div>
      );
    }
    return tempArr;
  };

  useEffect(() => {}, [specialClick]);

  return (
    <>
      <h1 className="text-[2rem] font-semibold text-blue-400 mb-5">
        Add New Property
      </h1>
      <div className="w-full">
        <form>
          {formHeading("General Information")}
          <div className={outerStyles()}>
            {textField("Property Name", "propName")}

            <div className="flex flex-col">
              <h1 className="text-gray-600 mb-2">Price</h1>
              <div className="flex items-center relative w-full bg-gray-400 text-lg rounded-md">
                <p className="absolute text-gray-600 font-semibold ml-2">USD</p>
                <input
                  type="text"
                  name="price"
                  className={
                    "w-full pl-12 bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all"
                  }
                />
              </div>
            </div>
          </div>

          <div className={outerStyles()}>
            {textField("Location", "location")}
            {textField("City", "city")}
          </div>

          <div className={outerStylesSingle()}>
            <h1 className="text-gray-600 mb-2">Location Details</h1>
            <textarea
              name="locationDetails"
              className={textFieldStyles()}
              rows="7"
            ></textarea>
          </div>
          <div className={outerStylesSingle() + " mb-10"}>
            <h1 className="text-gray-600 mb-2">Property Overview</h1>
            <textarea
              name="propertyOverview"
              className={textFieldStyles()}
              rows="7"
            ></textarea>
          </div>

          <div className="mb-10">
            {formHeading("Property Features")}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-6">
              {textField("No. of Beds", "noOfBeds")}
              {textField("No. of Baths", "noOfBaths")}
              {textField("Covered Area", "coveredArea")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-gray-600 my-10">
              <h1 className="col-span-1 md:col-span-5">
                Select the features you want to tell your buyers specially
                about...
              </h1>
              {features.map((f, index) => {
                // check this index's value in the state array

                return featuresRadio.current[index] ? (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      featuresRadio.current.splice(index, 1, false);
                      setSpecialClick(!specialClick);
                    }}
                    className="w-full border-[1px] border-gray-800 cursor-pointer text-gray-900 text-xl text-center rounded-lg py-3 font-bold"
                  >
                    {f}
                  </button>
                ) : (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      featuresRadio.current.splice(index, 1, true);
                      setSpecialClick(!specialClick);
                    }}
                    className="w-full border-[1px] border-gray-400 cursor-pointer text-gray-400 text-xl text-center rounded-lg py-3 font-bold"
                  >
                    {f}
                  </button>
                );
              })}
              <div className="col-span-5">
                {featuresRadio.current.map((r, index) => {
                  return (
                    r && (
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5"
                        key={index}
                      >
                        <div>
                          {textField(
                            `${features[index]} Heading`,
                            "featuresHeading"
                          )}
                        </div>
                        <div>
                          {textField(
                            `${features[index]} Details`,
                            "featuresHeading"
                          )}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mb-10">
            {formHeading("Financial Details")}
            <div className={outerStyles()}>
              <div className="flex flex-col">
                <h1 className="text-gray-600 mb-2">Transaction Cost</h1>
                <div className="flex items-center relative w-full bg-gray-400 text-lg rounded-md">
                  <p className="absolute text-gray-600 font-semibold ml-2">
                    USD
                  </p>
                  <input
                    type="text"
                    name="transactionCost"
                    className={
                      "w-full pl-12 bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-600 mb-2">Stake Fee</h1>
                <div className="flex items-center relative w-full bg-gray-400 text-lg rounded-md">
                  <p className="absolute right-0 text-gray-600 font-semibold mr-5">
                    %
                  </p>
                  <input
                    type="text"
                    name="stakeFee"
                    className={
                      "w-full pr-12 bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-600 mb-2">Value Appreciation</h1>
                <div className="flex items-center relative w-full bg-gray-400 text-lg rounded-md">
                  <p className="absolute right-0 text-gray-600 font-semibold mr-5">
                    %
                  </p>
                  <input
                    type="text"
                    name="valueAppr"
                    className={
                      "w-full pr-12 bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-600 mb-2">Annual Return</h1>
                <div className="flex items-center relative w-full bg-gray-400 text-lg rounded-md">
                  <p className="absolute right-0 text-gray-600 font-semibold mr-5">
                    %
                  </p>
                  <input
                    type="text"
                    name="annualReturn"
                    className={
                      "w-full pr-12 bg-gray-200 outline-none text-lg rounded-md p-2 outline-offset-0 focus:outline-1 focus:outline-blue-300 transition-all"
                    }
                  />
                </div>
              </div>
              <div className="col-span-2">
                <h1 className="text-gray-600 mb-2">Financial Information</h1>
                <textarea
                  name="financialInfo"
                  className={textFieldStyles()}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mb-10">
            {formHeading("Funding Timeline")}
            <div className="grid grid-cols-3 my-5 gap-2 gap-y-5">
              {fundingStages()}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
