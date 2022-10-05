import Link from "next/link";

function Button({ styles, children }) {
  return <button className={`${styles}`}>{children}</button>;
}

export function LinkButton({ path, name }) {
  return (
    <Link
      to={path}
      className='px-4 btn text-bold py-4 rounded transition-all ease-in duration-300ms hover:shadow-lg hover:scale-1.5'>
      {name}
    </Link>
  );
}

export default Button;
