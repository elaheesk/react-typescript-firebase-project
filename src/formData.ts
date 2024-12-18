import { IFormData } from "./types";

export const emptyFormData:IFormData = {
    name: { value: "", hasError: false, touched: false },
    email: { value: "", hasError: false, touched: false },
    message: { value: "", hasError: false, touched: false },
} 

export const validations = {
    name: (value:string) => ({
        isValid: /^[0-9A-Za-z\s]{3,16}$/.test(value),
        error: "Enter a valid username",
    }),
    email: (value:string) => ({
        isValid: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value),
        error: "Please enter a valid email",
    }),
    message: (value:string) => ({
        isValid: value.trim() !== "",
        error: "Please fill in the empty field",
    }),
};