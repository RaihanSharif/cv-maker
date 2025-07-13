export default function PreviewHeader({ name, email, phone, website }) {
  return (
    <>
      <header className="preview-header">
        <h1>{name}</h1>
        <ul className="personal-details">
          <li>{email}</li>
          <li>{phone}</li>
          <li>{website}</li>
        </ul>
      </header>
    </>
  );
}
