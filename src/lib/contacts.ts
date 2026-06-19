export interface ContactItem {
  id: string;
  label: string;
  type: "link" | "text";
  value: string;
  iconName: "instagram" | "linkedin" | "github" | "phone" | "mail";
}

export const CONTACTS: ContactItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    type: "link",
    value: "https://www.instagram.com/premeees/",
    iconName: "instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    type: "link",
    value: "https://www.linkedin.com/in/kittapas-chocktanatorn-8382183a5/",
    iconName: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    type: "link",
    value: "https://github.com/Premeeii",
    iconName: "github",
  },
  {
    id: "tel",
    label: "Tel.",
    type: "text",
    value: "66+ 61-769-8081",
    iconName: "phone",
  },
  {
    id: "gmail",
    label: "Gmail",
    type: "text",
    value: "peam972547@gmail.com",
    iconName: "mail",
  },
];
