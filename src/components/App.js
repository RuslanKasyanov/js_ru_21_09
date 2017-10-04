import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import moment from 'moment'

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css'


function isSelectingFirstDay(from, to, day) {
    const firstDayIsNotSelected = !from;
    const selectedDayIsBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const rangeIsSelected = from && to;
    return (
        firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected
    );
}

class App extends Component {
    state = {
        selected: null,
        username: '',
        from: null,
        to: null,
        enteredTo: null,

    };

    render() {
        const {articles} = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id,
        }));

        const {selected, username, from, to, enteredTo} = this.state;
        const modifiers = { start: from, end: enteredTo };
        const disabledDays = { before: this.state.from };
        const selectedDays = [from, { from, to: enteredTo }];


        return (
            <div>
                <h1>App name</h1>
                User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <div>
                    {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                    {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                    {from &&
                    to &&
                    <p>
                        You chose from
                        {' '}
                        {moment(from).format('L')}
                        {' '}
                        to
                        {' '}
                        {moment(enteredTo).format('L')}
                        .
                        {' '}
                        <a onClick={this.reset}>Reset</a>
                    </p>}
                    <DayPicker
                        className="Range"
                        numberOfMonths={2}
                        fromMonth={from}
                        fixedWeeks
                        selectedDays={selectedDays}
                        disabledDays={disabledDays}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}
                        onDayMouseEnter={this.handleDayMouseEnter}
                    />
                </div>
                <Select options={options} value={selected} onChange={this.handleChange} multi />
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected });

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        });

        this.setState({
            username: ev.target.value
        })
    };
    handleDayClick = day => {
        const { from, to } = this.state;

        if (from && to && day >= from && day <= to) {
            this.reset();
            return;
        }

        if (isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null,
            });
        } else {
            this.setState({
                to: day,
                enteredTo: day,
            });
        }
    };

    handleDayMouseEnter = day => {
        const { from, to } = this.state;

        if (!isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    };
    reset = () => {
        this.setState({
            from: null,
            to: null,
            enteredTo: null,
        });
    };


}

export default App