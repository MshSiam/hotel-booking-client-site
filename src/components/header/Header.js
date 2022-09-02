import {
  faCalendarDays,
  faPenToSquare,
  faUser
} from "@fortawesome/free-regular-svg-icons"
import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import css from "./header.css"
import { DateRange } from "react-date-range"
import { useState } from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { format } from "date-fns"

const Header = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])

  const [openDate, setOpenDate] = useState(false)
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    room: 1
  })

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        <h1 className="headerTitle">A lifetime of discounts? It's Awsome</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          laudantium cumque ullam nam. Quas corporis necessitatibus possimus
          aliquam magnam illo sit nemo provident, rem quod distinctio
          accusantium, beatae autem odit.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText">{`${format(
              state[0].startDate,
              "dd/MM/yyyy"
            )} to ${format(state[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                ranges={state}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUser} className="headerIcon" />
            <span className="headerSearchText">{`${option.adults} adults. ${option.children} children. ${option.room} room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adults</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">0</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
