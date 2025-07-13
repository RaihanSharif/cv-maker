import { useState } from "react";
import Icon from "@mdi/react";
import { mdiSchool } from "@mdi/js";

function EducationListEdit({ eduData, onUpdate, onDelete, onAdd }) {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [showEmptyEduForm, setShowEmptyEduForm] = useState(false);
  const [isActive, setIsactive] = useState(null);

  return (
    <section className="education-edit sidebar-section">
      <h2>
        <Icon path={mdiSchool} size={1.5} />
        Education
      </h2>
      <ul>
        {eduData.map((item) => {
          return (
            <li key={item.id}>
              {/* passing an anonymous function like this allows passing of both
              the event object and item id */}
              <button
                className={isActive === item.id ? "active" : "inactive"}
                key={item.id}
                onClick={() => {
                  setSelectedEdu(item.id);
                  setIsactive(item.id);
                  if (selectedEdu == item.id) {
                    setSelectedEdu(null);
                    setIsactive(null);
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
      <div className="form-btns">
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
      </div>
    </form>
  );
}

export { EducationListEdit };
