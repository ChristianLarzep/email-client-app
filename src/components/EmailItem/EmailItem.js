import React from 'react';

import { types } from '../../store/StoreReducer';
import { useDispatch } from '../../store/StoreProvider';

import './styles.scss';

const EmailItem = ( { id, from, date, subject, body, isSelected, isReaded } ) => {
    const blockName = 'email-item';
    
    const dispatch = useDispatch(); // To execute an action or change on the state we only have to provide the action name ( or type name )
                                    // and any additional required argument 

    const selectItem = function() {
        dispatch( { type: types.selectEmail, id: id } );
    };

    const getFormatedDate = function() {
        const dateOrder = 'en-US',
              numericFormat = 'numeric';

        let emailDate = new Date( date ),
            currentDate = new Date(),
            dayYear = emailDate.toLocaleDateString( dateOrder, { year: numericFormat, month: 'short', day: numericFormat } ).split( "," ),
            currentYear = currentDate.toLocaleDateString( dateOrder, { year: numericFormat } );

        return dayYear[ 0 ] + ( currentYear.trim() !== dayYear[ 1 ].trim() ? dayYear[ 1 ] : "" );
    };
  
    return (       
        <li className={ isSelected ?`${blockName}__selected` : `${blockName}` } onClick={selectItem} >
          <div className={`${blockName}__status`}>
            <div className={ !isReaded ? `${blockName}__new` : "" }></div>
          </div>
          <div className={`${blockName}__overview`}>
            <div className={`${blockName}__sender`}>
              <span className= {`${blockName}__sender-icon fa fa-user-circle-o`}></span>
              <div className={`${blockName}__sender-address`}>{from.email}</div>
              <div className={`${blockName}__date`}>{getFormatedDate()}</div>
            </div>
            <div className={`${blockName}__subject`}>{subject}</div>
            <div className={`${blockName}__body`}>{body.substring(0,44)}...</div>
          </div>
        </li>
    );
}

export default EmailItem;