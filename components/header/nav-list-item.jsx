
import Link from "next/link";

const NavListItem = ({ menuItem }) => {
  return (
    <div>
      <Link
        className={`navLink flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300`}
        href={`${menuItem.url}`}
      >
        {menuItem.label}
      </Link>
    </div>
  );
};

export default NavListItem;
