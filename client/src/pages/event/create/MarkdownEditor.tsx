import React from "react";
import MDEditor from "@uiw/react-md-editor";

const MDEditorComponent = () => {
  const [value, setValue] = React.useState(
    "# Event Details goes here \n\n## Event Description \n\nEvent description goes here \n\n## Date and Time \n\nDate: YYYY-MM-DD \nTime: HH:MM AM/PM \n\n## Location \n\nVenue Name \nStreet Address \nCity, State, ZIP Code \n\n## Speakers/Performers \n- Speaker/Performer 1: Brief bio or description \n- Speaker/Performer 2: Brief bio or description \n\n## Agenda \n1. Opening Remarks - HH:MM AM/PM \n2. Keynote Speech - HH:MM AM/PM \n3. Break - HH:MM AM/PM \n4. Workshop/Session 1 - HH:MM AM/PM \n5. Workshop/Session 2 - HH:MM AM/PM \n6. Closing Remarks - HH:MM AM/PM \n\n## Registration \nProvide details on how to register for the event, including any fees, deadlines, and contact information for questions. \n\n## Contact Information \nFor more information, contact: \nName: Your Name \nEmail: your.email@example.com \nPhone: (123) 456-7890"
  );
  return (
    <div className="container" data-color-mode="light">
      <MDEditor
        value={value}
        onChange={(val) => setValue(val || "")}
        height={500}
      />
    </div>
  );
};

export default MDEditorComponent;
