import { getYear, format, getMonth, addWeeks, addDays, getDay } from "date-fns"
import styled from "styled-components/macro"

const StyledDay = styled.div<{ isOnEdge: boolean; lastDay: boolean }>`
  width: ${({ lastDay }) => (lastDay ? "calc(100% + 5px)" : "100%")};
  height: 100%;

  display: grid;
  place-items: center;
  border-bottom: 3px solid ${({ isOnEdge }) => (isOnEdge ? "#F5DF4D" : "none")};
  border-right: 3px solid ${({ lastDay }) => (lastDay ? "#F5DF4D" : "none")};
  box-sizing: border-box;
`

const Day = ({ date }: { date: Date }) => {
  const displayDate = getYear(date) === 2021 ? format(date, "d") : ""

  const isOnEdge = getMonth(date) !== getMonth(addWeeks(date, 1))
  const lastDay =
    getDay(date) !== 0 && getMonth(date) !== getMonth(addDays(date, 1))
  return (
    <StyledDay isOnEdge={isOnEdge} lastDay={lastDay}>
      {displayDate}
    </StyledDay>
  )
}

export default Day
