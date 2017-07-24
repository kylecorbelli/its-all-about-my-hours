import * as React from 'react'
import './HoursResults.css'
import { Link } from 'react-router-dom'

const HoursResults = (): JSX.Element => (
  <div className="HoursResults">
    Hours Results
    <Link to="/">Recalculate</Link>
  </div>
)

export default HoursResults
