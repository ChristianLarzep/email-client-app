import React from 'react';

import { useDispatch, useStore } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

import './../styles.scss';

const FilterItem = ( { icon, text, type } ) => {
    const blockName = "filters-item";
    const ACTIVE_SUFF = "__active";

    const dispatch = useDispatch(); 
    const { activeList } = useStore();

    const activateItem = function() {
        dispatch( { type: types.setActiveList, listName: type } ); 
    };

    return (
        <button className={ icon + " " + blockName + ( type === activeList ? ACTIVE_SUFF : "" ) } onClick={activateItem}>
          <i className={`${blockName}__icon-text`}></i>{text}
        </button>
        
    );
}

export default FilterItem;