Page({
  data: {
    array: [{
      mode: 'scaleToFill',
    }, ],
    src: '../../images/syllabus.jpg'
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
  }
})