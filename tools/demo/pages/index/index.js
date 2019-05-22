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
