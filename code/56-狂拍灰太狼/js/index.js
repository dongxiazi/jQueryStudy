$(function () {
    //1.监听游戏规则的点击
    $(".rules").click(function () {
        $(".rule").stop().fadeIn(100);//淡入
    });

    //2.监听关闭按钮的点击
    $(".close").click(function () {
        $(".rule").stop().fadeOut(100);//淡出
    });

    //3.监听开始游戏按钮的点击
    $(".start").click(function () {
        $(this).stop().fadeOut(100);


        //调用处理进度条的方法
        progressHandler();


    });
    //4.监听重新开始按钮的点击
    $(".restart").click(function () {
        $(this).parent().stop().fadeOut(100);
       progressHandler();
    });

    //定义一个专门处理进度条的方法
    function progressHandler() {
        //重新设置进度条宽度
        $(".progress").css({
            width: 180
        });
        //开启定时器处理进度条
        var timer = setInterval(function () {
            //拿到进度条当前宽度
            var progressWidth = $(".progress").width();
            //减少当前宽度
            progressWidth -= 1;
            //重新给进度条赋值宽度
            $(".progress").css({
                width: progressWidth
            });
            //监听进度条是否走完
            if (progressWidth <= 0) {
                //已经走完了
                //关闭定时器
                clearInterval(timer);
                //显示重新开始页面
                $(".mask").stop().fadeIn(100);
            }
        }, 10);

    }


});