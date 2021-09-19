import avatar from "@/assist/avatar.png"

export default {
  state: {
    cards2: [
      /**
       * 如果parent为root，则划分到根结点
       * 如果parent相同，则为一个节点下横排节点
       */
      {
        id: '001',
        // parent 父节点 ID；width 宽度 默认 auto（flex-grow）；height 默认 fit-content；dictation 内容方向 默认 col
        layout: {parent: 'root', width: '70%', dictation: 'row'},
        config: {title: '用户信息', type: 'user'},
        props: {
          avatar,
          username: '无双',
          options: [{
            label: '账号ID',
            value: '2988947947',
          }, {
            label: '实名认证',
            value: '未实名',
            extra: {
              content: '立即实名',
              color: 'blue',
              onClick: () => {}
            }
          }]
        },
        events: [{
          key: 'onClickOption',
          code: `(a) => console.log(a)`
        }],
        childrens: [{
          title: '公告', type: 'article',
        }]
      }, {
        id: '002',
        layout: {parent: 'root'},
        config: {title: '用户信息', type: 'user', dictation: 'col'},
        props: {
          avatar,
          username: '无双',
          options: [{
            label: '账号ID',
            value: '2988947947',
          }, {
            label: '实名认证',
            value: '未实名',
            extra: {
              content: '立即实名',
              color: 'blue',
              onClick: () => {}
            }
          }]
        },
        events: [{
          key: 'onClickOption',
          code: `(a) => console.log(a)`
        }],
      }, {
        id: '003',
        layout: {parent: '002'},
        config: {title: '用户信息', type: 'shortcut'},
      }, {
        id: '004',
        layout: {parent: '002'},
        config: {title: '最近访问', type: 'chart-line'},
      }
    ],
    cards: {
      left: [{
        title: '用户信息', type: 'user',
        props: {
          avatar,
          username: '无双',
          options: [{
            label: '账号ID',
            value: '2988947947',
          }, {
            label: '实名认证',
            value: '未实名',
            extra: {
              content: '立即实名',
              color: 'blue',
              onClick: () => {}
            }
          }]
        },
        events: [{
          key: 'onClickOption',
          code: `(a) => console.log(a)`
        }],
        childrens: [{
          title: '公告', type: 'article',
        }]
      }, {
        title: '订单', type: 'table',
      }, {
        title: '最近访问',
        type: 'shortcut'
      }, {
        title: '最近访问',
        type: 'chart-line'
      }, {
        title: '数据',
        type: 'ant-table'
      }],
      right: [{
        title: '用户信息', type: 'user',
        props: {
          avatar,
          username: '无双',
          options: [{
            label: '账号ID',
            value: '2988947947',
          }, {
            label: '实名认证',
            value: '未实名',
            extra: {
              content: '立即实名',
              color: 'blue',
              onClick: () => {}
            }
          }]
        },
      }, {
        title: '公告', type: 'article',
        props: {
          onClick: value => {
            console.log('%cMyProject%cline:16%cvalue', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', value, this)
          },
          data: [{
            date: new Date(),
            title: '测试公告',
            description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
            url: 'http://www.baidu.com'
          }, {
            date: new Date(),
            title: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
            description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
            url: 'http://www.baidu.com'
          }, {
            date: new Date(),
            title: '测试公告',
            description: '测试公告测试公告测试公告测试公告测试公告测测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告试公告测试公告测试公告测试公告',
            url: 'http://www.baidu.com'
          }]
        }
      }, {
        title: '费用信息',
        type: 'counter'
      }, {
        title: '访问管理',
        type: 'indicator'
      }, {
        title: '最近访问',
        type: 'chart-line'
      }, {
        title: '镜像信息',
        type: 'key-value'
      }]
    }
  }
}