//TODO: Live preview of education
export default function EducationPreview({ eduData }) {
  return (
    <section className="education-preview">
      <h1>Education</h1>
      <div className="edcation-item">
        {eduData.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.course}</h2>
              <h3>{item.school}</h3>
              <p>
                {item.start} - {item.end} || {item.grade}
              </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
