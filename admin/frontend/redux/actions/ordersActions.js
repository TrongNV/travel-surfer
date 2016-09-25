import * as Api from '../services';


export function fetchOrders() {
  return (dispatch) => {
    dispatch({type: "FETCH_ORDERS_PENDING", payload: Api.fetchOrders(dispatch)})
  }
}

export function updateOrders(orders) {
  return (dispatch) => {
    dispatch({type: "UPDATE_ORDERS", payload: orders})
  }
}
