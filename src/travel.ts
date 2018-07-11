import {isStyledElement, StyledElement} from './StyledElement'

export function* travel(ancestor: StyledElement): IterableIterator<StyledElement> {
    const walker = document.createTreeWalker(
        ancestor,
        NodeFilter.SHOW_ELEMENT,
        {
            acceptNode: node =>
                isStyledElement(node) ?
                    NodeFilter.FILTER_ACCEPT :
                    NodeFilter.FILTER_REJECT, // FIXME
        },
    )
    yield ancestor
    for (let next = walker.nextNode();
         next !== null;
         next = walker.nextNode()) {
        yield next as StyledElement
    }
}
