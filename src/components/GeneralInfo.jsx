import { useState } from "react";
import InputSection from "./InputSection";


function GeneralInfo({ cvData, setCvData }) {
    const [isEditing, setEditing] = useState(true);


    return (
        <InputSection
        title= "General Information"
        fields={[
            { name: 'name', placeholder: 'Name' },
            { name: 'email', placeholder: 'Email', type: 'email' },
            { name: 'phone', placeholder: 'Phone', type: 'tel' }
        ]}

        data={cvData.generalInfo}
        setData={(newData) => setCvData({ ...cvData, generalInfo: newData })}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}

export default GeneralInfo;