import './Footer.css';

export default function Footer({ content, links }) {
  return (
    <footer>
      <div>
        <span className="footer__content">{content}</span>
      </div>
      <div className="footer__links">{[...links]}</div>
    </footer>
  );
}
