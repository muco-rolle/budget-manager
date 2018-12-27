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

/*function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
*/
const formatNumber = number => {
	const parts = number.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return parts[0];
};

//- get current month
const month = {
	months() {
		return [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
	},
	now() {
		return this.months()[new Date().getMonth()];
	}
};

export { ucFirst, storage, formatNumber, month };
