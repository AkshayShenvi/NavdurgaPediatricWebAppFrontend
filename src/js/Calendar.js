import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  DayView,
  Appointments,
  DragDropProvider,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  Toolbar,
  AppointmentForm,
  ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Fragment } from 'react';
import 'tachyons';

// Calendaar Styling
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



// const FormLayout=()=>{
//   return(

//     <AppointmentForm.BasicLayout>


//     </AppointmentForm.BasicLayout>

//   )}

const today = new Date();
// const allowDrag=({id})=>{

// }
const allowDrag = () => { return true };
const appointmentComponent = (props) => {
  if (allowDrag) {
    return <Appointments.Appointment {...props} />;
  }

}

const appointmentFormChildren = () => { }


export default class Calendar extends React.PureComponent {

  constructor(props) {
    var today = new Date();
    super(props);

    this.state = {
      data: this.props.pdata,
      currentViewName: 'Month',

      currentDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    };
  }


  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      var { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        console.log(data)
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });


  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <Fragment>
        {/* {console.log(this.state.data)} */}
        <Paper >
          {/* <div className="pa4 br3 shadow-5 ">
            {'Calendar Component Loads Properly'}
          </div> */}

          <Scheduler
            height={'auto'}
            data={data}
          >

            <ViewState
              defaultCurrentDate={currentDate} />
            <EditingState
              onCommitChanges={this.commitChanges}
            />
            <IntegratedEditing />
            <DayView
              startDayHour={6}
              endDayHour={22}

            />
            <WeekView
              startDayHour={6}
              endDayHour={22}
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher
              defaultCurrentDate={currentDate} />
            <Appointments
              appointmentComponent={appointmentComponent}
            />
            <AppointmentTooltip
              showCloseButton
              showOpenButton
            />
            <DragDropProvider
              allowDrag={allowDrag}
            />
            <AppointmentForm
            />
          </Scheduler>
        </Paper>
      </Fragment>
    );
  }
}
