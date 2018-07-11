import {applyComputedStyle} from './applyComputedStyle'
import {StyledElement} from './StyledElement'
import {travel} from './travel'

export function snapshotNode<T extends StyledElement>(node: T): T {
    const clonedNode = node.cloneNode(true) as StyledElement
    for (const descendant of travel(clonedNode)) {
        applyComputedStyle(descendant, descendant)
    }
    return clonedNode as T
}