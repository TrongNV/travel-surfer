const InitialState = {
  fetching: false,
  fetched: false,
  error: null,
  orders: []
};


export default function reducer(state=InitialState, action) {

    switch (action.type) {
      case "FETCH_ORDERS_PENDING": {
        return {...state, fetching: true, error: null}
      }
      case "FETCH_ORDERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ORDERS_FULFILLED": {
        return {...state, fetching: false, error: null, fetched: true, orders: action.payload}
      }
      case "UPDATE_ORDERS": {
        return {...state, orders: action.payload}
      }
    }
    return state

}
