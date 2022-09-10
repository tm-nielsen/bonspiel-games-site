import React from 'react'

const Section = ({backgroundColor, component}) => {

    return <div style={{backgroundColor: {backgroundColor}}}>
        {component}
    </div>
}

export default Section