import React from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'
import tweakpane from 'https://cdn.skypack.dev/tweakpane'
import { useTweaks } from 'https://cdn.skypack.dev/use-tweaks'

const ROOT_NODE = document.querySelector('#app')

const App = () => {
  const { speed, diff, items, pad, direction, translate, spill, state, reverse, scale, inset, outset } =
    useTweaks({
      speed: 10,
      spill: false,
      scale: { value: 1, min: 0.1, max: 2, step: 0.1 },
      items: { value: 10, min: 1, max: 20, step: 1 },
      state: {
        value: 'running',
        options: ['running', 'paused'],
      },
      translate: {
        value: 'items',
        options: ['track', 'items'],
      },
      direction: {
        value: 'horizontal',
        options: ['horizontal', 'vertical'],
      },
      pad: { value: false, name: 'Pad out' },
      diff: false,
      reverse: false,
      inset: { value: 0, min: -10, max: 10, step: 0.1 },
      outset: { value: 0, min: -10, max: 10, step: 0.1 },
    })

  const renderStamp = Date.now()
  return (
    <div
      className="container"
      data-direction={direction}
      data-pad={pad}
      data-pad-diff={diff}
      data-translate={translate}
      data-play-state={state}
      data-spill={spill}
      data-reverse={reverse}
      style={{ '--speed': speed, '--count': items, '--scale': scale, '--inset': inset, '--outset': outset }}
    >
      <ul>
        {pad && translate === 'track'
          ? new Array(items).fill(0).map((item, index) => {
              return (
                <li
                  aria-hidden="true"
                  className="pad pad--negative"
                  key={`pad-negative-${renderStamp}--${index}`}
                >
                  {index}
                </li>
              )
            })
          : null}
        {new Array(items).fill(0).map((item, index) => {
          return (
            <li key={`index-${renderStamp}--${index}`} style={{ '--index': index }}>
              {index}
            </li>
          )
        })}
        {pad && translate === 'track'
          ? new Array(items).fill(0).map((item, index) => {
              return (
                <li
                  aria-hidden="true"
                  className="pad pad--positive"
                  key={`pad-positive-${renderStamp}--${index}`}
                >
                  {index}
                </li>
              )
            })
          : null}
      </ul>
    </div>
  )
}

render(<App />, ROOT_NODE)
