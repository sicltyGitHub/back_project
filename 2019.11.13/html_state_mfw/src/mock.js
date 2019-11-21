// 引入mock
import Mock from 'mockjs'

// 使用mock   首页轮播图
Mock.mock('http://127.0.0.1:3434/api/v1/Index_swipe', 'get', {
  'ok': 1,
  'data': [
    {
      'month': '9',
      'day': '/Nov.2019 ',
      'text': '高山，草原，冰川，戈壁，星空，露营——你想象的大西北，我们都有',
      'image': 'https://p1-q.mafengwo.net/s15/M00/36/27/CoUBGV3FWN6AK46wABm_0wtdp-8759.png?imageMogr2%2Finterlace%2F1'
    },
    {
      'month': '8',
      'day': '/Nov.2019 ',
      'text': '『和你一起走遍全世界』18天墨西哥古巴的玛雅探秘',
      'image': 'https://b1-q.mafengwo.net/s15/M00/97/7D/CoUBGV3EF7CAMfq6AClI2uDFVFg589.png?imageMogr2%2Finterlace%2F1'
    },
    {
      'month': '7',
      'day': '/Nov.2019 ',
      'text': '当你我都消失不在后，你的名字依然长存在世。',
      'image': 'https://p3-q.mafengwo.net/s15/M00/DC/AE/CoUBGV3CyDSAdpEKAB88-bCllDg218.png?imageMogr2%2Finterlace%2F1'
    },
    {
      'month': '5',
      'day': '/Nov.2019 ',
      'text': '写信告诉你，今天海是什么颜色-摩旅环岛，胶片海南',
      'image': 'CoUBGV2_-iGAbjJOAB4EqZlOs1o827.712652fe.?imageMogr2%2Finterlace%2F1'
    }
  ]
})
