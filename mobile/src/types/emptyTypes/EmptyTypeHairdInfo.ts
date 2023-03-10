export interface EmptyTypeHairdInfo{
  _id:'';
  hairdName: '',
  hairdPassword:'',
  email:'',
  address:'',
  prices:{
    hairPrice:'',
    beardPrice:''
  },
  workDaysWeek: {
    SEG:false,
    TER:false,
    QUA:false,
    QUI:false,
    SEX:false,
    SAB:false,
    DOM:false,
  };
  workingTime:{
    open:{
      hour:0,
      minute:0
    },
    close:{
      hour:0,
      minute:0
    }
  }
}
