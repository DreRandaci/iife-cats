CatStore.catXHR();

document.getElementById('fancyPetStore').addEventListener('click', (e) => {
	if(e.target.id.indexOf('adopt') === 0){
		console.log('event', e);
		let catIndex = e.target.id.split('-')[1];
		CatStore.adoptCat(catIndex);
	};
});