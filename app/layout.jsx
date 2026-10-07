import "./globals.css";

export const metadata = {
  title: "R & M Outdoor Services | Fairbanks Snow Plowing",
  description: "Family and Army Veteran owned snow plowing, hard pack removal, excavation and grading in Fairbanks and North Pole, Alaska.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
