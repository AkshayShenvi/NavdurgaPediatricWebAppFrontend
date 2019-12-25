import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  DayView,
  Appointments,
  Toolbar,
  ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Fragment } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import appointments from '../../../demo-data/today-appointments';

const style = theme => ({
  todayCell: {
    backgroundColor: fade(theme.palette.info.main, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.light, 0.14),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.info.dark, 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.secondary.main, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.04),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.secondary.dark, 0.04),
    },
  },
  today: {
    backgroundColor: fade(theme.palette.primary.dark, 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.secondary.dark, 0.06),
  },
});

const TimeTableCellBase = ({ classes, ...restProps }) => {
  const { startDate } = restProps;
  const date = new Date(startDate);
  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...restProps} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...restProps} className={classes.weekendCell} />;
  } return <WeekView.TimeTableCell {...restProps} />;
};

const TimeTableCell = withStyles(style, { name: 'TimeTableCell' })(TimeTableCellBase);

const DayScaleCellBase = ({ classes, ...restProps }) => {
  const { startDate, today } = restProps;
  if (today) {
    return <WeekView.DayScaleCell {...restProps} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...restProps} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...restProps} />;
};

const DayScaleCell = withStyles(style, { name: 'DayScaleCell' })(DayScaleCellBase);

// const ExternalViewSwitcher = ({
//   currentViewName,
//   onChange,
// }) => (
//   <RadioGroup
//     aria-label="Views"
//     style={{ flexDirection: 'row' }}
//     name="views"
//     value={currentViewName}
//     onChange={onChange}
//   >
//     <FormControlLabel value="WeekView" control={<Radio />} label="Week" />
//     <FormControlLabel value="DayView" control={<Radio />} label="Day" />
//     <FormControlLabel value="MonthView" control={<Radio />} label="Month" />
//   </RadioGroup>
// );

export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // data: appointments,
      currentViewName: 'Month',
      data:props.data
    };
    console.log(this.state.data)
    this.currentViewNameChange = (e) => {
      this.setState({ currentViewName: e.target.value });
    };
  }


  render() {
    const { data, currentViewName } = this.state;

    return (
      <Fragment>
        {/* <ExternalViewSwitcher
            currentViewName={currentViewName}
            onChange={this.currentViewNameChange}
          /> */}
        <Paper>
          <Scheduler
            data={data}
            height={600}
          >
            <ViewState />
            <DayView
            startDayHour={9}
            endDayHour={18}
          />
            <WeekView
              startDayHour={9}
              endDayHour={19}
              timeTableCellComponent={TimeTableCell}
              dayScaleCellComponent={DayScaleCell}
            />
            <MonthView />
            <Toolbar />
            <ViewSwitcher />
            <Appointments />
          </Scheduler>
        </Paper>
      </Fragment>
    );
  }
}
