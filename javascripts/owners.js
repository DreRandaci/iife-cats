var CatStore = ((oldCatStore) => {
	//has to be a let because a const would cause an error
	let owners = [];
	
	oldCatStore.getOwners = () => {
		return owners;
	};
	oldCatStore.setAllOwners = (allMyOwners) => {
		owners = allMyOwners;
	};

	return oldCatStore;
})(CatStore || {});