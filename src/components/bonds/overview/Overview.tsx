import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Charts } from './charts/Charts'
import Trades from './trades/Trades'
import { Events } from './events/Events'
import BondsWrapper from '../BondsWrapper'
import styled from 'styled-components'

const BondsHomeSectionNav = styled.div`
  padding: 1rem;
  margin-left: 1.875rem;
  a {
    font-weight: normal;
    font-size: 1.1875rem;
    text-transform: uppercase;
    text-decoration: none;

    color: #ffffff;
    padding: 0.25rem 1.5rem;
    &.active {
      color: #87def6;
    }
    &:hover {
      text-decoration: none;
      color: #87def6;
    }
  }
`

export class Overview extends Component {
  render(): JSX.Element {
    return (
      <BondsWrapper>
        <div className="BondsWrapper_panel">
          <BondsHomeSectionNav>
            <NavLink to="/bonds" exact>
              Charts
            </NavLink>
            <NavLink to="/bonds/overview/trades">Trades</NavLink>
            <NavLink to="/bonds/overview/events">Events</NavLink>
          </BondsHomeSectionNav>

          <Route
            exact
            path={['/bonds/overview/charts', '/bonds/overview/', '/bonds']}
            component={Charts}
          />
          <Route exact path="/bonds/overview/trades" component={Trades} />
          <Route exact path="/bonds/overview/events" component={Events} />
        </div>
      </BondsWrapper>
    )
  }
}