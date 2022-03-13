const initialState = {
    test: 'hello',
    data: [],
    syncData: [],
  }
  
  export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_REDUX':
            return {...state, test: 'goodbay'}
        case 'TEST_REDUCE/GET_TEST_SAGA':
            return {...state, data: action.payload.payload}   
        case 'TEST_REDUCE/TEST_REDUX':
            console.log(action);
            return {...state, syncData: action.payload}   
        default: return state
    }
}