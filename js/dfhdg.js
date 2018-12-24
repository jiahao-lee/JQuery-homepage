$(document).ready(function(){
    $("#close").click(function(){
        $("#top-title").css("display","none");
        $("#left").css("top","0px");
        $("#right").css("top","0px");
    });
});

$(document).ready(function () {
    $("#Q,#QQ").mouseover(function () {
        $("#QQ").css("display","block");
    });
    $("#Q,#QQ").mouseout(function () {
        $("#QQ").css("display","none");
    });
});


$(document).ready(function () {
    $("#x,#wx").mouseover(function () {
        $("#wx").css("display","block");
    });
    $("#x,#wx").mouseout(function () {
        $("#wx").css("display","none");
    });
});

$(document).ready(function () {
    $("#b,#wb").mouseover(function () {
        $("#wb").css("display","block");
    });
    $("#b,#wb").mouseout(function () {
        $("#wb").css("display","none");
    });
});

$(document).ready(function () {
    $("#z,#zfb").mouseover(function () {
        $("#zfb").css("display","block");
    });
    $("#z,#zfb").mouseout(function () {
        $("#zfb").css("display","none");
    });
});

$(document).ready(function () {
    $(".watch-photo").mouseover(function () {
        $("#turn").css("display","block");
    });
    $(".watch-photo").mouseout(function () {
        $("#turn").css("display","none");
    });
});
/********************************************倒计时******************************************************************/
function timer()
{
    var a = new Date();
    var start = a.getTime();
    var b = new Date(2019,2,21,10,0);
    var end = b.getTime();
    var ts = end - start;
    var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
    var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
    var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
    var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
    var ms = parseInt(ts % 1000 / 10,10);
    dd = checkTime(dd);
    hh = checkTime(hh);
    mm = checkTime(mm);
    ss = checkTime(ss);
    ms = checkTime(ms);
    var asd=document.getElementById("timer").innerHTML = dd + "天" + hh + "时" + mm + "分" + ss + "秒" + ms + "毫秒";
    setInterval("timer()",10);
}
function checkTime(i)
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
/*******************************************轮转图******************************************************************/
$(document).ready(function () {
    var offest = 0;
    var array = [1,2,3,4,5,6,7,8,9];
    var count1 = 0;
    var count2 = 0;
    var flag1 = null;
    var flag2 = null;
    var flag3 = null;
    var nextphoto = function () {
        if(offest === -8000){
           offest +=1000;
           $("#select-photo").append($("#select-photo li").first());
           value = offest + "px";
           $("#select-photo").css("marginLeft",value);
        }
        offest -= 1000;
        value = offest + "px";
        $("#select-photo").animate({
            marginLeft:value
        },1000);
        getphoto();
        getnum();
    }

    var prephoto = function () {
        if(offest === 0){
            offest -=1000;
            $("#select-photo").prepend($("#select-photo li:last"));
            value = offest + "px";
            $("#select-photo").css("marginLeft",value);
        }
        offest += 1000;
        value = offest + "px";
        $("#select-photo").animate({
            marginLeft:value
        },1000);
        getphoto();
        getnum();
    }

        flag3 = setInterval(function () {
            nextphoto();
        }, 3000);

    function done1() { //点击时间间隔函数
        if(count1 === 0) {
            clearInterval(flag1); //清除定时器，也就是解开点击限制
        } else {
            count1 = count1 - 1;
        }
    }

    function done2() { //点击时间间隔函数
        if(count2 === 0) {
            clearInterval(flag2); //清除定时器，也就是解开点击限制
        } else {
            count2 = count2 - 1;
        }
    }

   $('.tr').click(function() {
        //后移按钮点击触发函数
       clearInterval(flag3);
       if(count1 === 0){
           nextphoto();
           count1 = 10;
           flag1 = setInterval(done1,100);
           };
       flag3 = setInterval(function () {
           nextphoto();
       }, 3000);
    })

    $('.tl').click(function() {
        //后移按钮点击触发函数
        clearInterval(flag3);
        if(count2 === 0){
            prephoto();
            count2 = 10;
            flag2 = setInterval(done2,100);
        };
        flag3 = setInterval(function () {
            nextphoto();
        }, 3000);
    })

   var getphoto = function () {
       var get = $(".photo-box li a img");
       for(var i=0;i < array.length;i++){
           if(get.eq(i).attr("src") === "images/scenery-one.jpg"){
               array[i] = 1;
           } else if(get.eq(i).attr("src") === "images/scenery-two.jpg"){
               array[i] = 2;
           } else if(get.eq(i).attr("src") === "images/scenery-three.jpg"){
               array[i] = 3;
           } else if(get.eq(i).attr("src") === "images/scenery-four.jpg"){
               array[i] = 4;
           } else if(get.eq(i).attr("src") === "images/scenery-nine.jpg"){
               array[i] = 5;
           } else if(get.eq(i).attr("src") === "images/scenery-six.jpg"){
               array[i] = 6;
           } else if(get.eq(i).attr("src") === "images/scenery-seven.jpg"){
               array[i] = 7;
           } else if(get.eq(i).attr("src") === "images/scenery-eight.jpg"){
               array[i] = 8;
           } else if(get.eq(i).attr("src") === "images/scenery-five.jpg"){
               array[i] = 9;
           }
       }
   }

   var getnum = function () {
       if(offest === 0){
           $(".circle li").eq(array[0]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -1000){
           $(".circle li").eq(array[1]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -2000){
           $(".circle li").eq(array[2]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -3000){
           $(".circle li").eq(array[3]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -4000){
           $(".circle li").eq(array[4]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -5000){
           $(".circle li").eq(array[5]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -6000){
           $(".circle li").eq(array[6]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -7000){
           $(".circle li").eq(array[7]-1).addClass("new").siblings().removeClass("new");
       } else if(offest === -8000){
           $(".circle li").eq(array[8]-1).addClass("new").siblings().removeClass("new");
       }
   }

   $(".circle li").click(function () {
       clearInterval(flag3);
       var now = $(".circle li").index(this);
       $(".circle li").eq(now).addClass("new").siblings().removeClass("new");
       for(var i = 0; i < 9 ; i++){
           if ((array[i]-1) == now){
               offest = -1000 * i;
               value = offest + "px";
               $("#select-photo").css("marginLeft",value);
           }
       }
       flag3 = setInterval(function () {
           nextphoto();
       },3000);
   })
});

/**************************************************************************************************************/
$(document).ready(function () {
    $("#boring").mouseover(function () {
        $("#boringclick").css("display","block");
        $("#happyclick,#unhappyclick,#call-meclick").css("display","none");
    });
    $("#happy").mouseover(function () {
        $("#happyclick").css("display","block");
        $("#boringclick,#unhappyclick,#call-meclick").css("display","none");
    });
    $("#unhappy").mouseover(function () {
        $("#unhappyclick").css("display","block");
        $("#happyclick,#boringclick,#call-meclick").css("display","none");
    });
    $("#call-me").mouseover(function () {
        $("#call-meclick").css("display","block");
        $("#happyclick,#unhappyclick,#boringclick").css("display","none");
    });
})

