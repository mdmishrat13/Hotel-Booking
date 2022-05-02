import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleChange=(name,operation)=>{
    setOptions(prev=>{return{
      ...prev, [name]: operation==='i'? options[name]+1: options[name]-1
    }})
   
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className={type=='hotels'?"h-container hotels-mode":'h-container'}>
        <div className="h-list">
          <div className="h-list-items active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="h-list-items">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="h-list-items">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="h-list-items">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="h-list-items">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
          <div className="h-list-items">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
        </div>
        {type !=='hotels'&&<>
        <h1 className="h-title"> A lifeTime of Discount? Its genious</h1>
        <p className="h-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ipsam
          quaerat?
        </p>
        <button className="h-button">Login / Signup</button>
        <div className="h-search">
          <div className="h-search-item">
            <FontAwesomeIcon icon={faBed} className="h-icon" />
            <input
              type="text"
              className="h-search-input"
              placeholder="Where are you going?"
            />
          </div>
          <div className="h-search-item">
            <FontAwesomeIcon icon={faCalendarDay} className="h-icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="h-search-text"
            >
              {" "}
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}{" "}
            </span>
            {openDate && (
              <DateRange
                className="date"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="h-search-item">
            <FontAwesomeIcon icon={faPerson} className="h-icon" />
            <span onClick={()=>{setOpenOptions(!openOptions)}} className="h-search-text">
              {`${options.adult} Adult, ${options.children} Children, ${options.room} Room`}{" "}
            </span>
            {openOptions&&<>
              <div className="options">
              <div className="option-items">
                <span className="option-text">Adult</span>
                <div className="option-actions">
                  <button disabled= {options.adult<=1} onClick={()=>handleChange("adult","d")} className="option-update-button"> - </button>
                  <span className="option-update-number">{options.adult}</span>
                  <button onClick={()=>handleChange("adult","i")} className="option-update-button"> + </button>
                </div>
              </div>
              <div className="option-items">
                <span className="option-text">Children</span>
                <div className="option-actions">
                  <button disabled= {options.children<=0} onClick={()=>handleChange("children","d")} className="option-update-button"> - </button>
                  <span className="option-update-number">
                    {options.children}
                  </span>
                  <button onClick={()=>handleChange("children","i")} className="option-update-button"> + </button>
                </div>
              </div>
              <div className="option-items">
                <span className="option-text">Room</span>
                <div className="option-actions">
                  <button disabled= {options.room<=1} onClick={()=>handleChange("room","d")} className="option-update-button"> - </button>
                  <span className="option-update-number">{options.room}</span>
                  <button onClick={()=>handleChange("room","i")} className="option-update-button"> + </button>
                </div>
              </div>
            </div></>}
          </div>
          <div className="h-search-item">
            <button className="h-button">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
