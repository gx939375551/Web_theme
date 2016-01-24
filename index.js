function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay); //设置cookie过期时间
    document.cookie = name + "=" + value + "; expires=" + oDate; //设置cookie
}

function getCookie(name) {
    var arr = document.cookie.split("; "); //使用;和空格 分割包含cookie，得到包含cookie name和value的数组
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=") //使用"="分割包含cookie name和value的数组
        if (arr2[0] == name) {
            return arr2[1]; //根据cookie的name来获取value;
        }
        return ""; //若没有该name的cookie，则返回为空
    }
}

function removeCookie(name) {
    setCookie(name, 1, -1) //   调用setCookie()函数,设置为-1天过期，即昨天过期，计算机自动删除过期cookie
}


var style = document.getElementsByTagName("link")[1];
window.onload = function() {

    if (getCookie("skinName")) {

        if (getCookie("skinName") == "index") {
            setSkin('index');
        } else if (getCookie("skinName") == "blue") {
            setSkin('blue');
        } else if (getCookie("skinName") == "red") {
            setSkin('red');
        } else if (getCookie("skinName") == "orange") {
            setSkin('orange');
        }
    } else {

        setSkin('index');
    }


}


function setSkin(skinValue) {

    style.href = "style\/" + skinValue + ".css";
    setCookie("skinName", skinValue, 7);
}
