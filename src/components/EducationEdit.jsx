// TODO: education input fields
// info:
//      school name, course, start and end dates of study
// has a check box to say if currently in the course.

// render the list of education buttons

function EducationListEdit({ data, onClick }) {
  console.log(data);
  return (
    <section className="education-btns">
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {/* passing an anonymous function like this allows passing of both
              the event object and item id */}
              <button key={item.id} onClick={(e) => onClick(e, item.id)}>
                {item.course}. Item ID: {item.id}
              </button>
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
