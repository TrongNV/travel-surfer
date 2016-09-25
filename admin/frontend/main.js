'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import Routes       from './settings/Routes';
import { Provider } from "react-redux"
import store        from "./redux/store"

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('main'));
