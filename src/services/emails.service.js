const getEmailsData = async () => {
    let data = await fetch( 'mail-data.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    } );

    return await data.json();
};

export { getEmailsData };