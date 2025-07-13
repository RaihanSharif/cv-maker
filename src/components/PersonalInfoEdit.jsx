// TODO: Client side input validation does not work, e.g. email can "beasdf"

export default function PersonalInfoEdit({ personalData, onChange }) {
  return (
    <section className="personal-info-edit sidebar-section">
      <h2>Personal Details</h2>
      <form action="" className="personal-info-form">
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            id="name"
            value={personalData.name}
            placeholder="e.g. John Smith"
            autoComplete="name"
            onChange={onChange}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={personalData.email}
            placeholder="e.g. johnsmith@gmail.com"
            autoComplete="email"
            onChange={onChange}
          />
        </label>
        <label htmlFor="phone">
          Phone:{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            value={personalData.phone}
            placeholder="e.g. 07563442456"
            autoComplete="tel"
            onChange={onChange}
          />
        </label>
        <label htmlFor="website">
          website:{" "}
          <input
            type="text"
            name="website"
            id="website"
            value={personalData.website}
            placeholder="johnsmith.com"
            autoComplete="website"
            onChange={onChange}
          />
        </label>
      </form>
    </section>
  );
}
