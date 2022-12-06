import React from 'react';
import { useDispatch } from '../../../../store/StoreProvider';
import { types } from '../../../../store/StoreReducer';

const EmailHead = ( { subject, emailId } ) => {

    const blockName = "email-details__head";
    const dispatch = useDispatch();

    const activateList = function( type ) {
        dispatch( { type: types.setActiveList, listName: type } ); 
        dispatch( { type: types.setParentList, id: emailId, listId: type } ); 
    };

    return (
        <div className={blockName}>
            <div className={`${blockName}-subject`}>{subject}</div>
            <div className={`${blockName}-actions`}>
                <button title='Move To Inbox'><i className="fa fa-circle" onClick={ () => activateList( "INBOX" ) }></i></button>
                <button title='Move To Trash'><i className="fa fa-trash-o" onClick={ () => activateList( "TRASH" ) }></i></button>
                <button title='Move To Spam'><i className="fa fa-square" onClick={ () => activateList( "SPAM" ) }></i></button>
            </div>
        </div>
    );
}

export default EmailHead;