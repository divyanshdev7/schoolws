
import NavListItem from "./nav-list-item";
const DropDownMenuItem = ({ props }) => {
	return (
		<div>
			<div className="text-sm hs-dropdown-menu hs-dropdown-auto-close-outside transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg ml-3 py-2 px-3 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
				<NavListItem url={props.url1} item1={props.menuItem1} />
				<NavListItem url={props.url2} item2={props.menuItem2} />
				<NavListItem url={props.url3} item2={props.menuItem3} />
				<NavListItem url={props.url4} item2={props.menuItem4} />
				<NavListItem url={props.url5} item2={props.menuItem5} />
			</div>
		</div>
	);
};

export default DropDownMenuItem;
