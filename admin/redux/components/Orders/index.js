import React            from 'react';
import Spinner          from "react-spinkit";
import { connect }      from "react-redux";
import Toggle           from 'material-ui/Toggle';
import { Well, Button } from 'react-bootstrap';

import * as OrdersActions from "../../actions/ordersActions";
import OrdersTable        from "../Templates/ordersTable";


@connect((store) => { return {store:store} })
export default class OrdersComponent extends React.Component {

  constructor (props,context) {
    super(props,context);
    this.state = {
      orders: [],
      fetching: true,
      error: null
    };
  }

  static contextTypes = {
    styles: React.PropTypes.object
  }

  componentWillMount() {
    this.props.dispatch(OrdersActions.fetchOrders())
  }

  componentWillReceiveProps (nextProps) {
    let n = nextProps.store.orders
      , o = this.state;

    Object.keys(o).map( (s) => {
      if (n[s] !== o[s]) this.setState({ [s]: n[s] })
    })
  }

  statusHandler = (o,e,i,v) => {
    let orders = Object.assign([],this.state.orders);
    orders[o].status = v;
    this.setState({orders});
  }

  render () {

    let {orders} = this.state
      , {styles} = this.context
      , {statusHandler} = this
      ;

    if (this.state.fetching) return <Spinner spinnerName="double-bounce"/>

    return (
      <div className="orders-table-container">
        <Well>
          <div style={styles.Toggle.orders.block}>
            <Toggle label="orders without offers" defaultToggled={true}/>
          </div>
        </Well>
        <OrdersTable data={orders} statusHandler={statusHandler}/>
      </div>
    )
  }

}
