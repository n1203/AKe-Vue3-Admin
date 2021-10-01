export default [{
  path: '/',
  icon: 'InboxOutlined',
  meta: {
    title: '首页',
    key: 'index'
  },
}, {
  path: '/index',
  icon: 'InboxOutlined',
  meta: {
    title: '仪表盘',
    key: 'home'
  },
}, {
  path: '/chart',
  icon: 'InboxOutlined',
  meta: {
    title: '图表',
    key: 'chart'
  },
  children: [{
    meta: {
      key: 'chart-bar',
      title: '柱状图'
    },
    icon: 'InboxOutlined',
    path: '/chart/table',
  }, {
    meta: {
      key: "chart-line",
      title: "折线图"
    },
    icon: 'InboxOutlined',
    path: '/chart/line',
  }, {
    meta: {
      key: "chart-line-bar",
      title: "折柱图"
    },
    icon: 'InboxOutlined',
    path: '/chart/line-bar',
  }, {
    meta: {
      key: "chart-heatmap",
      title: "热力图"
    },
    icon: 'InboxOutlined',
    path: '/chart/heatmap',
  }, {
    meta: {
      key: "chart-dash-board",
      title: "环形图"
    },
    icon: 'InboxOutlined',
    path: '/chart/dash-board',
  }]
}, {
  meta: {
    key: 'list',
    title: '列表'
  },
  icon: 'InboxOutlined',
  path: '/list',
  children: [{
    meta: {
      key: 'list-table',
      title: '表格'
    },
    icon: 'InboxOutlined',
    path: '/list/table',
  }]
}, {
  meta: {
    key: 'icon',
    title: 'Icon'
  },
  icon: 'InboxOutlined',
  path: '/icon',
}, {
  meta: {
    key: '404',
    title: '缺省页面'
  },
  icon: 'InboxOutlined',
  path: '/404',
}]