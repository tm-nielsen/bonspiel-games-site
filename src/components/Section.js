import React from 'react'

const Section = ({children, id}) => {

    return <div className="section" id={id}>
        {children}
    </div>
}

export default Section