CatStore.catXHR();

document.getElementById('fancyPetStore').addEventListener('click', (e) => {
	if(e.target.id.indexOf('adopt') === 0){
		console.log('event', e);
		let catIndex = e.target.id.split('-')[1];
		CatStore.adoptCat(catIndex);
	};
});

document.getElementById('callan').addEventListener('click', (e) => {
	console.log('callan event:', e)
	CatStore.getCatsByOwner(2);
});

document.getElementById('zoe').addEventListener('click', (e) => {
	console.log('zoe event', e)
	CatStore.getCatsByOwner(1);
});
document.getElementById('lauren').addEventListener('click', (e) => {
	CatStore.getCatsByOwner(3);
});
document.getElementById('allCats').addEventListener('click', (e) => {
	let cats = CatStore.getCats();
	let owners = CatStore.getOwners();
	CatStore.combineArrays(cats, owners);
});
document.getElementById('none').addEventListener('click', (e) => {
	CatStore.getCatsByOwner(0);
});