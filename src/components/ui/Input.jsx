function Input({
  label,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        className={`rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;