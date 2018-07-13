# snapshot-node

[![Build Status](https://travis-ci.com/pinyin/snapshot-node.svg?branch=master)](https://travis-ci.com/pinyin/snapshot-node)

Clone a HTML node &amp; apply computed styles recursively to the cloned node.

This project is merged into `@pinyin/dom`

## Install

```bash
npm install snapshot-node --save
```

## Usage

```typescript
import {snapshotNode} from 'snapshot-node'

const target = document.getElementById('target')
const snapshot = snapshotNode(target)

// target element and its ancestors's computed styles will be saved as inline styles of snapshot's corresponding element.

```

See [test](./src/snapshotNode.test.ts) for a more complete example.

## Limitations

Only HTMLElement & SVGElements' styles are snapshotted.

## License

MIT
