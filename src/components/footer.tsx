import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="my-8 flex items-center gap-2 rounded-lg border bg-card px-3 py-2 shadow-xl">
      <p>
        &copy; {new Date().getFullYear()}
        <span className="text-primary">Next Level Tech</span>
      </p>
      <div className="ml-auto"></div>
      <Link href="/about" className="text-primary">
        About
      </Link>
      <Link href="/contact" className="text-primary">
        Contact
      </Link>
    </footer>
  );
};
