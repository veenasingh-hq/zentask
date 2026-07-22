import clsx from "clsx";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-slate-200 hover:bg-slate-300 text-slate-800",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 font-medium transition-all duration-200 active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;