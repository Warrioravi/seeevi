let initialState={
  name:"",
  summary:"",
  phone:"",
  email:"",
  city:"",
  github:"",
  skills:[],
  experience:[],
  education:[],
  projects:[],
  achievements:[]       
}

let detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default detailsReducer;