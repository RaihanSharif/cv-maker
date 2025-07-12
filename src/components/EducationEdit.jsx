import { useState } from "react";

function EducationListEdit({ eduData, onUpdate, onDelete, onAdd }) {
  // something to track the currently selected education entry
  // make the button of the currently selected education a different colour
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [showEmptyEduForm, setShowEmptyEduForm] = useState(false);
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
                onClick={() => {
                  setSelectedEdu(item.id);
                  if (selectedEdu == item.id) {
                    setSelectedEdu(null);
                  }
                }}
              >
                {item.course} id: {item.id.slice(0, 3)}
              </button>
              {/* conditional rendering: if selectedItem is the current itemID, then render a form */}
              {selectedEdu === item.id && (
                <EducationItemEdit
                  educationItem={item}
                  onSubmit={(e) => onUpdate(e, item.id)}
                  onDelete={onDelete}
                />
              )}
            </li>
          );
        })}
        <li>
          <button
            className="add-education-btn"
            onClick={() => {
              setShowEmptyEduForm(!showEmptyEduForm);
            }}
          >
            Add Education
          </button>
          {showEmptyEduForm && (
            <EducationItemEdit
              onSubmit={(e) => {
                setShowEmptyEduForm(false);
                onAdd(e);
              }}
            />
          )}
        </li>
      </ul>
    </section>
  );
}

function EducationItemEdit({ educationItem, onSubmit, onDelete }) {
  // destructuring the educationItem like this allows default values to be blank if
  /// no educationItem props is present
  // const {
  //   school = "",
  //   course = "",
  //   grade = "",
  //   start = "",
  //   end = "",
  //   description = "",
  // } = educationItem;

  return (
    <section>
      <form className="education-edit-form" onSubmit={onSubmit}>
        <label htmlFor="school">
          School/University name:{" "}
          <input
            type="text"
            name="school"
            id="school"
            autoComplete="organization"
            defaultValue={educationItem?.school}
            required
          />
        </label>

        <label htmlFor="course">
          Course:{" "}
          <input
            type="text"
            name="course"
            id="course"
            autoComplete="none"
            defaultValue={educationItem?.course}
            required
          />
        </label>

        <label htmlFor="grade">
          Grade:{" "}
          <input
            type="text"
            name="grade"
            id="grade"
            autoComplete="none"
            defaultValue={educationItem?.grade}
          />
        </label>

        <label htmlFor="start">
          Start date:{" "}
          <input
            type="month"
            name="start"
            id="start"
            autoComplete="date"
            defaultValue={educationItem?.start}
          />
        </label>
        <label htmlFor="end">
          End date:{" "}
          <input
            type="month"
            name="end"
            id="end"
            autoComplete="date"
            max="2027-07" // could make this programatic
            defaultValue={educationItem?.end}
          />
        </label>
        <label htmlFor="description">
          Description:{" "}
          <textarea
            name="description"
            id="description"
            autoComplete="none"
            defaultValue={educationItem?.description}
          />
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>

        {onDelete && (
          <button
            className="del-education-item"
            onClick={(e) => {
              console.log(
                `in delete button: deleting item id: ${educationItem?.id}`
              );
              e.preventDefault();
              onDelete(educationItem?.id);
            }}
          >
            Delete
          </button>
        )}
      </form>
    </section>
  );
}

export { EducationListEdit };
