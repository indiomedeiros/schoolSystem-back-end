export const handleDuplicateEntry = (errorMessage: string, column: string) => {
    let message: string = errorMessage;
    if ( errorMessage.includes("Duplicate entry") ) {
        message = `${column} já existe`;
    };

    return message;
};