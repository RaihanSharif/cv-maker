import PersonalInfoEdit from "./PersonalInfoEdit";

// TODO: a sidebar containing all the different input sections

export default function Sidebar({ personalData, onChange }) {
  return (
    <section className="sidebar">
      <PersonalInfoEdit personalData={personalData} onChange={onChange} />
    </section>
  );
}
