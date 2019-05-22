# miniprogram-float-button
a fly out button(motion button)
##  安装组件

```
npm install --save miniprogram-float-button
```

## 用法及demo

![image](https://github.com/hst-Sunday/miniprogram-float-button/blob/master/static/floatButton.gif )

1. 在需要用到的wxml页面上添加以下代码 

```
<float-button 
  bind:toggle='toggle' 
  floatButtonChildData='{{floatButtonChildData}}' 
  right="{{120}}" 
  bottom="{{120}}" 
  mainImg="{{mainImg}}"
></float-button>
```   

2. 在相应的小程序js文件添加以下代码 

```
function hello() {
  // eslint-disable-next-line no-console
  console.log('say hello')
}

Page({
  data: {
    floatButtonChildData: [{
      src: './images/frown.png',
      content: '不开心',
      onClick: hello
    },
    {
      src: './images/message.png',
      content: '我的信息',
      // eslint-disable-next-line no-console
      onClick: () => console.log('1')
    },
    {
      src: './images/user.png',
      content: '关于我',
      // eslint-disable-next-line no-console
      onClick: () => console.log('2')
    }
    ],
    mainImg: './images/plus.png',
    isOpen: false,
  },
  toggle(e) {
    // eslint-disable-next-line no-console
    console.log(e.detail)
  },
})
```   


3. 在相应的小程序json文件添加以下代码 

```
  "usingComponents": {
    "float-button": "/path/component"
  }
```

## base-modal 的属性和方法介绍如下：
#### 1.属性  
| 选项 | 描述 | 类型 | 默认值 |
|-----|------|-----|-------|
|bind:toggle | 点击modal取消按钮 | event | event |
|mainImg | 主按钮的图片 | image | 无 |
|floatButtonChildData | 子按钮数据(请按钮demo上的数据格式填写) | Array | 无 |
|right | 距离窗口右边的距离(单位:rpx) | Number | 100 |
|bottom | 距离窗口底部的距离(单位:rpx) | Number | 100 |

#### 2.方法   
| 方法名| 参数 | 描述 |
| ---- | ---- | -----| 
| open | 无 | 打开button|
| close | 无 | 关闭button |
   
## 开发 
  [可以看官方的文档](https://github.com/wechat-miniprogram/miniprogram-custom-component)

## 参考资料
  [react-motion-menu-button](https://github.com/hst-Sunday/react-motion-menu-button)