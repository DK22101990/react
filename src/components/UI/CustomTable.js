import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const statusTypeData = [
    { option: "YES", value: "YES" },
    { option: "NO", value: "NO" },
    { option: "Not Filled", value: "Not Filled" }
]
const statusData = [
    { option: "Add Other Comment", value: "Add Other Comment" },
    { option: "Not Applicable for this project", value: "Not Applicable for this project" },
    { option: "Already Attached in Tracking", value: "Already Attached in Tracking" }
]

const CustomTable = (props) => {
    const { headings, data } = props;
    const [modifiedData, setModifiedData] = useState([]);

    const setValuesToKeys = (e, index, key) => {
        // console.log("Fillllll",e.target.files[0])
        const value = key === "comment" ? e.target.value : e.target.innerText;
        let temp_state = [...modifiedData];
        let temp_element = { ...temp_state[index] };
        temp_element[key] = value;
        temp_state[index] = temp_element;
        setModifiedData(temp_state);
    }

    const changeData = async () => {
        const changedData = await data.map((d) => {
            d.statusType = "NO";
            d.status = "Add Other Comment";
            return d;
        })
        setModifiedData(changedData)
    }
    const saveData = (id, i) => {
        console.log(id, i, modifiedData[i])
    }
    useEffect(() => {
        changeData()
    }, [data])

    return (
        <>
            <table className="table is-fullwidth is-responsive">
                <thead>
                    <tr>
                        {
                            headings.map((heading, i) => {
                                return (
                                    <th key={i}>{heading}</th>
                                )
                            })
                        }
                        <th>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modifiedData.map((d, i) => {
                            return (
                                <tr key={i} >
                                    <td>{i + 1}</td>
                                    <td>{d.questions}</td>
                                    <td onClick={(e) => setValuesToKeys(e, i, "statusType")}>
                                        <Dropdown
                                            data={statusTypeData}
                                            option={d.statusType}
                                            value={d.statusType}
                                        />
                                    </td>
                                    <td onClick={(e) => setValuesToKeys(e, i, "status")}>
                                        <Dropdown
                                            data={statusData}
                                            option={d.status}
                                            value={d.status}
                                        />
                                    </td>

                                    <td>
                                        <div className="file is-small is-primary">
                                            <label className="file-label">
                                                <input 
                                                className="file-input" 
                                                type="file"
                                                 name="resume"
                                                  onChange={(e) => setValuesToKeys(e,i,"file")} 
                                                  />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label">
                                                        UPLOAD FILE
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                    <td onChange={(e) => setValuesToKeys(e, i, "comment")}>
                                        <input className="input " type="text" placeholder="Add Comment" />
                                    </td>
                                    <td>
                                        <button
                                            className="button is-small is-warning"
                                            onClick={() => saveData(d.questionId, i)}
                                        >
                                            SAVE
                                        </button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default CustomTable;