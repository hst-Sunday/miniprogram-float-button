// components/floatButton/floatButton.js
const childButtonToMainButtonDistance = 120
Component({

  ready() {
    this.animation = wx.createAnimation()
    this.childAnimation = wx.createAnimation()
    if (this.data.isOpen) {
      this._open()
    } else {
      this._close()
    }
  },
  /**
   * Component properties
   */
  properties: {
    isOpen: {
      type: Boolean,
      value: false
    },
    mainImg: {
      type: String,
      value: ''
    },
    floatButtonChildData: {
      type: Array,
      value: []
    },
    right: {
      type: Number,
      value: 100
    },
    bottom: {
      type: Number,
      value: 100
    }
  },

  /**
   * Component initial data
   */
  data: {},

  /**
   * Component methods
   */
  methods: {

    open() {
      this._open()
    },

    close() {
      this._close()
    },

    _toggle() {
      const isOpen = this.data.isOpen
      if (isOpen) {
        this._close()
      } else {
        this._open()
      }
      this.triggerEvent('toggle', {
        isOpen: this.data.isOpen
      })
    },

    _open() {
      const _this = this
      const animation = this.animation
      const childButtons = this.data.floatButtonChildData
      const toRight = this.data.right
      const toBottom = this.data.bottom
      let childAnimationData = []
      // let textAnimatinData = []
      animation.rotate(-225).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })

      childAnimationData = childButtons.map((item, index) => {
        const y = _this.__childrenButton(index).y
        const childAnimation = wx.createAnimation()
        const bottomY = (y + toRight) + 'rpx'
        const textY = (y + toBottom + 20) + 'rpx'
        childAnimation
          .rotate(360)
          .right(toRight + 'rpx')
          .bottom(bottomY)
          .scale(0.68)
          .step({
            duration: 200,
            timingFunction: 'ease'
          })
        const textStyle = 'opacity: 0;z-index: 99;position: fixed;right: ' + (toRight + 100) + 'rpx; bottom: ' + textY + ';'
        return {
          animation: childAnimation.export(),
          textStyle
        }
      })
      const textAnimation = wx.createAnimation()
      textAnimation.opacity(0).step()
      this.setData({
        animationData: animation.export(),
        childAnimationData,
        textAnimation: textAnimation.export(),
        isOpen: true
      }, () => {
        textAnimation.opacity(1).step({
          duration: 350
        })
        setTimeout(() => {
          this.setData({
            textAnimation: textAnimation.export(),
          })
        }, 50)
      })
    },


    _close() {
      // const _this = this
      const animation = this.animation
      const childButtons = this.data.floatButtonChildData
      const toRight = this.data.right
      const toBottom = this.data.bottom
      let childAnimationData = []
      // let textAnimatinData = []
      animation.rotate(180).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })
      childAnimationData = childButtons.map(() => {
        const childAnimation = wx.createAnimation()
        const textAnimation = wx.createAnimation()
        childAnimation
          .rotate(-360)
          .right(toRight + 'rpx')
          .bottom(toBottom + 'rpx')
          .scale(0.76)
          .step({
            duration: 200,
            timingFunction: 'ease'
          })
        textAnimation.opacity(0).step({
          duration: 350,
        })
        return {
          animation: childAnimation.export(),
          textAnimation: textAnimation.export(),
          textStyle: ''
        }
      })
      this.setData({
        animationData: animation.export(),
        childAnimationData,
        isOpen: false
      })
    },

    _clickChildrenButton(e) {
      const index = e.currentTarget.dataset.index
      const childButtons = this.data.floatButtonChildData
      childButtons[index].onClick()
    },

    __childrenButton(childrenIndex) {
      return {
        y: childButtonToMainButtonDistance * (childrenIndex + 1),
      }
    },
  }
})
