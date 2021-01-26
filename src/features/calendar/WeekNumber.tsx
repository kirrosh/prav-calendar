import { getMonth, addWeeks, setWeek } from "date-fns"
import styled from "styled-components/macro"

const StyledWeekNumber = styled.div<{ isisOnEdge: boolean }>`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  border-bottom: 3px solid
    ${({ isisOnEdge }) => (isisOnEdge ? "#F5DF4D" : "none")};
  border-right: 3px solid #f5df4d;
  box-sizing: border-box;
`

type Props = {
  weekNumber: number
}

const WeekNumber = ({ weekNumber }: Props) => {
  const date = new Date(2020, 11, 28)
  const isisOnEdge =
    getMonth(setWeek(date, weekNumber, { weekStartsOn: 0 })) !==
    getMonth(setWeek(date, weekNumber + 1, { weekStartsOn: 1 }))
  return (
    <StyledWeekNumber isisOnEdge={isisOnEdge}>{weekNumber}</StyledWeekNumber>
  )
}

export default WeekNumber
