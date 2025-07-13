import { useState } from "react";
import "./styles/App.css";
import PersonalInfoEdit from "./components/PersonalInfoEdit";
import { EducationListEdit } from "./components/EducationEdit";
import PreviewHeader from "./components/PreviewHeader";
import EducationPreview from "./components/EducationPreview";

const dummyEduData = [
  {
    id: crypto.randomUUID(),
    school: "King's college",
    course: "computer science",
    grade: "diploma",
    start: "2016-09",
    end: "2020-06",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Quisque eros velit, ultricies vel lectus vel, tempor ornare enim. \
    Vivamus non sapien odio. Interdum et malesuada fames ac ante ipsum \
    primis in faucibus. Praesent mattis magna tincidunt, consequat diam \
    sed, elementum augue. Nam ut leo sapien. Duis mi metus, sodales hendrerit \
    ligula vel, maximus facilisis nisl. Phasellus quis nibh egestas, aliquet \
    enim non, suscipit sem. In sit amet leo quis nisl luctus pulvinar rutrum \
    at erat. Suspendisse sit amet nisl condimentum, vehicula massa imperdiet, \
    condimentum massa. Etiam iaculis elit quis felis ullamcorper gravida. \
    Quisque fermentum velit vel ligula tincidunt, eget ullamcorper ipsum \
    pharetra. Mauris sagittis hendrerit odio. Praesent a tristique diam.",
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
    <main className="app">
      <section className="sidebar">
        <section className="export">
          <button>Download PDF</button>
          <button>print</button>
        </section>
        <PersonalInfoEdit
          personalData={personalData}
          onChange={handlePersonalOnChange}
        />
        <EducationListEdit
          eduData={educationList}
          onUpdate={handleEducationUpdate}
          onDelete={handleEducationDelete}
          onAdd={handleEducationAdd}
        />
      </section>
      <section className="preview">
        <PreviewHeader {...personalData} />
        <EducationPreview eduData={educationList} />
      </section>
    </main>
  );
}

export default App;
