'use strict';

import React            from 'react';
import Helper           from '../../../utils/Helper';
import Actions          from '../../actions';
import Store            from '../../stores';
import connectToStores  from 'alt-utils/lib/connectToStores';

import { Row, Col, FormControl, Modal, Table, Button, Glyphicon } from 'react-bootstrap';


@connectToStores
export default class DevisComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      show: false,
      docType: 'DEVIS',
      gender : 'Monsieur',
      client: '',
      products: [],
      totalAmount: 0,
      discount: {
        percent: 0,
        amount: 0.00
      }
    };
  }

  static getStores () { return [Store] }

  static getPropsFromStores () { return Store.getState() }

  componentWillReceiveProps (nextProps) {
    let s = this.state, n = nextProps;
    if (n.show !== s.show) {
      this.calculateTotal(s.products);
      this.setState({show: n.show});
    }
    if (n.client !== s.client)
      this.setState({client: n.client})
    if (n.products !== s.products)
      this.setState({products: n.products}, this.calculateTotal(n.products))
  }

  calculateTotal = (products) => {
    let _products  = Object.assign([],products);
    products.map( (product,p) => {
      if (product.type) {
        switch (product.type) {
          case 'door':
            let _product          = Object.assign({},product)
              , fees              = Number(product.mainoeuvre) + Number(product.cover.price)
              , total = 0
              ;
            Helper.Components.map( (component,c) => {
              let componentUnitePrice = Number(Helper.componentUnitePrice(component,product[component]));
              total += componentUnitePrice * product[component].unity;
              _product[component].unite_price = componentUnitePrice * (1+product.margin); //(componentPrice * (1+product.margin)) + (fees/3);
            });
            _product.total = (total * (1+Number(_product.margin))) + fees;
            _products[p] = _product;
            this.setState({products:_products},this.updateAmountResults(_products));
          break;
        }
      }
    })
  }

  updateAmountResults = (products) => {
    console.log('updateAmountResults')
    let discount        = Object.assign({},this.state.discount)
      , total           = 0
      , discountAmount  = 0
      ;
    products.map( (product,p) => { total += product.total; });
    discountAmount = (total * discount.percent /100);
    discount.amount = discountAmount;
    this.setState({
      discount: discount,
      totalAmount: Number(total) - Number(discount.amount)
    });
  }

  discountHandler = (e) => {
    console.log('discount',e.target.value);
    let discount  = Object.assign({},this.state.discount)
      , percent   = e.target.value
      , total     = 0
      ;
    this.state.products.map( (product,p) => { total += product.total; });
    discount.percent = percent;
    discount.amount  = (total*percent/100);
    this.setState({
      discount: discount,
      totalAmount: Number(total) - Number(discount.amount)
    });
  }

  hide = () => {
    this.props.hideCallback()
    this.setState({show: false})
  }

  print () { window.print() }

  render () {
    console.log('invoice :',this.state)
    let {show, docType, gender, client, products, totalAmount, discount} = this.state;
    return (
      <Modal show={show} onHide={this.hide} id="invoice" className={docType+" container"}>
        <Modal.Body>
          <Row>
            <Col xs={12} className="text-right">
              Casablanca le : {Helper.getDate()}
            </Col>
            <Col xs={12} className="devis-number f24">
              <FormControl componentClass="select" value={docType} onChange={(e)=>this.setState({docType:e.target.value})} className="no-print optimize inline f24 w125">
                {
                // <option value="FACTURE">FACTURE</option>
                }
                <option value="DEVIS">DEVIS</option>
                </FormControl>
              <span className="print-inline f24">{docType}</span> N°: <input type="text" defaultValue="AC-092016"/>
            </Col>
            <Col xs={12} className="devis-client-name">
              <Col xs={2} xsOffset={3} className="text-right"><i>Client :</i></Col>
              <Col xs={7} className="client-name">{client||'Client Houdec'}</Col>
            </Col>
            <Col xs={12} className="introduction">
              <p>
                <FormControl componentClass="select" value={gender} onChange={(e)=>this.setState({gender:e.target.value})} className="no-print optimize f18 w100">
                  <option value="Monsieur">Monsieur</option>
                  <option value="Madame">Madame</option>
                  </FormControl>
                <i className="print-inline f18">{gender}</i>
              </p>
              <p>Nous avons le plaisir de vous communiquer notre offre de prix pour les articles suivants:</p>
            </Col>
            <Col xs={12}>
              <Table>
                <thead>
                  <tr>
                    <th width="30%">Désignation</th>
                    <th width="10%">Unité</th>
                    <th width="20%">P.U. H.T.</th>
                    <th width="20%">Mesure</th>
                    <th width="20%">MT H.T.</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map( (product,d) => {
                      switch (product.type) {
                        case 'door':
                          let sameWood = (product.panel.wood == product.frame.wood) && (product.panel.wood == product.jamb.wood) && (product.frame.wood == product.jamb.wood);
                          return ( Helper.Components.map( (component,c) => {
                            let {unity,length,width} = product[component];
                            return (
                              <tr key={c}>
                                { !c && <td rowSpan={3} style={{verticalAlign:'middle',textTransform:'uppercase'}}>{product.designation}</td> }
                                <td className="text-center">{unity}</td>
                                <td className="text-right bold">{(Number(product[component].unite_price)).toFixed(2)||0.00}</td>
                                <td className="text-center">{length}*{width}</td>
                                <td className="text-right bold">{(Number(product[component].unite_price)*unity).toFixed(2)||0.00}</td>
                              </tr>
                            )
                          }))
                        break;
                        default:
                          return <tr key={d}><td></td><td></td><td></td><td></td><td className="text-right bold">0,00</td></tr>;
                        break;
                      }
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td rowSpan={3} colSpan={2} className="td-indent"></td>
                    <td colSpan={2} className="text-center">TOTAL H.T</td>
                    <td className="text-right">{(Number(totalAmount)+Number(discount.amount)).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-center discount">
                      REMISE
                      <input className="no-print text-center" type="number" value={discount.percent} step="0.01" min="0" max="100" onChange={this.discountHandler}/>
                      <span className="print-inline text-center">{discount.percent}</span>
                      %
                    </td>
                    <td className="text-right">{Number(discount.amount).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-center">TOTAL</td>
                    <td className="text-right">{totalAmount.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            </Col>
            <Col xs={12} className="conclusion">
              <p>Nous restons à votre disposition pour toute information</p>
            </Col>
            <Col xs={12}>
              <div className="amount-in-words text-center">Arrêter le présent devis à la somme de : <span>{Helper.NumberToWords(Number((totalAmount+"").split('.')[0]))} Dirhams et {Helper.NumberToWords(Number((totalAmount.toFixed(2)+"").split('.')[1]))} CTS HT.</span></div>
            </Col>
            <Col xs={8} xsOffset={4} className="text-center signature"><small>Signature client</small></Col>
          </Row>
        </Modal.Body>
        <Button bsStyle="success" onClick={this.print} className="imprimer no-print"><Glyphicon glyph="print"/>Imprimer</Button>
      </Modal>
    )
  }

}
