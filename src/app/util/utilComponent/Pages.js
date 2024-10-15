import React from 'react';

import { useState } from 'react'
import PagesView from './views/PagesView';
const Pages = (props) => {
    const pages = props.pages.sort((a, b) => (a.order - b.order))
    const [content, setContent] = useState(props.pages[0].name)
    return <PagesView pages={pages} onClick={setContent} content={content}/>
}


export default Pages