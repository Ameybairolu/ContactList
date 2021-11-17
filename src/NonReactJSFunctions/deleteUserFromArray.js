const deleteUserFromArray = (id, obtainedData) => {
    const updatedData = obtainedData.filter(eachUser => {
        return eachUser.id !== id;
    });

    return updatedData;
}

export default deleteUserFromArray;