export default function WorkPreview({ workData }) {
  return (
    <section className="work-preview experience-category">
      <h1 className="experience-category-heading">Work Experience</h1>
      <div className="workItem">
        {workData.map((item) => {
          return (
            <div key={item.id} className="experience-instance">
              <h2>{item.role}</h2>
              <div className="experience-subheading">
                <h3>{item.org}</h3>
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
