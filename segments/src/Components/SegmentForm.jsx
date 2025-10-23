import { useState } from "react";
import SegmentButton from "./SegmentButton";
import SegmentName from "./SegmentName";
import SegmentSchemaList from "./SegmentSchemaList";
import axios from 'axios';

const SegmentForm = (props)=>{
  const allOptions = {
     'first_name':"First Name",
     'last_name':"Last Name",
     'gender':"Gender",
     'age':"Age",
     'account_name':"Account Name",
     'city':"City",
     'state':"State"
   };  
  const [segmentName,setSegmentName]  = useState('');
  const [selectedValues, setSelectedValues] = useState([""]);

  // Add new dropdown
    const handleAddDropdown = () => {
    const used = selectedValues.filter(Boolean);
    const remaining = Object.keys(allOptions).filter(
        (key) => !used.includes(key)
    );

    if (remaining.length > 0) {
        setSelectedValues([...selectedValues, ""]);
    }
    };

  // Change selected value
  const handleSelectChange = (index, value) => {
    const newSelections = [...selectedValues];
    newSelections[index] = value;
    setSelectedValues(newSelections);
  };

  // Delete dropdown
  const handleDeleteDropdown = (index) => {
    const newSelections = selectedValues.filter((_, i) => i !== index);
    setSelectedValues(newSelections);
  };

const getAvailableOptions = (currentIndex) => {
  const selectedExcludingCurrent = selectedValues.filter((_, i) => i !== currentIndex);
  return Object.entries(allOptions)
    .filter(([key]) => !selectedExcludingCurrent.includes(key))
    .map(([key, label]) => ({ value: key, label }));
};

  // Final data
  const finalData = {
    segment_name:segmentName,
    schema: selectedValues
    .filter(Boolean)
    .map((key) => ({ [key]: allOptions[key] }))
  };

  const handleSubmit = async () => {
    if (!segmentName || finalData.schema.length == 0) {
       alert('Please fill all the fields');
       return;
    }
    try {
        const response = await axios.post("	https://webhook.site/d5ff15f3-f652-4461-b4ef-d45893499606", finalData);

        if (response.status === 200 || response.status === 201) {
        alert("Segment sent successfully!");
        console.log("Segment data sent:", finalData);
        } else {
        alert("Unexpected response from server.");
        console.log("Response:", response);
        }

        // Reset the form after success
        setSegmentName("");
        setSelectedValues([""]);

    } catch (error) {
        console.error("Error sending segment data:", error);
        alert("Failed to send data to webhook.");
    }

  };
  return (
     <>
        <div className="modal-top modal-px-2">
            <h1>Saving Segment</h1>
        </div>        
        <div className="modal-body modal-px-2">
            <SegmentName segmentName={segmentName} setSegmentName={setSegmentName}/>
        {
          selectedValues.map((selected, index) => (
                <SegmentSchemaList
                key={index}
                index={index}
                selected={selected}
                availableOptions={getAvailableOptions(index)}
                handleSelectChange={handleSelectChange}
                handleDeleteDropdown={handleDeleteDropdown}
                />
          ))
        }
        <a className="w-100 modal-my-2" onClick={handleAddDropdown} style={{display:'block',textDecoration:'underline',cursor:'pointer'}}>+ Add New Schema</a>
        </div>
        <div className='modal-bottom modal-px-2'>
            <div className='modal-bottom-button'>
              <SegmentButton handleSubmit={handleSubmit} onClose={()=>props.setIsOpened(false)}/>
            </div>
        </div>
     </>
  );
}

export default SegmentForm;