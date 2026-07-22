function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;