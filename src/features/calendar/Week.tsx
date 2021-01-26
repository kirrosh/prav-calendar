import { add, setDay, startOfYear } from "date-fns"
import React from "react"
import styled from "styled-components"
import Day from "./Day"
import WeekNumber from "./WeekNumber"

const CellWrapper = styled.div`
  position: relative;
`
const CellContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`

export const CalendarRow = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(7, 2fr);
`

const Cell = styled.div`
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &:hover {
    background: red;
  }
`

const start = startOfYear(new Date(2021, 0, 1))
const getDate = (weeks: number, days: number) => {
  const newDate = setDay(
    add(start, {
      weeks,
    }),
    days,
    { weekStartsOn: 0 }
  )
  return newDate
}

const Week = ({ weekNumber }: { weekNumber: number }) => {
  return (
    <CalendarRow>
      {Array.from({ length: 8 }).map((_, i) => (
        <CellWrapper key={i}>
          <Cell />
          <CellContent>
            {i === 0 ? (
              <WeekNumber weekNumber={weekNumber + 1} />
            ) : (
              <Day date={getDate(weekNumber, i)} />
            )}
          </CellContent>
        </CellWrapper>
      ))}
    </CalendarRow>
  )
}

export default Week
