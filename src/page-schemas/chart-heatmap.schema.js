import avatar from "@/assist/avatar.png"

export default {
  state: {
    cards: [
      /**
       * 如果parent为root，则划分到根结点
       * 如果parent相同，则为一个节点下横排节点
       */
      {
        id: '00lin34a0221',
        layout: {parent: 'root', width: '100%', dictation: 'col'},
        config: {title: '热力图', type: 'chart-heatmap'},
        props: {
          // height: 600,
        }
      }],
  }
}