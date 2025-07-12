import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import PersonalInfoEdit from "./components/PersonalInfoEdit";
import { EducationListEdit } from "./components/EducationEdit";

const dummyEduData = [
  {
    id: crypto.randomUUID(),
    // school: "King's college",
    course: "computer science",
    grade: "diploma",
    start: "2016-09",
    end: "2020-06",
    description: "did not complete the course",
  },
  {
    id: crypto.randomUUID(),
    school: "UCL",
    course: "History",
    grade: "First",
    start: "2020-09",
    end: "2023-06",
    description: "excellente!",
  },
  {
    id: crypto.randomUUID(),
    school: "Imperial",
    course: "War Studies",
    grade: "second",
    start: "2018-09",
    end: "2021-06",
    description: "Ayy caramba!",
  },
];

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [educationList, setEducationList] = useState(dummyEduData);

  // passed to PersonalInfoEdit component
  function handlePersonalOnChange(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  }

  // education button click -> show form -> submit form -> call this
  function handleEducationUpdate(event, key) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const eduObj = Object.fromEntries(formData);
    eduObj.id = key;
    const eduIndex = educationList.findIndex((item) => item.id === key);

    setEducationList(educationList.toSpliced(eduIndex, 1, eduObj));
  }

  function handleEducationDelete(objectId) {
    const indexOfDelItem = educationList.findIndex(
      (item) => item.id === objectId
    );
    console.log(
      `in delete handler inside App.jsx: index of item to deleted: ${indexOfDelItem}`
    );

    setEducationList(educationList.toSpliced(indexOfDelItem, 1));
  }

  function handleEducationAdd(e) {
    e.preventDefault();
    const uuid = crypto.randomUUID(); //works

    const formData = new FormData(e.target); // works
    console.log(formData);
    const newEdu = Object.fromEntries(formData);
    newEdu.id = uuid;
    console.log(newEdu);
    setEducationList((prev) => [...prev, newEdu]);
  }

  return (
    <>
      <Sidebar personalData={personalData} onChange={handlePersonalOnChange} />
      <EducationListEdit
        eduData={educationList}
        onUpdate={handleEducationUpdate}
        onDelete={handleEducationDelete}
        onAdd={handleEducationAdd}
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
