import React from 'react';


import nosRecettesClient from '../../util/NosRecettesClient.js';
import Pages from '../../util/utilComponent/Pages.js';
import mainPages from './MainPages.js';

const MainController = (props) => {

  const client = nosRecettesClient

  return (<div id='mainDiv'>
    <Pages pages={mainPages(client)} />
  </div>
  )

}

export default MainController