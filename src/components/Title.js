import React from 'react'

function Title({title, span}) {
    return (
        <div className="title">
            <div className="Title">
                <h3> {title} </h3>
            </div>
            <span className="pagetext">{span}</span>
        </div>
    )
}

export default Title
