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
import moment from 'moment';

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




const allowDrag = () => { return true };
const appointmentComponent = (props) => {
  if (allowDrag) {
    return <Appointments.Appointment {...props} />;
  }

}

const appointmentFormChildren = () => { }

// const convertMonth=(m)=>{
//   var month = new Array();
//   month[0] = "01";
//   month[1] = "02";
//   month[2] = "03";
//   month[3] = "04";
//   month[4] = "05";
//   month[5] = "06";
//   month[6] = "07";
//   month[7] = "08";
//   month[8] = "09";
//   month[9] = "10";
//   month[10] = "11";
//   month[11] = "12";
//   return month[m.getMonth()]
// }
// const convertDay=(day)=>{
//   if (day.length<2){
//       return "0"+day;
//   }
//   else{
//       return day;
//   }
// }

export default class Calendar extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.pdata,
      currentDate: new Date(),
      currentView: "Day",
      range: this.getRange(new Date(), "Day")

    };

  }

  getRange = (date, view) => {
    
    if (view === "Day") {
      
      var tomorrow=new Date(date);
      tomorrow.setDate(tomorrow.getDate()+1);
      return {  startDate: moment(date).format('YYYY-MM-DD'),//String(date.getFullYear())+"-"+String(convertMonth(date))+"-"+convertDay(String(date  .getDate())), 
                endDate: moment(date).add(1,'days').format('YYYY-MM-DD')//String(tomorrow.getFullYear())+"-"+String(convertMonth(tomorrow))+"-"+convertDay(String(tomorrow.getDate())) 
              };
    }
    if (view === "Week") {
      let firstDay = moment(date).startOf('week');//date.getDate() - date.getDay();
      let lastDay = moment(date).endOf('week');//firstDay + 6;
      //console.log("Calendar ")
      //console.log(typeof firstDay.format('YYYY-MM-DD'),lastDay.format('YYYY-MM-DD'))
      return {
        startDate: firstDay.format('YYYY-MM-DD'),//new Date(date.setDate(firstDay)),
        endDate: lastDay.format('YYYY-MM-DD')//new Date(date.setDate(lastDay))
      };
    }
    if(view==="Month"){
      return{
        startDate: moment(date).startOf('month').format('YYYY-MM-DD'),
        endDate: moment(date).endOf('month').format('YYYY-MM-DD')
      }
    }
  };

  currentViewChange = currentView => {
    let currentDate = this.state.currentDate;
    // console.log("Current Date")
    // console.log(currentDate)
    let range = this.getRange(currentDate, currentView);
    this.setState({
      currentView,
      range
    });
    this.props.getDatesAndView(range,currentView)
    // alert(range.startDate+"-"+range.endDate);
    // alert(currentView);
    // console.log(range);
  };

  currentDateChange = currentDate => {
    console.log(currentDate);
    let currentView = this.state.currentView;
    let range = this.getRange(currentDate, currentView);
    this.setState({
      currentDate,
      range
    });
    this.props.getDatesAndView(range,currentView)
    // alert(currentDate);
    // alert(currentView);
    // console.log(range);
  };

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
    const { data, currentDate, currentView } = this.state;

    return (
      <Fragment>
        
        <Paper >
          

          <Scheduler
            height={'auto'}
            data={data}
          >

            <ViewState
              currentDate={currentDate}
              currentView={currentView}
              onCurrentDateChange={this.currentDateChange}
              onCurrentViewNameChange={this.currentViewChange} />

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
