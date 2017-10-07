import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {changeDate, filterDateArticle} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }
    handleDayClick = (day) => {
        const rangeModifier = DateUtils.addDayToRange(day, { from: this.props.from, to: this.props.to});
        const actionChangeDate = changeDate( rangeModifier );
        const actionFilterDateArticle = filterDateArticle( rangeModifier );
        this.props.dispatch(actionChangeDate);
        this.props.dispatch(actionFilterDateArticle);
    }

}

const mapStateToProps = (state) => (state.changeDate);
export default connect(mapStateToProps)(DateRange);