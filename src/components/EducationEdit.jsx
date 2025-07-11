import { useState } from "react";

function EducationListEdit({ eduData, onClick }) {
  // something to track the currently selected education entry
  // make the button of the currently selected education a different colour
  const [selectedEdu, setSelectedEdu] = useState(null);

  console.log(eduData);
  return (
    <section className="education-btns">
      <ul>
        {eduData.map((item) => {
          return (
            <li key={item.id}>
              {/* passing an anonymous function like this allows passing of both
              the event object and item id */}
              <button
                key={item.id}
                onClick={(e) => {
                  setSelectedEdu(item.id);
                  onClick(e, item.id); // TODO: remove this. Will be on the education form.
                  if (selectedEdu == item.id) {
                    setSelectedEdu(null);
                  }
                }}
              >
                {item.course}. Item ID: {item.id}
              </button>
              {/* conditional rendering: if selectedItem is the current itemID, then render a form */}
              {selectedEdu === item.id && (
                <EducationItemEdit educationItem={item} onSubmit={onClick} />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function EducationItemEdit({ educationItem, onSubmit }) {
  return (
    <section>
      <form
        className="education-edit-form"
        onSubmit={(e) => onSubmit(e, educationItem.id)}
      >
        <label htmlFor="school">
          School/University name:{" "}
          <input
            type="text"
            name="school"
            id="school"
            autoComplete="organization"
            defaultValue={educationItem.school}
          />
        </label>

        <label htmlFor="course">
          Course:{" "}
          <input
            type="text"
            name="course"
            id="course"
            autoComplete="none"
            defaultValue={educationItem.course}
          />
        </label>

        <label htmlFor="grade">
          Grade:{" "}
          <input
            type="text"
            name="grade"
            id="grade"
            autoComplete="none"
            defaultValue={educationItem.grade}
          />
        </label>

        <label htmlFor="start-date">
          Start date:{" "}
          <input
            type="month"
            name="start-date"
            id="start-date"
            autoComplete="date"
            defaultValue={educationItem.start.toISOString().slice(0, 7)}
          />
        </label>
        <label htmlFor="end-date">
          End date:{" "}
          <input
            type="month"
            name="end-date"
            id="end-date"
            autoComplete="date"
            defaultValue={educationItem.end.toISOString().slice(0, 7)}
          />
        </label>
        <label htmlFor="description">
          Description:{" "}
          <textarea
            name="description"
            id="description"
            autoComplete="none"
            defaultValue={educationItem.description}
          />
        </label>
        <input type="submit"></input>
      </form>
    </section>
  );
}

export { EducationListEdit };
