import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import PersonalInfoEdit from "./components/PersonalInfoEdit";
import { EducationListEdit } from "./components/EducationEdit";

const dummyEduData = [
  {
    id: 0,
    school: "King's college",
    course: "computer science",
    grade: "diploma",
    start: "2016-09",
    end: "2020-06",
    description: "did not complete the course",
  },
  {
    id: 1,
    school: "UCL",
    course: "History",
    grade: "First",
    start: "2020-09",
    end: "2023-06",
    description: "excellente!",
  },
  {
    id: 2,
    school: "Imperial",
    course: "War Studies",
    grade: "second",
    start: "2018-09",
    end: "2021-06",
    description: "Ayy caramba!",
  },
];

function App() {
  const [personalData, setPersonalData] = useState("");
  const [educationList, setEducationList] = useState(dummyEduData);

  // passed to PersonalInfoEdit component
  function handlePersonalOnChange(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  }

  // education button click -> show form -> submit form -> call this
  function handleEducationUpdate(event, key) {
    // TODO: delete these two lines later, they show that I can
    // fetch the id of the education item associated with the button
    // as well as the event that's triggered on button click
    event.preventDefault();

    const formData = new FormData(event.target);
    const eduObj = Object.fromEntries(formData);
    eduObj.id = key;

    console.log(eduObj);
    const eduIndex = educationList.findIndex((item) => item.id === key);

    setEducationList(educationList.toSpliced(eduIndex, 1, eduObj));
  }

  return (
    <>
      <Sidebar personalData={personalData} onChange={handlePersonalOnChange} />
      <EducationListEdit
        eduData={educationList}
        onClick={handleEducationUpdate}
      />

      <div style={{ display: "flex", gap: "1rem", padding: "10px" }}>
        <p>Name: {personalData.name}</p>
        <p>Email: {personalData.email}</p>
        <p>Phone: {personalData.phone}</p>
        <p>Website: {personalData.website}</p>
      </div>
    </>
  );
}

export default App;
