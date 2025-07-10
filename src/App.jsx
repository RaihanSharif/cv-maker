import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import PersonalInfoEdit from "./components/PersonalInfoEdit";
import { EducationListEdit } from "./components/EducationEdit";

// const dummyPersonalData = {
//   name: "Raihan Sharif",
//   email: "raihan@gmail.com",
//   phone: "03050603",
//   website: "raihan.com",
// };

const dummyEduData = [
  {
    id: 0,
    school: "King's college",
    course: "computer science",
    grade: "diploma",
    start: new Date("2016-09"),
    end: new Date("2020-06"),
    description: "did not complete the course",
  },
  {
    id: 1,
    school: "UCL",
    course: "History",
    grade: "First",
    start: new Date("2020-09"),
    end: new Date("2023-06"),
    description: "excellente!",
  },
  {
    id: 2,
    school: "Imperial",
    course: "War Studies",
    grade: "second",
    start: new Date("2018-09"),
    end: new Date("2021-06"),
    description: "Ayy caramba!",
  },
];

function App() {
  const [personalData, setPersonalData] = useState("");
  console.log(dummyEduData);

  // passed to PersonalInfoEdit component
  function handlePersonalOnChange(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  }

  function handleEducationUpdate(event, key) {
    // TODO: delete these two lines later, they show that I can
    // fetch the id of the education item associated with the button
    // as well as the event that's triggered on button click
    console.log(key);
    console.log(event.type);
  }

  return (
    <>
      <Sidebar personalData={personalData} onChange={handlePersonalOnChange} />
      <EducationListEdit data={dummyEduData} onClick={handleEducationUpdate} />

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
