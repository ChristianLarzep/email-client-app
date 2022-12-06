import React from 'react';

import FilterItem from './FilterItem/FilterItem';

import './styles.scss';

const Filters = () => {

    const blockName = "filters";

    return (
        <div className={blockName}>
          <FilterItem icon="fa fa-circle" text="Inbox" type="INBOX" />
          <FilterItem icon="fa fa-trash-o" text="Trash" type="TRASH" />
          <FilterItem icon="fa fa-square" text="Spam" type="SPAM" />
        </div>
    );
}

export default Filters;