var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = {
    id: 1,
    name: "Pratik",
    email: "pratik@gmail.com",
};
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var updatedUser1 = updateUser(user, { email: "pratik83@gmail.com" });
console.log(updatedUser1);
