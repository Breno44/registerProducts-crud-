export default function App() {
  return (
    <div className="alert alert-dismissible alert-warning">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">
        Hello
        <a href="/" className="alert-link">
          World
        </a>
        .
      </p>
    </div>
  );
}
