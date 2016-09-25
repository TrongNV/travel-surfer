import Request  from 'superagent';

const raw = 'http://localhost:8000' ;
const base = raw + '/api/';
const source = {
  orders: {
    get: base + 'orders',
    post: base + 'orders'
  }
};


export function fetchOrders (dispatch) {
  Request
    .get(source.orders.get)
    .end(function (err, res) {
      err ? dispatch({type: "FETCH_ORDERS_REJECTED",  payload: err})
          : dispatch({type: "FETCH_ORDERS_FULFILLED", payload: res.body})
    })
}
