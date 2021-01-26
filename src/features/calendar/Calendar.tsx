import React from "react"
import styled from "styled-components/macro"
import Week from "./Week"
import WeekHeader from "./WeekHeader"

const Grid = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Layout = styled.div`
  position: relative;
  overflow-y: hidden;
  height: 100vh;
  display: grid;

  /* background-color: #1e1e1e; */
  background-color: #939597;
  color: #f5df4d;
`

const Header = styled.div`
  /* position: sticky; */
`
const Calendar = () => {
  return (
    <Layout>
      <Header>
        <WeekHeader />
      </Header>
      <Grid>
        {Array.from({ length: 53 }).map((_, i) => (
          <Week weekNumber={i} key={i} />
        ))}
      </Grid>
    </Layout>
  )
}

export default Calendar
