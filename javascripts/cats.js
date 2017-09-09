var CatStore = ((oldCatStore) => {
	//'cats' has to be declared as a let because a const would cause an error
	let cats = [];
	
	oldCatStore.getCats = () => {return cats;};
	oldCatStore.setAllCats = (allMyCats) => {cats = allMyCats;};
	oldCatStore.adoptCat = (catIndex) => {
		cats[catIndex].ownerId = 1; 
		let myCats = CatStore.getCats(); 
		let myOwners = CatStore.getOwners();
		CatStore.combineArrays(myCats, myOwners)
	};

	oldCatStore.getCatsByOwner = (ownerId) => {
		let callansCats = [];
		cats.forEach((cat) => {
			if(cat.ownerId === ownerId){
				callansCats.push(cat);
			};
		});

		let myOwners = CatStore.getOwners();
		CatStore.combineArrays(callansCats, myOwners);
	};

	return oldCatStore;
})(CatStore || {});