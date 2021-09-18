export default class CardEvent {
  events = {}
  /**
   * 事件模块
   * ```js
   * const event = new CardEvent({
   *  events: [{
   *    key: 'onClick',
   *    code: '() => console.log('aaa')' || () => console.log('aaa')
   *  }]
   * })
   * ```
   */
  constructor({events = []}) {
    events.forEach(({key, code}) => this.bind(key, code))
  }

  /**
   * 判断当前事件是否存在
   * @param {*} key // 事件key
   * @returns {boolean}
   */
  has(key) {
    return !!this.events[key]
  }

  /**
   * 执行触发事件
   * ```js
   * fire('onClick', {event: e, data: 'xxx'})
   * ```
   */
  fire(key, value) {
    const event = this.events[key]
    if (event) {
      try {
        event()(value)
      } catch (error) {
        console.error('执行触发事件错误', error);
      }
    }
  }

  /**
   * 绑定事件
   * @param {*} key 当前组件所绑定的事件
   * @param {*} runCode 当前组件执行的代码字符串或者函数
   * ```js
   * bind('onClick', `(a) => console.log(a)`)
   * => 'aaa'
   * bind('onClick', () => console.log('aaa'))
   * => 'aaa'
   * ```
   */
  bind(key, runCode) {
    try {
      const runtime = typeof runCode === 'function' || new Function(`return ${runCode}`)
      this.events[key] = runtime
  } catch (error) {
      console.error('绑定触发事件错误', error);
    }
  }
}