import React        from 'react';
import SelectField  from 'material-ui/SelectField';
import MenuItem     from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton   from 'material-ui/FlatButton';
import Badge        from 'material-ui/Badge';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


export default class TableComponent extends React.Component {

  static contextTypes = {
    structure: React.PropTypes.object,
    styles: React.PropTypes.object
  }

  addOffer (o) {
    console.log('offer N°', o)
  }

  render () {

    let {data,statusHandler}    = this.props
      , {structure,styles}      = this.context
      , {addOffer}              = this
      , T                       = structure.orders.table
      ;

    return (
      <Table className="orders-table" height={window.innerHeight-200+'px'}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            {
              T.thead.map( ({title}, c) => {
                return <TableHeaderColumn key={c}>{title}</TableHeaderColumn>
              })
            }
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            data.map( (order,o) => {
              return <TableRow key={o}>
                {
                  T.thead.map( ({name,func}, c) => {
                    let v = func ? func(order[name]) : order[name];
                    console.log(name,v)
                    switch (name) {
                      case 'status' :
                        return <TableRowColumn key={c}>
                          <SelectField
                              value={v}
                              autoWidth={true}
                              className="status-select"
                              iconStyle={styles.Status.icon}
                              style={styles.Status.label}
                              onChange={statusHandler.bind(this,o)}
                              underlineStyle={styles.Status.underline}>
                            <MenuItem value="open" primaryText="open" />
                            <MenuItem value="prog" primaryText="in progress" />
                            <MenuItem value="clos" primaryText="closed" />
                          </SelectField>
                        </TableRowColumn>
                        break;
                      case 'offers' :
                        return <TableRowColumn key={c}>
                          <FlatButton label="offer" primary={true} onClick={addOffer.bind(null,o)}/> {v}
                        </TableRowColumn>
                        break;
                      default : return <TableRowColumn key={c}>{v}</TableRowColumn>
                    }
                  })
                }
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    )
  }

}
