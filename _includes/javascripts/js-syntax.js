if (typeof qqfind === "undefined" ||
    typeof qqfind.cdnrejected === "undefined" ||
    qqfind.cdnrejected !== true) {
    url = "http://pub.idqqimg.com/qqfind/js/location4.js";
} else {
    url = "http://find.qq.com/js/location4.js";
}

var thisIsMyName;

var goodID;

var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}
