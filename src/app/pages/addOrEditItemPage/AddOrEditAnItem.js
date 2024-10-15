import React from 'react';

import Pages from '../../util/utilComponent/Pages'
import addOrEditItemPages from './AddOrEditItemPages';

const AddOrEditAnItem = (props) => {
    const client=props.client
    
  

    return (<div id='AddOrEditAnItemDiv'>
        <Pages pages={addOrEditItemPages(client)} />
    </div>
    )
}

export default AddOrEditAnItem