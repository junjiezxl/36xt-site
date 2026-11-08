import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '36星途',
  titleTemplate: ':title · 36星途 (36XT.COM)',
  description: '36星途 (36xt.com) - 探索世界，连接未来。面向中国用户的海外手机卡、海外银行卡申请与数字游民出海实操指南。从 0 到 1 搞定护照、地址证明、低成本保号卡与合规境外账户。',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://36xt.com'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '36星途 (36xt.com)' }],
    ['meta', { property: 'og:title', content: '36星途 36XT — 探索世界，连接未来' }],
    ['meta', { property: 'og:description', content: '从 0 到 1 搞定护照、地址证明、海外保号手机卡与境外银行账户，少走弯路、零踩坑。' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '36星途',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '🧭 新手 0 到 1 路线图',
        items: [
          { text: '通关总览与打卡清单', link: '/roadmap/' },
          { text: '第 1 步：核心证件准备', link: '/roadmap/documents' },
          { text: '第 2 步：零成本地址证明', link: '/roadmap/address-proof' },
          { text: '第 3 步：开卡顺序与防关户指南', link: '/roadmap/order-and-risk' }
        ]
      },
      {
        text: '📱 海外手机卡',
        items: [
          { text: '选卡总览与保号成本对比', link: '/sim/' },
          { text: '英国 Giffgaff 零月租保号教程', link: '/sim/uk-giffgaff' },
          { text: '香港 Club SIM 年费 6 港币教程', link: '/sim/hk-clubsim' }
        ]
      },
      {
        text: '🏦 海外银行卡',
        items: [
          { text: '境外账户总览与门槛对比', link: '/bank/' },
          { text: '赴港开户一日通关（汇丰/中银/众安）', link: '/bank/hk-walk-in' },
          { text: '护照远程直开账户（iFAST/Wise/OCBC）', link: '/bank/remote-accounts' }
        ]
      }
    ],

    sidebar: {
      '/roadmap/': [
        {
          text: '🧭 新手从 0 到 1 出海路线图',
          items: [
            { text: '通关总览与自查清单', link: '/roadmap/' },
            { text: '1. 核心证件准备与有效期避坑', link: '/roadmap/documents' },
            { text: '2. 海外地址证明获取全攻略', link: '/roadmap/address-proof' },
            { text: '3. 开卡顺序与风控防关户指南', link: '/roadmap/order-and-risk' }
          ]
        },
        {
          text: '下一步实操',
          items: [
            { text: '挑选第一张海外手机卡 →', link: '/sim/' },
            { text: '挑选第一张海外银行卡 →', link: '/bank/' }
          ]
        }
      ],
      '/sim/': [
        {
          text: '📱 海外手机卡 / eSIM 专区',
          items: [
            { text: '选卡总览与保号年费对比', link: '/sim/' },
            { text: '英国 Giffgaff 申请与激活全流程', link: '/sim/uk-giffgaff' },
            { text: '香港 Club SIM 保号与 eSIM 指南', link: '/sim/hk-clubsim' }
          ]
        },
        {
          text: '关联阅读',
          items: [
            { text: '← 返回新手 0 到 1 路线图', link: '/roadmap/' },
            { text: '前往海外银行卡专区 →', link: '/bank/' }
          ]
        }
      ],
      '/bank/': [
        {
          text: '🏦 海外银行卡与数字账户',
          items: [
            { text: '账户总览与开户门槛对比', link: '/bank/' },
            { text: '赴港开户一日通关攻略', link: '/bank/hk-walk-in' },
            { text: '远程护照直开数字账户对比', link: '/bank/remote-accounts' }
          ]
        },
        {
          text: '关联阅读',
          items: [
            { text: '前置必备：地址证明怎么弄？', link: '/roadmap/address-proof' },
            { text: '前置必备：风控防关户守则', link: '/roadmap/order-and-risk' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: {
            buttonText: '搜索教程 / 卡种...',
            buttonAriaLabel: '搜索教程'
          },
          modal: {
            noResultsText: '未找到相关教程，试试搜索“护照”“地址证明”“Giffgaff”或“汇丰”',
            resetButtonTitle: '清空搜索条件',
            footer: {
              selectText: '跳转',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },

    darkModeSwitchLabel: '外观主题',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '教程目录',
    returnToTopLabel: '返回顶部',

    footer: {
      message: '探索世界，连接未来。合规声明：本站内容仅供合法留学、商旅、海淘及个人合规跨境学习参考，严禁用于非法换汇、洗钱或账户买卖。政策随机构动态调整，请以官方最新公告为准。',
      copyright: 'Copyright © 2026 36星途 (36xt.com) · 36XT · All Rights Reserved'
    }
  }
})
