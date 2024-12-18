import FormField from "../components/FormField";
import React, { FormEvent, useState } from "react";
import { IFormData } from "../types";
import { emptyFormData, validations } from "../formData";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const ContactMe = () => {
    const [formData, setFormData] = React.useState<IFormData>(emptyFormData);

    const [status, setStatus] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: {
                ...(prevForm as any)[name as keyof IFormData],
                value: value,
                touched: true,
            },
        }));
    };

    const blurHandler = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Ensure 'name' is a valid key of IFormData
        const fieldName = name as keyof IFormData;

        // Perform validation
        const { isValid, error } = validations[fieldName](value);

        setFormData((prevForm) => ({
            ...prevForm,
            [fieldName]: {
                ...prevForm[fieldName],
                hasError: !isValid,
                errorMessage: isValid ? "" : error,
                touched: true,
            },
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = Object.values(formData).every(
            (input) => !input.hasError && input.touched
        );

        if (isFormValid) {
            try {
                const formValues = {
                    name: formData.name.value,
                    email: formData.email.value,
                    message: formData.message.value,
                };
                console.log(formValues);
                await addDoc(collection(db, "contactMeRequests"), formValues);
                setStatus("Message sent successfully!");
                setFormData(emptyFormData);
            } catch (error) {
                setStatus("Failed to send message.");
            }
        } else {
            setStatus("Please fill in all required fields correctly.");
        }
    };
    const [displayError, setDisplayError] = React.useState(false)
    const [selectedRating, setSelectedRating] = useState<string>("All Ratings");


    const handleOnBlur = (e: any) => {
        const { value } = e.target;
        const getPattern = e.target.pattern; // This is a string
        const regex = new RegExp(getPattern).test(value); // Convert the string to a RegExp object
        console.log("regex is: ", regex)
        if (!regex) {
            setDisplayError(true)
        } else {
            setDisplayError(false)
        }
    }
    console.log("what does blur return:   ", !handleOnBlur)
    return (
        <div className="max-w-[44rem] flex justify-center pt-2">
            <form className="shadow-2xl rounded px-4 pt-4 pb-6 mb-4" onSubmit={handleSubmit} noValidate>
                <FormField
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name.value}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    errorMessage={formData.name.errorMessage}
                    hasError={formData.name.hasError}
                    touched={formData.name.touched}
                />
                <FormField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email.value}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    errorMessage={formData.email.errorMessage}
                    hasError={formData.email.hasError}
                    touched={formData.email.touched}
                />
                <FormField
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message.value}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    errorMessage={formData.message.errorMessage}
                    hasError={formData.message.hasError}
                    touched={formData.message.touched}
                    isTextarea={true}
                />
                <div className="flex items-center justify-end">
                    <button
                        className="bg-[#505476] hover:bg-blue-700 text-white font-bold py-1 px-4 text-xs rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ContactMe;