import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RoadmapSteps from './components/RoadmapSteps.vue'
import QuickCompare from './components/QuickCompare.vue'
import BrokerTabs from './components/BrokerTabs.vue'
import InviteCard from './components/InviteCard.vue'
import ThemeEnhancer from './components/ThemeEnhancer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ThemeEnhancer)
    })
  },
  enhanceApp({ app }) {
    app.component('RoadmapSteps', RoadmapSteps)
    app.component('QuickCompare', QuickCompare)
    app.component('BrokerTabs', BrokerTabs)
    app.component('InviteCard', InviteCard)
  }
} satisfies Theme
