import { UserProps } from "../../@types";

class User {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _lastName: string;
    private readonly _age: number;

    constructor({ 
        id, 
        name, 
        lastName, 
        age 
    }: UserProps) {
        this._id = id;
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }

    private get id() {
        return this._id;
    }

    private get name() {
        return this._name;
    }

    private get lastName() {
        return this._lastName;
    }

    private get age() {
        return this._age;
    }

    public makeAdd() {
        const {
            id,
            name,
            lastName,
            age
        } = this;
        
        return {
            id,
            name,
            lastName,
            age
        }
    }
}