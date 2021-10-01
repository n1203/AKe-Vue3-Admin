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