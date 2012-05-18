var Foo = require("../");
var should = require("should");

describe("Foo", function() {
    describe("new Foo()", function() {
	it("should create an instance", function() {
	    should.exist(new Foo(1));
	});
    }),

    describe("#id", function() {
	var foo;
	it("should have property id", function() {
	    foo = new Foo(1);
	    foo.should.have.property("id");
	    foo.id.should.equal(1);
	});
	it("should have getter and setter", function() {
	    var id = foo.id;
	    ++id;
	    foo.id = id;
	    foo.id.should.equal(id);
	});
    });
});
