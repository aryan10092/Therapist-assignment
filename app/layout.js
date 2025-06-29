import "./globals.css";

export const metadata = {
  title: "Dr. Serena Blake, PsyD - Psychological Services",
  description: "Psychological care for change, insight, and well-being. Individual psychotherapy for adults via telehealth in California and most U.S. states through PSYPACT participation.",
  keywords: "psychologist, therapy, psychotherapy, mental health, anxiety, depression, trauma, relationships, Los Angeles, California",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Psychological Services",
    description: "Psychological care for change, insight, and well-being. Individual psychotherapy for adults via telehealth in California and most U.S. states through PSYPACT participation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
