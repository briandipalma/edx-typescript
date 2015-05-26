var Greeter = (function () {
    function Greeter(first, last) {
        this.fullname = first + " " + last;
    }
    return Greeter;
})();
var user = new Greeter("F", "L");
