import { useState } from "react";
import { useCallback } from 'react';
import Modal from "./Modal";
import { useRowManagement, IForm } from "../hooks/useRowManagement";
const ListItems = ({
    listOfObjects,
    setListOfObjects, handleEditRow }: any) => {
    const {
        rowTobeDeleted,
        displayWarningMessage,
        handleDeleteWarning,
        handleDelete
    } = useRowManagement(listOfObjects, setListOfObjects);

    const handleRow = (e: any) => {
        const va = e.currentTarget;
        console.log(va)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Start time</th>
                        <th>End time</th>
                        <th>Contact me</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfObjects.length > 0 && listOfObjects.map((listItem: IForm) =>
                        <tr onClick={handleRow} key={listItem.id}>
                            <td>{listItem.name}</td>
                            <td>{listItem.gender}</td>
                            <td>{listItem.age}</td>
                            <td>{listItem.startTime}</td>
                            <td>{listItem.endTime}</td>
                            <td>{listItem.contactMe ? "Yes" : "No"}</td>
                            <td>
                                <button
                                    onClick={() => handleEditRow(listItem)}
                                    style={{ marginRight: "5px" }}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteWarning(listItem)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {displayWarningMessage &&
                <Modal handleDelete={handleDelete} />
            }
        </>
    )
}
export default ListItems;