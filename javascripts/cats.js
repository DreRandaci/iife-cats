var CatStore = ((oldCatStore) => {
	//has to be a let because a const would cause an error
	let cats = [];
	
	oldCatStore.getCats = () => {
		return cats;
	};
	oldCatStore.setAllCats = (allMyCats) => {
		cats = allMyCats;
	};

	return oldCatStore;
})(CatStore || {});