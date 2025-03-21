import { useState } from "react";
import InputSection from "./InputSection";


function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: ''});
    const [isEditing, setEditing] = useState(true);


    return (
        <InputSection
        title= "General Information"
        fields={[
            { name: 'name', placeholder: 'Name' },
            { name: 'email', placeholder: 'Email', type: 'email' },
            { name: 'phone', placeholder: 'Phone', type: 'tel' }
        ]}

        data={generalInfo}
        setData={setGeneralInfo}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}

export default GeneralInfo;