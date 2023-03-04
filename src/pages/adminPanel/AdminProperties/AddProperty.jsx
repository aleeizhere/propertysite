import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../components/AdminPanelComp/SideBar";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useFormik } from "formik";
import { AddPropertySchema } from "./AddPropertySchema";

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

const AddProperty = () => {
  return (
    <>
      <SideBar component={<AddPropertyForm />} selectedKey="1" />
    </>
  );
};

const features = ["Location", "Residential", "ROI", "Occupancy", "Yield"];

const AddPropertyForm = () => {
  const featuresRadio = useRef(features.map((x) => false));
  const [specialClick, setSpecialClick] = useState(false);
  const [timelineStages, settimelineStages] = useState([
    {
      details: "",
      date: new Date().toDateString(),
      time: new Date().getTime(),
    },
  ]);
  const [calendarOn, setcalendarOn] = useState(-1);
  let error = false;

  const formik = useFormik({
    initialValues: {
      propName: "",
      price: "",
      location: "",
      city: "",
      locationDetails: "",
      propertyOverview: "",
      noOfBeds: "",
      noOfBaths: "",
      coveredArea: "",
      transactionCost: 0,
      stakeFee: 0,
      valueAppr: 0,
      annualReturn: 0,
      financialInfo: "",
    },
    validationSchema: AddPropertySchema,
    onSubmit: (values, action) => {
      const payload = { formValues: values, timelineStages, featuresRadio };
      console.log(payload);
      action.resetForm();
    },
  });

  console.log("errors", Object.keys(formik.errors));

  // if there is error just render the first error on the screen

  if (Object.keys(formik.errors).length) {
    // seterror(true);
    // In every render check if there are errors
    error = true;

    // console.log(formik.errors[Object.keys(formik.errors)[0]]);
  }

  console.log("iserror", error);

  const textField = (propertyName, nameProp) => {
    return (
      <div className="flex flex-col">
        <h1 className="text-gray-600 mb-2">{propertyName}</h1>
        <input
          type="text"
          name={nameProp}
          id={nameProp}
          className={textFieldStyles()}
          value={formik.values.nameProp}
          onChange={formik.handleChange}
        />
      </div>
    );
  };

  const onCalChange = (date) => {
    const tempArr = timelineStages.slice();
    const temp = {
      ...tempArr[calendarOn],
      time: date.getTime(),
      date: date.toDateString(),
    };
    // take the deep copy of the state variable, make changes to it and then place in the state
    tempArr.splice(calendarOn, 1, temp);
    settimelineStages(tempArr);

    // console.log(new Date().toDateString());
    // setdate(date);
  };

  const fundingStages = () => {
    let tempArr = [];
    for (let i = 0; i < timelineStages.length; i++) {
      // because JSX runs map over this
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
            placeholder="for eg, sales deed approves"
            className={textFieldStyles() + " mt-2 text-black"}
            onChange={(e) => {
              const temp = timelineStages.slice();
              temp.splice(i, 1, { ...temp[i], details: e.target.value });
              settimelineStages(temp);
            }}
          />
          <div className="relative mt-2">
            <input
              type="text"
              name="fundingTimelineDate"
              placeholder="date"
              className={textFieldStyles() + " pr-14 text-black"}
              readOnly
              value={timelineStages[i].date}
              onClick={() => {
                setcalendarOn(i);
              }}
            />
            {/* Close calendar button */}
            {calendarOn === i && (
              <div
                onClick={() => {
                  setcalendarOn(-1);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 mx-1 cursor-pointer text-red-400 font-semibold"
              >
                Close
              </div>
            )}
          </div>
          {/* turn on the calendar for this input only */}
          {calendarOn === i && (
            <Calendar
              minDate={new Date()}
              onChange={onCalChange}
              value={new Date()}
            />
          )}
          {/* show add stage button only with the last one */}
          {i === timelineStages.length - 1 && (
            <div>
              <div
                onClick={() => {
                  settimelineStages([
                    ...timelineStages,
                    { details: "", date: "" },
                  ]);
                }}
                className="inline-block border border-gray-300 w-fit p-1 cursor-pointer rounded-md mt-2 hover:border hover:border-gray-600 hover:text-gray-600"
              >
                Add Stage
              </div>
              {timelineStages.length > 1 && (
                <div
                  onClick={() => {
                    settimelineStages(
                      timelineStages.slice(0, timelineStages.length - 1)
                    );
                  }}
                  className="ml-2 inline-block border border-gray-300 w-fit p-1 cursor-pointer rounded-md mt-2 hover:border hover:border-red-600 hover:text-red-600"
                >
                  Remove
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    return tempArr;
  };

  // console.log(timelineStages);

  useEffect(() => {}, [specialClick]);

  return (
    <>
      <h1 className="text-[2rem] font-semibold text-blue-400 mb-5">
        Add New Property
      </h1>

      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
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
                  id="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
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
              id="locationDetails"
              onChange={formik.handleChange}
              value={formik.values.locationDetails}
              className={textFieldStyles()}
              rows="7"
            ></textarea>
          </div>
          <div className={outerStylesSingle() + " mb-10"}>
            <h1 className="text-gray-600 mb-2">Property Overview</h1>
            <textarea
              name="propertyOverview"
              id="propertyOverview"
              onChange={formik.handleChange}
              value={formik.values.propertyOverview}
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
                      featuresRadio.current.splice(index, 1, {
                        heading: "",
                        details: "",
                      });
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
                          <div className="flex flex-col">
                            <h1 className="text-gray-600 mb-2">
                              {features[index] + " Heading"}
                            </h1>
                            <input
                              type="text"
                              // name={nameProp}
                              // id={nameProp}
                              className={textFieldStyles()}
                              // value={formik.values.nameProp}
                              onChange={(e) => {
                                featuresRadio.current.splice(index, 1, {
                                  ...featuresRadio.current[index],
                                  heading: e.target.value,
                                });
                                setSpecialClick(!specialClick);
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col">
                            <h1 className="text-gray-600 mb-2">
                              {features[index] + " Details"}
                            </h1>
                            <input
                              type="text"
                              // name={nameProp}
                              // id={nameProp}
                              className={textFieldStyles()}
                              // value={formik.values.nameProp}
                              onChange={(e) => {
                                featuresRadio.current.splice(index, 1, {
                                  ...featuresRadio.current[index],
                                  details: e.target.value,
                                });
                                setSpecialClick(!specialClick);
                              }}
                            />
                          </div>
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
                    id="transactionCost"
                    onChange={formik.handleChange}
                    value={formik.values.transactionCost}
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
                    id="stakeFee"
                    onChange={formik.handleChange}
                    value={formik.values.stakeFee}
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
                    id="valueAppr"
                    onChange={formik.handleChange}
                    value={formik.values.valueAppr}
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
                    id="annualReturn"
                    onChange={formik.handleChange}
                    value={formik.values.annualReturn}
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
                  id="financialInfo"
                  value={formik.values.financialInfo}
                  onChange={formik.handleChange}
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

          <div className="w-full mt-20 relative flex flex-col items-center">
            {error && (
              <div className=" absolute bottom-[140%] font-semibold text-red-400 border border-red-400 text-xs p-2 rounded-md">
                {formik.errors[Object.keys(formik.errors)[0]]} and solve{" "}
                {Object.keys(formik.errors).length} errors. Please check the
                inputs and click...
              </div>
            )}
            <button
              formAction="submit"
              className="w-1/3 py-2 transition-transform rounded-md bg-lightGreen hover:bg-[#365584] text-white text-xl"
            >
              ADD PROPERTY
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
