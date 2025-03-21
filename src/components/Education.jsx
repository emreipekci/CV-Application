import { useState } from "react";
import InputSection from "./InputSection";


function Education() {
    const [education, setEducation] = useState({ school: '', title: '', date: ''});
    const [isEditing, setEditing] = useState(true);


    return (
        <InputSection
        title= "Education"
        fields={[
            { name: 'school', placeholder: 'School Name' },
            { name: 'title', placeholder: 'Title of Study' },
            { name: 'date', placeholder: 'Date of Study', type: 'date' }
        ]}

        data={education}
        setData={setEducation}
        isEditing={isEditing}
        setEditing={setEditing}
        />
    );
}
	                                                                                            
export default Education;