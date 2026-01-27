import { Navbar } from "@/components";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
}
