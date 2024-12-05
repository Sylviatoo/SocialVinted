import "../styles/Footer.css";

interface FooterProps {
  titleFooter: string;
  mentionslegales: string;
}
export default function Footer({ titleFooter, mentionslegales }: FooterProps) {
  return (
    <>
      <footer>
        <h1>{titleFooter}</h1>
        <h1>{mentionslegales}</h1>
      </footer>
    </>
  );
}
