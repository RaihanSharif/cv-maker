import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhoneOutline, mdiWeb } from "@mdi/js";

export default function PreviewHeader({ name, email, phone, website }) {
  return (
    <>
      <header className="preview-header">
        <h1>{name}</h1>
        <div className="personal-details">
          <span>
            <Icon path={mdiEmailOutline} size={1} />
            {email}
          </span>
          <span>
            <Icon path={mdiPhoneOutline} size={1} />
            {phone}
          </span>
          <span>
            <Icon path={mdiWeb} size={1} />
            {website}
          </span>
        </div>
      </header>
    </>
  );
}
