import App from '../App';

const Menu = ({ options, filter, currentFilter }) => {
	return (
		<ul>
			{options.map(option => {
				return (
					<li>
						<button
							className={currentFilter === option && 'active-btn'}
							onClick={() => filter(option)}
						>
							{option}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Menu;
