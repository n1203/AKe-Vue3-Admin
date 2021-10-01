import avatar from "@/assist/avatar.png"

export default {
  state: {
    cards: [
      /**
       * 如果parent为root，则划分到根结点
       * 如果parent相同，则为一个节点下横排节点
       */
      {
        id: '000000221',
        layout: {parent: 'root', width: '70%', dictation: 'col'},
        config: {title: '最近24小时流量', type: 'chart-line'}
      },
      {
        id: '00000022155',
        layout: {parent: '000000221', width: '100%', dictation: 'row'},
        config: {title: '最近24小时流量', type: 'chart-bar'}
      },{
        id: '000000221515',
        layout: {parent: '000000221', width: '100%', dictation: 'row'},
        config: {title: '最近24小时流量', type: 'chart-heatmap'}
      },
      {
        id: '000000222',
        layout: {parent: 'root', width: '30%', dictation: 'col'},
        config: {title: '负载状态', type: 'chart-dash-board'}
      }, {
        id: '000000223',
        layout: {parent: '000000222', width: '100%', dictation: 'row'},
        config: {title: 'CPU使用率', type: 'chart-dash-board'}
      }, {
        id: '000000224',
        layout: {parent: '000000222', width: '100%', dictation: 'row'},
        config: {title: '内存使用率', type: 'chart-dash-board'}
      }],
  }
}