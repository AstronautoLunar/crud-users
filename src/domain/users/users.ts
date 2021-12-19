const buildMakeUsers = ({ id, validator }) => ({
    id,
    name,
    lastName,
    age
}) => {
    const { error } = validator({
        id,
        name,
        lastName,
        age
    });
    if(error) throw new Error(error);

    return Object.freeze({
        getId: () => id,
        getName: () => name,
        getLastName: () => lastName,
        getAge: () => age
    })
}

export default buildMakeUsers;