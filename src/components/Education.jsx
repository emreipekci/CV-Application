import { useState } from "react";
import InputSection from "./InputSection";


function Education({ cvData, setCvData }) {
    const [isEditing, setEditing] = useState(true);


    return (
        <InputSection
        title= "Education"
        fields={[
            { name: 'school', placeholder: 'School Name' },
            { name: 'title', placeholder: 'Title of Study' },
            { name: 'date', placeholder: 'Date of Study', type: 'date' }
        ]}

        data={cvData.education}
        setData={(newData) => setCvData({ ...cvData, education: newData })}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}
	                                                                                            
export default Education;