import React from 'react';
import ReactDOM from 'react-dom';

import {TopHeader} from './components/app';

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    ReactDOM.render(<TopHeader />, document.getElementById('topHeader'))

});

