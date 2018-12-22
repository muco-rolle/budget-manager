const ucFirst = word => {
	word = word.split("");
	const firstLetter = word[0].toUpperCase();
	return firstLetter + word.slice(1).join("");
};

const storage = {
	set(storeName, data) {
		localStorage.setItem(storeName, JSON.stringify(data));
		return this.get(storeName);
	},

	get(storeName) {
		return JSON.parse(localStorage.getItem(storeName));
	}
};

export { ucFirst, storage };
