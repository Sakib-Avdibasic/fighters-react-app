import { useState } from 'react';
import Menu from './components/Menu';
import FighterList from './components/FighterList';
import fighters from './data';

const App = () => {
	const [displayedFighters, setDisplayedFighters] = useState(fighters);
	const [displayedCategory, setDisplayedCategory] = useState('all');

	const filterFighters = fighterType => {
		if (fighterType !== 'all') {
			setDisplayedFighters(
				fighters.filter(fighter => fighter.category === fighterType)
			);
		} else {
			setDisplayedFighters(fighters);
		}

		setDisplayedCategory(fighterType);
	};

	const categories = [
		'all',
		...new Set(fighters.map(fighter => fighter.category)),
	];
	return (
		<>
			<header>
				<nav>
					<Menu
						options={categories}
						filter={filterFighters}
						currentFilter={displayedCategory}
					/>
				</nav>
			</header>
			<main>
				<FighterList items={displayedFighters} />
			</main>
		</>
	);
};

export default App;
