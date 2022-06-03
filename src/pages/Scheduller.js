import { useParams } from "react-router-dom";
import * as React from 'react';

import { ViewState, EditingState, AppointmentTooltip, AppointmentForm, IntegratedEditing, ConfirmationDialog } from '@devexpress/dx-react-scheduler';
//import Button from "@material-ui/core/Button";
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
    ViewSwitcher,
    Toolbar,
    DragDropProvider,
    EditRecurrenceMenu,
  } from '@devexpress/dx-react-scheduler-material-ui';
  import { ContactSupportOutlined, SettingsInputAntennaTwoTone, Today } from '@mui/icons-material/';
  
 // import { appointments } from 'src/pages/calendario/appointments.js';
import { Paper } from "@mui/material";
   
function Scheduller(){

    
    
    let params = useParams();


    console.log(params.val1,"??")
    var garlopa = [params.val1]

    const [datac, setDatac ] =React.useState(
      params.val1
    )
    const handleClick =() => {
      
      setDatac([ {
        
          title: 'Regado',
          startDate: new Date(2021, 5, 25, 9, 35),
          endDate: new Date(2021, 5, 25, 11, 30),
          id: 1,
          rRule: 'FREQ=DAILY;INTERVAL=3;COUNT=99',
          exDate: '20180628T063500Z,20180626T063500Z',
          }
          ])
      console.log(datac,"datac")  
        }

    const commitChanges =(datac) => {setDatac([{appointments: "FREQ=DAILY;INTERVAL=1;COUNT=99"}])
   console.log("tuvieja")};
     
  
 
      
   



    

    return(
    



    
     <Paper>
     
     
     <Scheduler
   

       data={datac}
      
     >

     
       <ViewState
         defaultCurrentDate={Today}
       />
        <EditingState
         onCommitChanges= {commitChanges}
       />
       <IntegratedEditing />
       
       <WeekView
         startDayHour={9}
         endDayHour={15}
       />
       <MonthView />
       <ConfirmationDialog />
       <Appointments />
       <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
       
       <AppointmentForm />
       <Toolbar />
       <ViewSwitcher />

       <EditRecurrenceMenu />

       <DragDropProvider />
     
     </Scheduler>
   </Paper>
   
 
  
    
    
    )
}

export default Scheduller;