$(function () {
    //监听内容的时时输入
    // $(".comment").change(function () {
    //        alert("change");
    // });不能实时监听变化，只有失去焦点时才能监听到
    //想要实时监听input,textarea 变化固定方法
    $("body").delegate(".comment","propertyChange input",function () {
       //判断是否输入内容
        if ($(this).val().length>0){
            //让发布按钮可用
            $(".send").prop("disabled",false);
        }else {
            //让发布按钮不可用
            $(".send").prop("disabled",true);
        }
    });


    //监听发布按钮的点击
    $(".send").click(function () {
     //拿到用户的输入内容
        var $text=$(".comment").val();
        //根据内容创建节点
        var $weibo=createEle($text);
        //插入微博
        $(".messageList").prepend($weibo);
        $(".comment").val("");

    });
    //监听顶点击
    $("body").delegate('.infoTop',"click",function () {
     $(this).text(parseInt($(this).text())+1);
    });
    //监听踩点击
    $("body").delegate('.infoDown',"click",function () {
        $(this).text(parseInt($(this).text())-1);
    });
    //监听删除点击
    $("body").delegate('.infoDel',"click",function () {
        // $(this).parent().parent().parent().remove();
        //另一种方法找到指定的祖先
        $(this).parents(".info").remove();
    });
    //创建节点方法
    function createEle(text) {
        var $weibo=$(" <div class=\"info\">\n" +
            "            <p class=\"infoText\">"+text+"</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "            <span class=\"infoTime\">"+formateDate()+"</span>\n" +
            "            <span class=\"infohandle\">\n" +
            "             <a href=\"javascript:;\" class='infoTop'>0</a>\n" +
            "             <a href=\"javascript:;\" class='infoDown'>0</a>\n" +
            "             <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
            "            </span>\n" +
            "        </p>\n" +
            "        </div>");
        return $weibo;

    }

    //生成时间的方法
    function formateDate() {
     var  date=new Date();
     // console.log(date.getFullYear());
     // console.log(date.getMonth()+1);
     // console.log(date.getDay());
     // console.log(date.getHours());
     // console.log(date.getMinutes());
     // console.log(date.getSeconds());
        //2020-6-2 21:58:19
        var arr=[date.getFullYear()+"-",
            date.getMonth()+1+"-",
            date.getDay()+" ",
            date.getHours()+":",
            date.getMinutes()+":",
            date.getSeconds()];
       return arr.join("");
    }
});