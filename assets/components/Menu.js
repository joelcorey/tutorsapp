import React from 'react';

import MenuItem from "./MenuItem";

export default function Menu(props) {
    console.log(props)
    return(
        <>
            <MenuItem answer='Addition' handleMenuClick={props.handleMenuClick} />
            <MenuItem answer='Subtraction' handleMenuClick={props.handleMenuClick} />
        </>
    );

}