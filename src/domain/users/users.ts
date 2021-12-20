interface BuildMakeUsersProps {
    Id: IdProps;
    validator: validatorProps;
}

type IdProps = {
    make: () => string;
}

type validatorProps = 
    ({ 
        id, 
        name, 
        lastName, 
        age 
    }:UserProps) => ReturnValidator;

interface UserProps {
    id: string;
    name: string;
    lastName: string;
    age: number;
}

interface ReturnValidator {
    messageError: string;
    passed: boolean;
}

const buildMakeUsers = ({ 
    Id, 
    validator 
}:BuildMakeUsersProps) => ({
    id,
    name,
    lastName,
    age
}: UserProps) => {
    const { 
        messageError, 
        passed 
    } = validator({
        id: Id.make(),
        name,
        lastName,
        age
    });

    if(!passed) {
        throw new Error(messageError);
    } else {
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getLastName: () => lastName,
            getAge: () => age
        })
    }
}

export default buildMakeUsers;