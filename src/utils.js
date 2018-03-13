import reshape from 'reshape'
import expressions from 'reshape-expressions'


export function injectExpressions(html, toInject, cb) {
  return reshape({plugins: [expressions()]})
    .process(html)
    .then((r) => cb(null, r.output(toInject)))
}