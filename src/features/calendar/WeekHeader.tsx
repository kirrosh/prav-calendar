import styled from "styled-components/macro"
import { CalendarRow } from "./Week"

const Header = styled(CalendarRow)`
  border-bottom: 3px solid #f5df4d;
`

const WeekDay = styled.div`
  display: grid;
  place-items: center;
`

const WeekHeader = () => {
  return (
    <Header>
      {["№", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((w, i) => (
        <WeekDay key={i}>{w}</WeekDay>
      ))}
    </Header>
  )
}

export default WeekHeader
