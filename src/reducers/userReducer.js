const userReducer=(state={} , action) => {
    switch(action.type){
      case "change_name" :{
        state = {...state,name:action.payload }
        break;
      }
      case "change_age" :{
        state = {...state,age:action.payload }
        break;
      }
      case "get_data" :{
        state = {...state,data:action.payload }
        break;
      }
      default:{
        return state;
      }
    }
    return state;
  };

  export default userReducer;