"use client";
 
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
 
type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ElementType;
  className?: string;
};
 
export default function Button({
  children,
  href,
  onClick,
  icon: Icon,
  className,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-[var(--color-white)]";
 
  const inner = (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={clsx(
        base,
        "group shadow-md hover:shadow-xl transition-all duration-100",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent-purple), var(--color-primary-dark))",
      }}
    >
      {/* soft glow */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-100"
        style={{
          boxShadow: "0 0 24px var(--color-accent-purple)",
        }}
      />
 
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <span className="transition-transform duration-100 group-hover:translate-x-1">
            <Icon />
          </span>
        )}
      </span>
    </motion.div>
  );
 
  if (href) return <Link href={href}>{inner}</Link>;
  return <button onClick={onClick}>{inner}</button>;
}
 