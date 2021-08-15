export const GET_EMPLOYEES = '@employeesManagement/GET_EMPLOYEES'
export const FAILED_EMPLOYEES = '@employeesManagement/FAILED_EMPLOYEES'
const initialState = {
  employee_list: [],
  errors: [],
};


const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES: {
      return {
        ...state,
        employee_list: action.employee_list
      };
     
    }

    case FAILED_EMPLOYEES: {
      console.errors('Failed get enployees')
      return {
        ...state,
        errors: state.errors.concat(action.errors),
      };
    }
    // case DELETE_TODO: {
    //   const { id } = action.payload
    //   return {
    //     ...state,
    //     todo_list: state.todo_list.filter((todo) => todo.id != id)
    //   };
    // }
    default:
      return state;
  }
};

export default reducers