// Як перевизначити мета-теги?
// Щоб задати власні мета-теги для сторінки, додайте export const metadata:

// app/profile/edit/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit your user details and settings",
};

const EditProfile = () => {
  return <div>EditProfile</div>;
};

export default EditProfile;
