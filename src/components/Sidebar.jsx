import PersonalInfoEdit from "./PersonalInfoEdit";

// TODO: a sidebar containing all the different input fields

export default function Sidebar({ personalData, onChange }) {
  return <PersonalInfoEdit personalData={personalData} onChange={onChange} />;
}
