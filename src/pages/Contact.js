import React from 'react'

export default class Contact extends React.Component {
    render(){

        return(
            <div>
                <p>Phone Number: <a href='tel:+6783140072'>(678) 314-0072</a></p>
                <p>E-Mail: <a href='mailto:scott@rdcustom.org'>Scott@rdcustom.org</a></p>
                <p></p>
            </div>
        )
    }
}