import { getYear, format, getMonth, addWeeks, addDays, getDay } from "date-fns"
import styled from "styled-components/macro"
import { useAtom } from "jotai"
import { calendarHoverAtom } from "./calendarAtoms"

type StylesProps = {
  isOnEdge: boolean
  lastDay: boolean
}

const StyledDay = styled.div<StylesProps>`
  /* width: ${({ lastDay }) => (lastDay ? "calc(100% + 5px)" : "100%")}; */
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  border-bottom: 3px solid ${({ isOnEdge }) => (isOnEdge ? "#F5DF4D" : "none")};
  border-right: 3px solid ${({ lastDay }) => (lastDay ? "#F5DF4D" : "none")};

  box-sizing: border-box;
`

const InnerDay = styled.div<{ dark: boolean; night: boolean }>`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  background-color: ${({ night }) => (night ? "black" : "transparent")};
  color: ${({ night }) => (night ? "#6d6f71" : "inherit")};
  transition: 0.5s ease-out;
`

type Props = {
  date: Date
  x: number
  y: number
}

const Day = ({ date, x, y }: Props) => {
  const [hoveredDay, setHoveredDay] = useAtom(calendarHoverAtom)

  const onClick = () => {
    if (hoveredDay?.x === x && hoveredDay?.y === y) {
      setHoveredDay(null)
    } else {
      setHoveredDay({ x, y })
    }
  }
  const dark = hoveredDay?.x === x || hoveredDay?.y === y
  const night = !!(hoveredDay && hoveredDay.x !== x && hoveredDay.y !== y)
  const displayDate = getYear(date) === 2021 ? format(date, "d") : ""
  const isOnEdge = getMonth(date) !== getMonth(addWeeks(date, 1))
  const lastDay =
    getDay(date) !== 0 && getMonth(date) !== getMonth(addDays(date, 1))
  return (
    <StyledDay isOnEdge={isOnEdge} lastDay={lastDay} onClick={onClick}>
      <InnerDay dark={dark} night={night}>
        {displayDate}
      </InnerDay>
    </StyledDay>
  )
}

export default Day
