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

const Header = ({ type }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])

  const [openDate, setOpenDate] = useState(false)
  const [openOption, setOPenOption] = useState(false)
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    room: 1
  })

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1
      }
    })
  }

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

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Awsome
            </h1>
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
                <span
                  onClick={() => setOPenOption(!openOption)}
                  className="headerSearchText">{`${option.adults} adults. ${option.children} children. ${option.room} room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionContainerButton">
                        <button
                          disabled={option.adults <= 1}
                          onClick={() => handleOption("adults", "d")}
                          className="optionCounterButton">
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.adults}
                        </span>
                        <button
                          onClick={() => handleOption("adults", "i")}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionContainerButton">
                        <button
                          disabled={option.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="optionCounterButton">
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.children}
                        </span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionContainerButton">
                        <button
                          disabled={option.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="optionCounterButton">
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.room}
                        </span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
