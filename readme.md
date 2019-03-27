# 尊宝新版 - vue 版本前端开发自述文档 #

## 技术栈
采用 vue + vuex + vue-router + vue-cli(webpack) 作为主要的技术体系进行实施

## 环境搭建
1. 安装Node.js 8.9 或更高版本 (推荐 8.11.0+) (官网下载 ：https://nodejs.org/zh-cn/download/)
3. 更新npm命令 cmd - > : npm install npm -g
5. 安装依赖模块 cmd - cd 到工程根目录下-> npm i

## webstorm 过滤
由于会加载大量的node_modules 模块，可以在webstorm中屏蔽该目录，包括打包后的dist目录 (设置参考：https://blog.csdn.net/andynikolas/article/details/76713982)


## 启动开发环境
cmd - >: cd 切换到根目录下 -> npm run dev

## 访问开发环境
默认访问地址为： http://localhost:8000<br/>
可以修改vue.config.js 中的 devServer.port = 8000 来修改端口<br/>

## 编译打包
cmd - >: cd 切换到根目录下 -> npm run build

## 代理解决跨域
由于开发过程中本地启动node服务，在vue.config.js中 通过 devServer.proxy属性配置代理，可以本地代理请求不同服务器下接口<br/>

## 目录结构
<pre>
|- public                  #任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们。(参考：https://cli.vuejs.org/zh/guide/html-and-static-assets.html)
    |-index.html           #项目入口文件，会被 html-webpack-plugin 处理
|- dist                    #编译打包后的项目代码目录
|- src                     #工程源码
|   |-api 			       #主要是封装了网络请求相关的API
|   |-common    		   #公共资源
      |-image              #公共图片
      |-stylus             #公共样式
        |-animate.css      #动画样式，没有引入项目，仅供参考使用
        |-my-mint.styl     #修改手机端mint-ui组件主题色样式文件
        |-transition.styl  #全局过渡动画样式文件
        |-variable.styl    #全局变量样式文件
        |-mixin.styl       #全局方法样式文件
      |-js                 #公共脚本
        |-cache.js         #本地缓存 localStorage
        |-config.js        #项目公共配置文件
        |-dom.js           #dom操作相关工具封装
        |-extend.js        #项目依赖扩展
        |-filters.js       #全局过滤器封装
        |-mixin.js         #项目业务逻辑公共代码
        |-mobile-extend.js #手机端依赖扩展
        |-pc-extend.js     #pc端依赖扩展
        |-prototype.js     #javascript内置对象方法扩展
        |-util.js          #工具方法集
        |-validtor.js      #验证正则集
|   |-components 		   #公共组件
|   |-pages 		       #页面级组件
|   |-router 			   #路由目录
      |-hook               #路由钩子，路由跳转前或后的钩子
      |-map                #路由地址
      |-index.js           #默认路由导出文件
|   |-store 			   #状态管理目录 (vuex中文网：https://vuex.vuejs.org/zh/guide/)
      |-actions.js         #处理异步修改状态数据，或封装多个Mutations状态数据修改
      |-getters.js         #store的计算属性，Getter 会暴露为 store.getters 对象，可以以属性的形式访问这些值
      |-index.js           #store目录默认导出文件
      |-mutation-types.js  #Mutation事件类型，定义Mutation事件名
      |-mutations.js       #Mutation事件，提交状态数据修改(所有状态数据修改必须通过提交Mubtation修改完成，方便数据修改跟踪，bug跟踪)
      |-state.js           #初始化状态数据
|- theme                   #项目引入element-ui组件，修改主题色生成的目录
|- element-variables.scss  #在该文件下修改 element-ui组件主题色， 安装 element-theme element-theme-chalk 插件并启动 et -i 命名生成 (参考：http://element.eleme.io/#/zh-CN/component/custom-theme)
|- .gitignore 			   #不需要提交到git仓库的目录可以在该文件内指定
|- package.json 		   #node 安装依赖
|- db.json                 #开发模拟数据
|- prod.server.js 		   #用于 测试启动 打包后dist目录代码脚本
|- postcssrc.js            #配置处理样式兼容的浏览器列表文件，package.json文件下的 browersList属性下已指定
|- babel.config.js  i      #babel及一些第三方组件库按需加载配置(比如element-ui)
|- vue.config.js           #vue-cli 3.0 脚手架配置文件
</pre>

## 代码规范
   1.确保每个组件的独立性，尽量避免将样式或图片放在common目录下，更加提倡的方式 是新建组件目录，目录下包含该组件的img,css,js <br/>

   2.几乎每一个功能模块都需要pc与手机端同时进行，所有业务代码js最后是抽出来写在 @/common/mixin.js下，方便代码复用与维护 <br/>

   3.代码一定要注意保持格式化(所有编辑器都有一键格式化代码快捷键)，提高代码阅读性，js代码统一风格，不要出现 “;” <br/>

   4.网络api规范：
<pre>
    请求传参格式 request payload:
    {
        data:{
           参数1,
           参数2,
           ...
        }
    }
</pre>        
<pre>
    响应数据格式 response:
    {
        code:'0',
        data:'修改成功',
        message:'成功'
    }
</pre>


## 如何调试我的代码?
1. 代码错误分为两种，一种是在编译阶段的错误，编译阶段的错误信息将打印在的 cmd 框中
2. 其他错误仍可以在chrome中的 console 里面找到

## 业务代码帮助文档
请移步：https://zb11.vip/business-help/business-help.html