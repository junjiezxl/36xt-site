import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RoadmapSteps from './components/RoadmapSteps.vue'
import QuickCompare from './components/QuickCompare.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RoadmapSteps', RoadmapSteps)
    app.component('QuickCompare', QuickCompare)
  }
} satisfies Theme
