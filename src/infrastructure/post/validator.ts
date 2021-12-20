import { 
    UserProps, 
    ReturnValidator 
} from "../../@types"

function validator({
    id,
    name,
    lastName,
    age
}: UserProps): ReturnValidator {
    let isIdString = typeof id === "string";
    let isNameString = typeof name === "string";
    let isLastNameString = typeof lastName === "string";
    let isAgeNumber = typeof age === "number";
    let isTodayPassed = 
        isIdString
        &&
        isNameString
        &&
        isLastNameString
        &&
        isAgeNumber;

    if(!isTodayPassed) {
        return {
            messageError: "Não passou da validação",
            passed: false
        }
    } else {
        return {
            messageError: "Passou da validação",
            passed: true
        }
    }
}

export default validator;