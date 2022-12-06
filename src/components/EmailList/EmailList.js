import React ,{ useEffect, useState } from 'react';

import { useStore } from '../../store/StoreProvider';
import { EmailItem, Filters } from './../../components';

import { useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

import './styles.scss';

const EmailList = () => {
    const blockName = 'emails-list';
    const { emails, activeList } = useStore();
    const [ itemsAddedCount, setItemAddedCount ] = useState( 1 );
    const dispatch = useDispatch();

    useEffect( () => {
        setTimeout( () => {

            setItemAddedCount( itemsAddedCount + 1 );

            dispatch( { type: types.addEmail, itemNum: itemsAddedCount } );

        }, 90000 );
    },[ dispatch, itemsAddedCount ] );

    // https://css-tricks.com/scrollbars-on-hover/
    // https://ishadeed.com/article/custom-scrollbars-css/
    return (
        <div className={blockName}>
            <Filters />
            <ul>
            {
                emails
                    .filter( item => item.listId === activeList )
                    .map( ( email, index )=> {
                        return <EmailItem  
                            id={email.id}
                            from={email.from} 
                            date={email.date} 
                            subject={email.subject} 
                            body={email.body} 
                            isSelected={email.isSelected}
                            isReaded={email.isReaded}
                            key={index} />
                } )
            }
            </ul>
        </div>
    );
}

export default EmailList;