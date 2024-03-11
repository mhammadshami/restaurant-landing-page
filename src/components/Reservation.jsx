import React, { useState } from "react";
// import data
import { reservationData } from "../data";
// import date picker
import DatePicker from "react-datepicker";
// import datepicker css
import "react-datepicker/dist/react-datepicker.css";
// import timepicker
import TimePicker from "react-time-picker";
// import timepicker css
import "../timepicker.css";
// import icons
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn, staggerContainer } from "../variants";

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // data state
  const [startData, setStartData] = useState(new Date());
  // clock state
  const [value, setValue] = useState("10:00");

  return (
    <section className="bg-pink-300 relative top-96 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto"></div>
    </section>
  );
};

export default Reservation;
