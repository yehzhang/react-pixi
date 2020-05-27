import { Graphics as PixiGraphics } from '@pixi/graphics'
import { applyDefaultProps } from '../utils/props'

const Graphics = (root, props) => {
  const g = new PixiGraphics()
  g.applyProps = (instance, oldProps, newProps) => {
    const { draw, ...props } = newProps
    applyDefaultProps(instance, oldProps, props)

    if (oldProps.draw !== draw && typeof draw === 'function') {
      draw.call(g, g)
    }
  }

  return g
}

export default Graphics
