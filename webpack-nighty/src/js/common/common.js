(function( window, undefined ) {
    var CommonUtil = function(){
        /**
         * 生成随机字符串
         * @param count 字符串长度
         * @returns {string}
         */
        this.generateRandomString = function(count){
            var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var res = "";
            for(var i = 0; i < count ; i ++) {
                var id = Math.ceil(Math.random()*35);
                res += chars[id];
            }
            return res;
        };

        /**
         * 生成唯一字符串
         * @returns {string} 一个18位的唯一字符串
         */
        this.generateOnlyString = function () {
            var date = new Date().getTime(); // 时间戳，13位
            var pre = this.generateRandomString(5);
            return pre + date;
        }
    };
    var CommonUtilInstance = new CommonUtil();
    window.CommonUtil = CommonUtilInstance;

    jQuery.fn.delay = function (time, func) {
        return this.each(function () {
            setTimeout(func, time);
        });
    };
    jQuery.fn.countDown = function (settings, to) {
        settings = jQuery.extend({
            startFontSize: '36px',
            endFontSize: '36px',
            duration: 1000,
            startNumber: 10,
            endNumber: 0,
            callBack: function () { }
        }, settings);
        return this.each(function () {
            if (!to && to != settings.endNumber) { to = settings.startNumber; }
            //设定倒计时开始的号码
            $(this).text(to);
            //页面动画
            $(this).animate({
                'font': settings.startFontSize
            }, settings.duration, '', function () {
                if (to > settings.endNumber) {
                    $(this).text(to - 1).countDown(settings, to - 1);
                }
                else {
                    settings.callBack(this);
                }
            });
        });
    };

})(window);