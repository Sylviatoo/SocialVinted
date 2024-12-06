import "../assets/styles/Footer.css";

interface FooterProps {
  titleFooter: string;
  mentionslegales: string;
}
export default function Footer({ titleFooter, mentionslegales }: FooterProps) {
  return (
    <>
      <footer>
        <h1 className="title-footer">{titleFooter}</h1>
        <h1 className="title-footer">{mentionslegales}</h1>
      </footer>
    </>
  );
}
