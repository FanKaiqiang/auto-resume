function writeCode(oldCode,newCode,fn){
    let domCode =document.querySelector('#code')
    let n =0;
    let id =setInterval(()=>{
        n++
        domCode.innerHTML=Prism.highlight(oldCode+newCode.substring(0,n),Prism.languages.css)
        domCode.scrollTop=10000
        styleTag.innerHTML=oldCode+newCode.substring(0,n)
        if(n>=newCode.length){
            window.clearInterval(id)
            fn()
        }
    },25)
}

function writeMarkdown(resume,fn){
    let domResume =document.querySelector('#resume')
    let n =0;
    let id2 =setInterval(()=>{
        n++
        domResume.innerHTML=marked(resume.substring(0,n))
        domResume.scrollTop=10000
        if(n>=resume.length){
            window.clearInterval(id2)
            fn()
        }
    },25)
}
var result=`/* 马上就要找工作了 */

/* 我得做一份有点特色的简历 */

/* 说干就干，现在就开始做 */

/* 先初始化一下代码 */

* {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
}

/* 再来个代码框 */
#code {
    position: fixed;
    background: #E7EAED;
    left: 0;
    margin: 20px;
    width: 45%;
    height: 95vh;
    overflow: scroll;
    padding: 20px;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
}

/* 再换个背景颜色吧 */

body {
    background: #002B36;
}

/* 给代码加个高亮 */

.token.comment {
    color: slategray
}

.token.selector {
    color: #690;
}

.token.punctuation {
    color: #999
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}

/* 好了，可以正式开始写简历了 */

/* 先做一张用来写简历的纸吧 */

#resume {
    position: fixed;
    background: white;
    right: 0;
    margin: 20px;
    width: 45%;
    height: 95vh;
    overflow: scroll;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
}

/* 好了，开始写简历了！*/
`

var myResume =`# 樊凯强

具有3个月前端实习经历，工作勤恳认真，热爱学习新知识

## 求职意向

前端开发，擅长技能HTML、CSS、JavaScript等

## 教育经历
2015.9-2019.6 南昌大学 计算机科学与技术专业

在校期间主修了计算机技术、C/C++、Java、计算机网络、操作系统、数据结
构、数据库、软件工程等课程。

英语 CET4 425分以上。

## 实习经历
2018.7-2018.10 宁波弘泰水利信息科技有限公司 前端开发

实习期间在公司的软件开发部工作，接触到了许多项目，并且参与了其中的维
护，对项目的开发及结构有了更深地了解。

同时期间曾多次出差，代表公司前往甲方了解需求并协助给出解决，了解了整
个项目运作的过程。

## 联系方式
邮箱：1574989439@qq.com

## 个人主页
博客链接：http://franko.top/

GitHub链接：https://github.com/FanKaiqiang

## 自我评价
本人做事认真，细致，严谨。
有较强的团队合作能力，沟通能力和工作能力。
有较强的抗压能力，踏实肯干。
乐意不断学习新技术，具有强烈的求知欲。
具有良好的前端编程能力和编程习惯，致力于代码的整体结构规范及优化。`

var result2=`/* 好了，这个简历是用Markdown语法写的 */

/* 现在再对这个简历的样式进行一些完善 */

#resume{
    font-family: 楷体;
    padding:20px
}
#resume>p{
    padding:5px 20px;
}

/* 来给简历加上一些3D效果吧 */

html {
    perspective: 1000px;
}
#code{
    transform: rotateY(10deg) translateZ(-100px) ;
}
#resume{
    transform-origin: 1450px 1450px;
    transform: rotateY(-10deg) translateZ(100px) ;
}

/*即将大功告成了，加个标题吧*/
.resumeWrapper::before{
    position: fixed;
    top:575px;
    left:575px;
    content:'樊凯强的简历';
    font-size:32px;
    font-family:楷体;
    color:white;

}

/*好了，我的动态简历做好了*/

/*觉得好的就给我点个赞吧！*/
`
writeCode('',result,()=>{
    writeMarkdown(myResume,()=>{
        writeCode(result,result2)
    })
})