import FormField from "../components/FormField";
import React, { FormEvent } from "react";
import { IFormData } from "../types";
import { emptyFormData, validations } from "../data";
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

    const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const fieldName = name as keyof IFormData;
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
    return (
        <div className="mt-6 justify-self-center p-4">
            <h1 className="mb-4 text-xl font-extrabold md:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-sky-200 from-blue-600">Contact me!</h1>
            <div className="w-[20rem] md:w-[30rem] rounded bg-gray-100">
                <form className="shadow-2xl rounded px-4 pt-4 pb-6 mb-4" onSubmit={handleSubmit} noValidate>
                    <FormField
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
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6 text-md rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
                {status && <p className="text-[#505476]">{status}</p>}
            </div>
        </div>
    )
}
export default ContactMe;