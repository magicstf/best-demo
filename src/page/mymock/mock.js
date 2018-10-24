import Mock from 'mockjs';
const data1 = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  mock: false,
  success: true,
  'data|10-50': [{
    'author': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "create_at": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }]
});
const data2 = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  mock: false,
  success: true,
  'data|10-50': [{
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }]
});
export default {
  data1,data2
}

