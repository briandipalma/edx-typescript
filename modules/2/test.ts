class Greeter {
	fullname: string;

	constructor(first: string, last: string) {
		this.fullname = first + " " + last;
	}
}

var user = new Greeter("F", "L");
