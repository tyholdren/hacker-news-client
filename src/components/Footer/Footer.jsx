import './Footer.css';

export default function Footer({ content, links }) {
  return (
    <footer>
      <div>
        <span>{content}</span>
      </div>
      <div className="footer__links">
        {links.map(link => {
          return link;
        })}
      </div>
    </footer>
  );
}
