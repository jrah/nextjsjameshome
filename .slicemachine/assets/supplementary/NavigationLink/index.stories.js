import MyComponent from '../../../../supplementary/NavigationLink';

export default {
  title: 'supplementary/NavigationLink'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"navigation_link","items":[{"linkurl":{"link_type":"Web","url":"https://prismic.io"},"linktext":"synthesize granular portals"},{"linkurl":{"link_type":"Web","url":"https://slicemachine.dev"},"linktext":"brand 24/7 e-commerce"}],"primary":{"linkurl":{"link_type":"Web","url":"http://google.com"},"linktext":[{"type":"paragraph","text":"Ea consequat aliqua laboris dolore aliqua sint. Enim fugiat in duis.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _MultiLevelNavigation = () => <MyComponent slice={{"variation":"multiLevelNavigation","name":"Multi-Level Navigation","slice_type":"navigation_link","items":[{"linkurl":{"link_type":"Web","url":"https://prismic.io"},"linktext":"benchmark ubiquitous supply-chains"},{"linkurl":{"link_type":"Web","url":"https://slicemachine.dev"},"linktext":"transition collaborative channels"},{"linkurl":{"link_type":"Web","url":"http://google.com"},"linktext":"enable turn-key convergence"},{"linkurl":{"link_type":"Web","url":"https://slicemachine.dev"},"linktext":"transform extensible platforms"},{"linkurl":{"link_type":"Web","url":"https://slicemachine.dev"},"linktext":"strategize scalable systems"},{"linkurl":{"link_type":"Web","url":"https://slicemachine.dev"},"linktext":"evolve leading-edge deliverables"}],"primary":{"linktext":"extend synergistic systems","linkurl":{"link_type":"Web","url":"http://twitter.com"}},"id":"_MultiLevelNavigation"}} />
_MultiLevelNavigation.storyName = 'Multi-Level Navigation'
