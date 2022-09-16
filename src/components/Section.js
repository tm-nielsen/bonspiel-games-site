import React from 'react'

const Section = ({component, backgroundColor}) => {

    return <div style={{backgroundColor: backgroundColor}} className="section-parent">
        {component}
    </div>
}

export default Section