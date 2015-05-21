 // 缓存对象
var getComment = function() {
    var dom = $("#common-container"),               // 缓存dom
        appendTo = $.appendTo,                      // 缓存全局变量
        data = this.json.data;                      // 缓存作用域链较深的对象
};

// 缓存this
function Row(name) {
    var self = this;

    self.name = name;
    $(".row").click(function() {
        self.getName();
    });
}
