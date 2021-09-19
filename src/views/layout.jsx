
import Card from '@/layout/card'

const Layout = ({cards}) => {
  return cards.map((card, index) => {
    return <div key={index} style={`
    width: ${card.layout.width || 'auto'};
    height: ${card.layout.height || 'fit-content'};
  `} class={[
    'inline-flex',
    ['auto', undefined, ''].includes(card.layout.width) && 'flex-1',
    `flex-${card.layout.dictation || 'col'}`,
  ]}>
      {card.childCards.length ? <Layout cards={card.childCards} /> : <Card options={card} />}
    </div>
  })
}

export default Layout