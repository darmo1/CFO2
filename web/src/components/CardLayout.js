import React from 'react'

const CardLayout = (props) => {
    return (
        <div className="container container--green p-2">
                {props.children}
        </div>
    )
}

export default CardLayout
