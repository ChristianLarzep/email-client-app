const types = { // Actions 
    addEmail: "ADD_EMAIL",
    setEmailsList: 'SET_EMAILS_LIST',
    unmarkAsRead: 'UNMARK_AS_READ',
    selectEmail: 'SELECT_EMAIL',
    setParentList: 'SET_PARENT_LIST',
    setActiveList: 'SET_ACTIVE_LIST'
};

const initialStore = {
    emails: [],
    openedEmail: null,
    activeList: "INBOX"
};

const storeReducer = ( state, action ) => {
    switch( action.type ) {
        case types.addEmail:
            return {
                ...state,
                emails: [ 
                    {
                        id: ( action.itemNum + 10 ) * 1000,
                        from: { 
                          email: "mhallatt0@walmart.com",
                          alias: "Henry Cavill" 
                        },
                        to: "cziem0@surveymonkey.com",
                        subject: "Office Assistant IV ( New email " + action.itemNum + " )",
                        body: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
                        date: "03/29/2022 03:24:00",
                        isReaded: false,
                        isSelected: false,
                        listId: "INBOX",
                        avatar: "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
                        tag: "Indigo",
                        attachements: [
                          {
                            file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
                            name: "ut_nulla_sed.jpeg"
                          }
                        ]
                    }, ...state.emails ]
            };

        case types.setEmailsList:
            return { 
                ...state,
                emails: action.emails
            };

        case types.unmarkAsRead: 

            return { 
                ...state,
                emails: state.emails.map( email => {
                    let lEmail = { ...email };

                    if (  lEmail.id === action.id ) {
                        lEmail.isReaded = false;
                    }

                    return email;
                } )
            };

        case types.selectEmail: 

            return {
                ...state,
                openedEmail: action.id,
                emails: state.emails.map( email => {
                    let lEmail = { ...email },
                        isTargetEmail = lEmail.id === action.id;

                    lEmail.isSelected = isTargetEmail;

                    if ( isTargetEmail ) {
                        lEmail.isReaded = true;
                    }

                    return lEmail;
                } )
            }

        case types.setParentList: 

            return { 
                ...state,
                emails: state.emails.map( email => {
                    let lEmail = { ...email };

                    if (  lEmail.id === action.id ) {
                        lEmail.listId = action.listId;
                    }

                    return lEmail;
                } )
            };
        
        case types.setActiveList:
            return { 
                ...state,
                activeList: action.listName
            };

        default: 
            return state;
    }
}

export { types, initialStore };
export default storeReducer;