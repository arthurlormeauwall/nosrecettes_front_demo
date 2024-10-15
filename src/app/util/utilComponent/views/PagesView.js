import React from 'react';

const PagesView = (props) => {
    const content = props.content
    const pages = props.pages
    const page = props.pages.filter(page => page.name == content)[0]
    const Component = page.component
    const onClick = props.onClick

    return (<div>{pages.map((page) => <button onClick={() => onClick(page.name)}> {page.name} </button>)}
        <br />
        <br />
        <Component {...page.propsToPass} />
    </div>)
}


export default PagesView