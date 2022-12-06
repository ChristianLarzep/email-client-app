import React, { useState, useEffect } from 'react';

import { useStore } from '../../store/StoreProvider';
import EmailBody from './components/EmailBody/EmailBody';
import EmailHead from './components/EmailHead/EmailHead';

import "./styles.scss";

const EmailDetails = () => {

    const blockName = "email-details";
    const [ email, setEmail ] = useState();
    const { openedEmail, emails } = useStore();

    const EmailContent = function() {
        if ( openedEmail ) {
            return <div className={`${blockName}__content`}>
                <EmailHead subject={email.subject} emailId={email.id}></EmailHead>
                <EmailBody from={email.from} text={email.body} date={email.date}/>
            </div>;
        } else {
            return <div className={`${blockName}__empty`}></div>;
        }
    };

    useEffect( () => { 
        let lEmail = emails.find( em => em.id === openedEmail );

        setEmail( !!lEmail ? lEmail : {} );
    }, [ openedEmail, emails ] );

    return (
        <div className={blockName}>
            <EmailContent />
        </div>
    );
}

export default EmailDetails;