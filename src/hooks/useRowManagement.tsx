import { useCallback, useState } from "react";

export interface IForm {
    id: string;
    name: string;
    gender: string;
    age: string;
    startTime: string;
    endTime: string;
    contactMe: boolean;
}

export const useRowManagement = (listOfObjects: IForm[], setListOfObjects: React.Dispatch<React.SetStateAction<IForm[]>>) => {
    const defaultRow: IForm = {
        id: "",
        name: "",
        gender: "",
        age: "",
        startTime: "",
        endTime: "",
        contactMe: false
    };

    const [rowTobeDeleted, setRowTobeDeleted] = useState<IForm>(defaultRow);
    const [displayWarningMessage, setDisplayWarningMessage] = useState<boolean>(false);

    const handleDeleteWarning = (rowToDelete: IForm) => {
        setDisplayWarningMessage(true);
        setRowTobeDeleted({ ...rowToDelete });
    };


    const handleDelete = (e: any) => {
    console.log("handleDelete recreated");
        const btnId =e.target.id
        if (btnId === "1" && rowTobeDeleted && rowTobeDeleted.id !== "") {
            const newFilteredList = listOfObjects.filter((row: IForm) => row.id !== rowTobeDeleted.id);
            setListOfObjects([...newFilteredList]);
            setRowTobeDeleted(defaultRow);
        }
        setDisplayWarningMessage(false);
    };

    const resetRowState = () => {
        setRowTobeDeleted(defaultRow);
        setDisplayWarningMessage(false);
    };

    return {
        rowTobeDeleted,
        displayWarningMessage,
        handleDeleteWarning,
        handleDelete,
        resetRowState
    };
};
