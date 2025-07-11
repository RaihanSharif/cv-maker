// render the list of education buttons

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
                  onClick(e, item.id);
                  if (selectedEdu == item.id) {
                    setSelectedEdu(null);
                  }
                }}
              >
                {item.course}. Item ID: {item.id}
              </button>
              {/* conditional rendering: if selectedItem is the current itemID, then render a form */}
              {selectedEdu === item.id && (
                <form>
                  <input
                    type="text"
                    // the defaultValue is used to pre-fill input, then on change the value gets
                    // changed, then on form submit the value, not the default value gets submitted.
                    defaultValue={item.course}
                    onChange={(e) => e.target.value}
                  ></input>
                </form>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// function EducationItemEdit({ educationItem }) {
//   return (
//     <section>
//       <form className="education-edit-form">
//         <label htmlFor="school">
//           School/University name:{" "}
//           <input
//             type="text"
//             name="school"
//             id="school"
//             autoComplete="organization"
//           />
//         </label>
//         <label htmlFor="course">
//           Course:{" "}
//           <input type="text" name="course" id="course" autoComplete="none" />
//         </label>

//         <label htmlFor="grade">
//           Grade:{" "}
//           <input type="text" name="course" id="course" autoComplete="none" />
//         </label>

//         <label htmlFor="start-date">
//           Start date:{" "}
//           <input
//             type="month"
//             name="start-date"
//             id="start-date"
//             autoComplete="month"
//           />
//         </label>
//         <label htmlFor="end-date">
//           End date:{" "}
//           <input
//             type="month"
//             name="end-date"
//             id="end-date"
//             autoComplete="month"
//           />
//         </label>
//         <label htmlFor="description">
//           Start date:{" "}
//           <textarea name="description" id="description" autoComplete="none" />
//         </label>
//       </form>
//     </section>
//   );
// }

export { EducationListEdit };
