import { useState } from "react";
import InputSection from "./InputSection";


function Experience() {
    const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: ''});
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

        data={experience}
        setData={setExperience}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}
	                                                                                            
export default Experience;