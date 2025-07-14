import { useState } from "react";
import Icon from "@mdi/react";
import { mdiBriefcase } from "@mdi/js";

function WorkListEdit({ workData, onUpdate, onDelete, onAdd }) {
  const [selectedWork, setSelectedWork] = useState(null);
  const [showEmptyWorkForm, setShowEmptyWorkForm] = useState(false);
  const [isActive, setIsactive] = useState(null);

  return (
    <section className="sidebar-section">
      <h2>
        <Icon path={mdiBriefcase} size={1.5} />
        Work Experience
      </h2>
      <ul>
        {workData.map((item) => {
          return (
            <li key={item.id}>
              <button
                className={isActive === item.id ? "active" : "inactive"}
                key={item.id}
                // passing an anonymous function like this allows passing of both
                // the event object and item id
                onClick={() => {
                  setSelectedWork(item.id);
                  setIsactive(item.id);
                  if (selectedWork == item.id) {
                    setSelectedWork(null);
                    setIsactive(null);
                  }
                }}
              >
                {item.role}
              </button>
              {/* returns a prefilled form with the data of item that has the id */}
              {selectedWork === item.id && (
                <WorkItemEdit
                  workItem={item}
                  onSubmit={(e) => onUpdate(e, item.id)}
                  onDelete={onDelete}
                />
              )}
            </li>
          );
        })}
        <li>
          <button
            className="add-work-btn"
            onClick={() => {
              setShowEmptyWorkForm(!showEmptyWorkForm);
            }}
          >
            Add Work Experience
          </button>
          {showEmptyWorkForm && (
            <WorkItemEdit
              onSubmit={(e) => {
                setShowEmptyWorkForm(false);
                onAdd(e);
              }}
            />
          )}
        </li>
      </ul>
    </section>
  );
}

function WorkItemEdit({ workItem, onSubmit, onDelete }) {
  return (
    <form className="work-edit-form" onSubmit={onSubmit}>
      <label htmlFor="org">
        Organisation:{" "}
        <input
          type="text"
          name="org"
          id="org"
          autoComplete="organization"
          defaultValue={workItem?.org}
          required
        />
      </label>

      <label htmlFor="role">
        Role:{" "}
        <input
          type="text"
          name="role"
          id="role"
          autoComplete="none"
          defaultValue={workItem?.role}
          required
        />
      </label>
      <label htmlFor="start">
        Start date:{" "}
        <input
          type="month"
          name="start"
          id="start"
          autoComplete="date"
          defaultValue={workItem?.start}
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
          defaultValue={workItem?.end}
        />
      </label>
      <label htmlFor="description">
        Description:{" "}
        <textarea
          name="description"
          id="description"
          autoComplete="none"
          defaultValue={workItem?.description}
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
                `in delete button: deleting item id: ${workItem?.id}`
              );
              e.preventDefault();
              onDelete(workItem?.id);
            }}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export { WorkListEdit };
