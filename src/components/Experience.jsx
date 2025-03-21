import { useState } from "react";
import InputSection from "./InputSection";


function Experience({ cvData, setCvData }) {
    const [isEditing, setEditing] = useState(true);


    return (
        <InputSection
        title= "Experience"
        fields={[
            { name: 'company', placeholder: 'Company Name' },
            { name: 'position', placeholder: 'Position Title' },
            { name: 'responsibilities', placeholder: 'Main Responsibilities' },
            { name: 'from', placeholder: 'From', type: 'date' },
            { name: 'until', placeholder: 'Until', type: 'date' }
        ]}

        data={cvData.experience}
        setData={(newData) => setCvData({ ...cvData, experience: newData })}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}
	                                                                                            
export default Experience;