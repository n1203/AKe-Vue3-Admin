const avatar = new URL('../assist/avatar.png', import.meta.url).href

export default {
  state: {
    cards: [
      /**
       * 如果parent为root，则划分到根结点
       * 如果parent相同，则为一个节点下横排节点
       */
      {
        id: '001',
        // parent 父节点 ID；width 宽度 默认 auto（flex-grow）；height 默认 fit-content；dictation 内容方向 默认 col
        layout: {parent: 'root', width: '70%', dictation: 'col'},
        config: {title: '最近访问', type: 'shortcut'},
      }, {
        id: '0012222222',
        layout: {parent: '001', width: '100%', dictation: 'col'},
        config: {title: '最近访问', type: 'shortcut'},
      }, {
        id: '0012222222442222',
        layout: {parent: '0012222222', width: '100%', dictation: 'row'},
        config: {title: '访问数据', type: 'indicator'},
      }, {
        id: '0012222222442',
        layout: {parent: '0012222222', width: '100%', dictation: 'row'},
        config: {title: '系统信息', type: 'key-value'},
      }, {
        id: '0012222222234442',
        layout: {parent: '0012222222', width: '100%', dictation: 'row'},
        config: {title: '最近更新', type: 'article'},
        props: {
          data: [{
              date: new Date(),
              title: '测试公告',
              description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
              url: 'http://www.baidu.com'
            }, {
              date: new Date(),
              title: '测试公告',
              description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
              url: 'http://www.baidu.com'
            }, {
              date: new Date(),
              title: '测试公告',
              description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
              url: 'http://www.baidu.com'
            }, {
              date: new Date(),
              title: '测试公告',
              description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
              url: 'http://www.baidu.com'
            }]
        }
      },

      {
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
  }
}