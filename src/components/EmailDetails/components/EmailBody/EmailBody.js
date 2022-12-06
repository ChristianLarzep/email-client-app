import React from 'react';

const EmailBody = ( { from = {}, text, date } ) => {

    const blockName = "email-details__body";

    const getFormatedDate = function() {
        const NUMERIC_TYPE = "numeric";
        const DAYS_IF_WEEK = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

        let emailDate = new Date( date ),
            currentDate = new Date(),
            day = DAYS_IF_WEEK[ emailDate.getDay() ],
            formatOpts = { 
                 month: 'long', 
                 day: NUMERIC_TYPE,
                 hour: NUMERIC_TYPE, 
                 minute: NUMERIC_TYPE 
             };

            if ( currentDate.getFullYear() !== emailDate.getFullYear() ) {
                formatOpts.year = NUMERIC_TYPE;
            }

            return day + ", " + emailDate.toLocaleDateString( "en-US", formatOpts );
    };

    return (
        <div className={blockName}>
            <div className={`${blockName}-from`}>
                <div className={`${blockName}-from-alias`}>{ from.alias ? from.alias : null}</div>
                <div className={`${blockName}-from-email`}>{`<${from.email}>`}</div>
                <div className={`${blockName}-from-date`}>{getFormatedDate()}</div>
            </div>
            <div className={`${blockName}-text`}>{text}</div>
        </div>
    );
}

export default EmailBody;