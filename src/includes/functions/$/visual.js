visual(not) {
	return new Promise((resolve, reject) => {
		this.val instanceof Element ? this.val.scrollIntoView() : null
		resolve(not == false ? !window.confirm("EyeJS - Is everything alright?") : window.confirm("EyeJS - Is everything alright?"))
	});
}
