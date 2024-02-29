
// import '../message-desk/styles.css'
const TabButton = (props) => {
	return (
		<button
			type="button"
			className={`tab ${props.className} `}
			id={`horizontal-alignment-item-${props.id}`}
			data-hs-tab={`#horizontal-alignment-${props.id}`}
			aria-controls={`horizontal-alignment-${props.id}`}
			role="tab"
		>
			{props.title}
		</button>
	);
};

export default TabButton;
