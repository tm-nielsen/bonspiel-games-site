import React from 'react'

const Section = ({component, backgroundColor}) => {

    return <div style={{backgroundColor: backgroundColor}}>
        {component}
    </div>
}

export default Section