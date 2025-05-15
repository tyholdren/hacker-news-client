export default function Footer({ content, links }) {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span>{content}</span>
      </div>
      <div>
        {links.map(link => {
          return link;
        })}
      </div>
    </footer>
  );
}
