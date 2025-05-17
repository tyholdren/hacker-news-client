import './Footer.css';

export default function Footer({ content, links }) {
  console.log({ links });
  return (
    <footer>
      <div>
        <span>{content}</span>
      </div>
      <div className="footer__links">{[...links]}</div>
    </footer>
  );
}
