//TODO: Live preview of education
export default function EducationPreview({ eduData }) {
  return (
    <section className="education-preview experience-category">
      <h1 className="experiece-category-heading">Education</h1>
      <div className="edcation-item">
        {eduData.map((item) => {
          return (
            <div key={item.id} className="experience-instance">
              <h2>{item.course}</h2>
              <div className="experience-subheading">
                <h3>
                  {item.school} - <span className="grade">{item.grade}</span>
                </h3>
                <div>
                  <span>Start: {item.start}</span> |{" "}
                  <span>End: {item.end}</span>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
