import "./header.css";

export default function Header() {
  return (
    <nav>
      <h1>
        Khep<span>Jox</span>
      </h1>

      <ul className="nav_right">
        <a href="#" className="nav_item">
          <li className="nav_item">HOME</li>
        </a>
        <a href="#" className="nav_item">
          <li className="nav_item">DANK</li>
        </a>
        <a href="#" className="nav_item">
          <li className="nav_item">DAD</li>
        </a>
      </ul>
    </nav>
  );
}
