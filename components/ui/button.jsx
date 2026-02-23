export function Button({ children, variant, size, className, ...props }) {
  const baseClasses = "px-4 py-2 rounded font-semibold transition";
  const variantClasses =
    variant === "outline"
      ? "border border-black bg-transparent text-black"
      : "bg-black text-white";
  const sizeClasses = size === "sm" ? "text-sm" : "text-base";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
