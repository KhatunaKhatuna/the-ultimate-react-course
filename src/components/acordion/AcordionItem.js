export default function AcordionItem({
  id,
  title,
  children,
  isOpen,
  list,
  setIsOpen,
}) {
  const handleClick = (id) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };
  return (
    <>
      <div
        className={`item ${isOpen === id ? "open" : ""}`}
        onClick={() => {
          handleClick(id);
        }}
      >
        <p className="id">{id}</p>
        <p className="title">{title}</p>
        <div className="image">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="arrow-up arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="arrow-down arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
        <div className="hidden-box">
          <hr />
          <p className="text">{children}</p>
          <ul className="list">{list}</ul>
        </div>
      </div>
    </>
  );
}
