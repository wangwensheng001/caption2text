node -v
v16.9.1

https://blog.csdn.net/weixin_41003771/article/details/129287025

PostCSS plugin autoprefixer requires PostCSS 8

说明PostCSS 版本不对，需要指定版本执行，执行以下脚本：

cnpm install postcss-loader autoprefixer@8.0.0 postcss  -D



TODO
找到可以自定义的方法importScripts内部workbox-sw地址的方法





















<span id="stat">数量:0, 合计:0</span>
<span style="width:20px"></span>
<span id="position"></span><br />
<textarea ID="tbxWeightDetail" style="width:250px" width="250px" runat="server" TextMode="MultiLine" onchange="getPosition(this);calcWeight(this, true);" onkeyup="getPosition(this);calcWeight(this);" onclick="getPosition(this);" onblur="clearPosition(this);"></textarea>

<script>
    function calcWeight(input, c) {
        var a = [];
        input.value.replace(/\d+([\.]\d+){0,1}/g, function($0) {
            a.push($0);
        });
        var sum = eval(a.join("+")) || 0;
        document.getElementById("stat").innerHTML = "数量:" + a.length + ", 合计:" + sum.toFixed(2);
        if (c) {
            input.value = a.join("+");
        }
    }

    calcWeight(document.getElementById("tbxWeightDetail"));

    function getPosition(input) {
        var rng = event.srcElement.createTextRange();
        var length = 0; //设置初始位置
        input.focus();
        var scrollPosition = input.scrollTop; //获得滚动条的位置  
        var selectedRange = document.selection.createRange(); //创建文档选择对象
        rng.collapse(true);
        rng.select();
        var j = document.selection.createRange(); //为新的光标位置创建文档选择对象
        selectedRange.setEndPoint("StartToStart", j); //在以前的文档选择对象和新的对象之间创建对象
        var str = selectedRange.text; //获得对象的文本
        var re = new RegExp("[\\n]", "g");
        str = str.replace(re, ""); //过滤  
        length = str.length; //获得长度.也就是光标的位置  
        selectedRange.collapse(false);
        selectedRange.select(); //把光标恢复到以前的位置
        input.scrollTop = scrollPosition; //把滚动条恢复到以前的位置

        var a = [];
        str.replace(/\+/g, function($0) {
            a.push($0);
        });
        document.getElementById("position").innerHTML = "第" + (a.length + 1) + "个明细";
    }

    function clearPosition(input) {
        document.getElementById("position").innerHTML = "";
    }
</script>





















# caption2text

> 网页版字幕转文本工具，支持 ass 及 srt 格式批量转换

## 截图

![截图](./public/img/screenshot.png?raw=true)

## 自定义 Word 格式

* 克隆仓库

``` sh
git clone https://github.com/F-loat/caption2text.git
```

* 安装依赖

> 需要 [nodejs](https://nodejs.org/) 运行环境

``` sh
cd caption2text
npm i
```

* 运行项目

``` sh
npm run serve
```

* 调整模板

修改 `public/template.docx` 文件即可

## 赞赏

<p>
  <img alt="微信" src="https://img.alicdn.com/imgextra/i2/O1CN01VhAWVx25SV6pfoc7C_!!6000000007525-0-tps-720-720.jpg" width="24%" />
</p>
