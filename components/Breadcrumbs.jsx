import React from "react";

const Breadcrumbs = ({
  items = [],
  className = "",
  containerClassName = "",
}) => {
  const safeItems = Array.isArray(items) ? items.slice(0, 5) : [];

  return (
    <section className={`w-full ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 ${containerClassName}`}>
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex items-center flex-wrap text-sm">
            {safeItems.map((item, idx) => {
              const isLast = idx === safeItems.length - 1;

              return (
                <li key={`${item.label}-${idx}`} className="flex items-center">
                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      className="text-[#2d2d2d] hover:underline underline-offset-4"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className={
                        isLast ? "text-[#9a9a9a]" : "text-[#2d2d2d]"
                      }
                    >
                      {item.label}
                    </span>
                  )}

                  {!isLast && (
                    <span
                      className="mx-3 text-[#c9c9c9]"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
