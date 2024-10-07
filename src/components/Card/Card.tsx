import { CardProps } from "./interface";

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`p-4 mb-4 bg-card border border-gray-200 rounded-lg shadow-lg sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
