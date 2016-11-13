import Request  from 'superagent';

import Resources from './Resources';


export function fetchOrders (dispatch) {
  Request
    .get(Resources.orders)
    .end(function (err, res) {
      err ? dispatch({type: "FETCH_ORDERS_REJECTED",  payload: err})
          : dispatch({type: "FETCH_ORDERS_FULFILLED", payload: res.body})
    })
}
