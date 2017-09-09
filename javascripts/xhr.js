var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function(){
		let catData = JSON.parse(this.responseText).cats;
		console.log('catData', catData);
	};

	oldCatStore.ownerLoadWorks = function(){
		let ownerData = JSON.parse(this.responseText).owners;
		console.log('ownerData', ownerData);
	};

	oldCatStore.shitBrokeAf = () => {
		console.log('error')
	};

	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener('load', CatStore.catLoadWorks);
		myCats.addEventListener('error', CatStore.shitBrokeAf);
		myCats.open('GET', './db/cats.json');
		myCats.send();
	};
	oldCatStore.ownerXHR = () => {
		let myOwners = new XMLHttpRequest;
		myOwners.addEventListener('load', CatStore.ownerLoadWorks);
		myOwners.addEventListener('error', CatStore.shitBrokeAf);
		myOwners.open('GET', './db/owner.json');
		myOwners.send();
	};

	return oldCatStore;
})(CatStore || {});