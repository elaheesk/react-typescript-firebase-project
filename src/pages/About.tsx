import FormField from "../components/FormField";
import React from "react";
import FormData from "../components/FormData";
import ListItems from "../components/ListItems";
export interface IForm {
    id: string;
    name: string;
    gender: string;
    age: string;
    startTime: string;
    endTime: string;
    contactMe: boolean
}
const About = () => {
    const [listOfObjects, setListOfObjects] = React.useState<IForm[]>([]);
    const [formData, setFormData] = React.useState<IForm>({
        id: "",
        name: "",
        gender: "",
        age: "",
        startTime: "",
        endTime: "",
        contactMe: false
    })

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("habdle submit is recreated")
        e.preventDefault();

        if (formData.name && formData.gender && formData.age && formData.startTime && formData.endTime) {
            if (formData.id) {
                const editedArray = listOfObjects.map((row) => {
                    if (formData.id === row.id) {
                        return { ...formData }
                    }
                    else {
                        return { ...row }
                    }
                })
                setListOfObjects(editedArray);
            }
            else {
                var id = "id" + Math.random().toString(16).slice(2)
                setListOfObjects([...listOfObjects, { ...formData, id: id }])
            }
            setFormData({
                id: "",
                name: "",
                gender: "",
                age: "",
                startTime: "",
                endTime: "",
                contactMe: false
            })
        } else {
            alert("Please fill in the form");
        }
    }



    const handleEditRow = (rowToEdit: IForm) => {
        setFormData({ ...rowToEdit })
    }
    return (
        <div>About page
            <section>
                <h1>welcome to home page</h1>
                <FormData formData={formData} setFormData={setFormData} handleSubmitForm={handleSubmitForm} />
            </section>
            <section>
                <ListItems listOfObjects={listOfObjects} setListOfObjects={setListOfObjects} handleEditRow={handleEditRow} />
            </section>

           
        </div>
    )
}
export default About;