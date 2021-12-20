import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import SurveySummary from './SurveySummary'

export default class SurveySummaryList extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <SurveySummary />
                </Accordion>
            </>
        )
    }
}
