import { useState } from "react";
import IForm from "../pages/Home";
import { Interface } from "readline";

interface IFormElements {
    type: string;
    label: string;
    name: string;
}
const FormData = ({ formData, setFormData, handleSubmitForm }: any) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
        const { name, value } = e.target;
        const isChecked = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: name === "contactMe" ? isChecked.checked : value
        })
    }



    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <label>Name</label>
                <input value={formData.name} name="name" type="text" onChange={handleChange} />
            </div>
            <div>
                <label>Select gender</label>
                <select onChange={handleChange} name="gender" value={formData.gender}>
                    <option value=""></option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </div>
            <div>
                <label>Age</label>
                <input type="number" name="age" onChange={handleChange} value={formData.age.toString()} />
            </div>
            <div>
                <label>Start time</label>
                <input type="time" name="startTime" onChange={handleChange} value={formData.startTime} />
            </div>
            <div>
                <label>End time</label>
                <input type="time" name="endTime" onChange={handleChange} value={formData.endTime} />
            </div>
            <div>
                <label>Contact me</label>
                <input name="contactMe" type="checkbox" onChange={handleChange} checked={formData.contactMe ? true : false} />
            </div>

            <button type="submit">{formData.id ? "Save changes" : "Submit form"}</button>

        </form>













        //const formElements: IFormElements[] = [
        //    { type: "text", label: "Name", name: "name" },
        //    { type: "", label: "Select gender", name: "gender" },
        //    { type: "text", label: "Age", name: "age" },
        //    { type: "time", label: "Start time", name: "startTime" },
        //    { type: "time", label: "End time", name: "endTime" },
        //    {
        //        type: "checkbox", label: "Contact me", name: "contactMe"
        //    }]



        //    {formElements.map((el: IFormElements, index: number) =>
        //        <div key={index}>
        //            <label htmlFor={el.name}>{el.label}
        //                {el.name === "gender" ? <select name="gender" onChange={handleChange} value={formData.gender}>
        //                    <option value=""></option>
        //                    <option value="female">Female</option>
        //                    <option value="male">Male</option>
        //                </select>
        //                    : el.type === "checkbox" ?
        //                        <input name={el.name} type="checkbox" onChange={handleChange} checked={formData.contactMe ? true : false } /> :
        //                        <input
        //                            value={el.name === "name" ? formData.name :
        //                                el.name === "age" ? formData.age :
        //                                    el.name === "startTime" ? formData.startTime :
        //                                        formData.endTime}
        //                            name={el.name} type={el.type} onChange={handleChange}
        //                        />}</label>
        //        </div>

        //    )}
        //    <button type="submit">{formData.id ? "Save changes" : "Submit form"}</button>


        //</form>
    )
}
export default FormData;
