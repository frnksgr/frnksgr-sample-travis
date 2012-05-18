
exports = module.exports = Foo;

function Foo(id) { 
    this._id = id;
};

Foo.prototype.__defineGetter__("id", function() {
    return this._id;
});


Foo.prototype.__defineSetter__("id", function(id) {
    this._id = id;
});