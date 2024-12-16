import { ChangeEvent, FC } from "react";

const FormField:FC = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

    };
    return (
        <form aria-live="polite" onSubmit={handleSubmit} noValidate>
            <div className="">
                <label htmlFor="" className="">
                    some label
                </label>
                <input
                    type="text"
                    id=""
                    name=""
                    placeholder="saasdasd"
                    className=""
                    value=""
                    onChange={handleChange}                    aria-describedby="email-error"
                    /* aria-invalid={error.email ? "true" : "false" }*/
                    /*onBlur={onBlur}*/
                    required
                />
                <div id="email-error" style={{ color: "red" }}>error message</div>
            </div>
            <button aria-label="send form" type="submit">Submit</button>
        </form>
    )
}
export default FormField;