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
}]