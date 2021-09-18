import CardEvent from './card-event'
import {Cards} from './index'
export default class CardBase {
  title

  type

  props = {}

  childrens = undefined

  content = undefined

  event = {}
  /**
   * ```js
   * const instance = new CardBase({
   *  title: '测试标题' , // 卡片标题
   *  type: 'user', // 卡片类型，用于获取对应卡片
   *  props: {}, // 卡片类型对应数据值
   *  childrens: [{
   *    type: 'user',
   *    props: {}
   *  }] // 卡片子集数据
   * })
   * ```
   */
  constructor({title, type, props, childrens, events}) {
    this.title = title
    this.type = type
    this.props = props
    this.content = Cards[type]
    // 如果有下一层数据
    if(childrens) {
      childrens = childrens.map(children => {
        children.content = Cards[type]
        return children
      })
    }
    this.childrens = childrens
    this.event = new CardEvent({events})
  }
}