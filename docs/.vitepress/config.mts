import { defineConfig } from 'vitepress'

const unifiedSidebar = [
  {
    text: '🏦 港卡开户',
    collapsed: false,
    items: [
      { text: '香港银行卡开户全流程', link: '/bank/' },
      { text: '众安银行（ZA Bank）', link: '/bank/za-bank' },
      { text: '蚂蚁银行（澳门）', link: '/bank/ant-bank-macau' },
      { text: '渣打银行（免赴港见证）', link: '/bank/sc-bank' },
      { text: '恒生银行（免赴港·1带3）', link: '/bank/hangseng-bank' },
      { text: '汇丰银行（内地预申+激活）', link: '/bank/hk-hsbc-remote' },
      { text: '赴港开户一日通关攻略', link: '/bank/hk-walk-in' },
      { text: '18家香港银行对比总表', link: '/bank/hk-tier-guide' }
    ]
  },
  {
    text: '🌍 远程 0 门槛银行卡',
    collapsed: false,
    items: [
      { text: '菲律宾 Maya 数字银行', link: '/bank/ph-maya' },
      { text: '英国 iFAST Global Bank', link: '/bank/ifast-global-bank' },
      { text: '英国 iFAST / Wise 远程开户', link: '/bank/remote-accounts' }
    ]
  },
  {
    text: '💳 港卡使用与入金',
    collapsed: false,
    items: [
      { text: '香港三卡组合怎么配', link: '/bank/hk-three-card' },
      { text: '首笔入金与激活避坑', link: '/bank/first-deposit' },
      { text: '港户入金嘉信与美股资金回流', link: '/bank/schwab-funding' },
      { text: '跨境资金闭环（合规版）', link: '/roadmap/compliant-fund-loop' }
    ]
  },
  {
    text: '📱 海外手机卡 / eSIM',
    collapsed: false,
    items: [
      { text: '海外手机卡选卡总览', link: '/sim/' },
      { text: '菲律宾 DITO（10元神卡）', link: '/sim/ph-dito' },
      { text: '香港 Club SIM（港卡搭档）', link: '/sim/hk-clubsim' },
      { text: '英国 Giffgaff（封卡预警）', link: '/sim/uk-giffgaff' },
      { text: '英国 Asda Mobile（备选）', link: '/sim/uk-asda' },
      { text: 'eSIM / 保号卡横向对比', link: '/sim/esim-compare' }
    ]
  },
  {
    text: '🧭 新手 0→1 出海路线',
    collapsed: false,
    items: [
      { text: '新手 6 步通关打卡表', link: '/roadmap/' },
      { text: '出海工具全家桶总览', link: '/roadmap/toolkit-overview' },
      { text: '1. 核心证件准备与避坑', link: '/roadmap/documents' },
      { text: '2. 零成本地址证明攻略', link: '/roadmap/address-proof' },
      { text: '3. 开卡顺序与防关户', link: '/roadmap/order-and-risk' }
    ]
  },
  {
    text: '📈 港美股券商与合规',
    collapsed: false,
    items: [
      { text: '盈透证券（IBKR）合规指南', link: '/broker/ibkr-guide' },
      { text: '港美股与港卡防休眠关户', link: '/broker/dormant-account-alert' }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: '36星途',
  titleTemplate: ':title · 36星途 (36XT.COM)',
  description: '36星途 (36xt.com) - 探索世界，连接未来。面向中国用户的海外手机卡、香港银行卡开户与数字游民出海实操指南。从 0 到 1 搞定护照、地址证明、低成本保号卡与合规境外账户。',
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
    ['meta', { property: 'og:description', content: '从 0 到 1 搞定护照、地址证明、海外保号手机卡与香港/海外银行账户，少走弯路、零踩坑。' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '36星途',

    nav: [
      { text: '首页', link: '/' },
      { text: '🏦 港卡开户', link: '/bank/', activeMatch: '^/bank/(?!ph-maya|remote-accounts|ifast-global-bank|hk-three-card|first-deposit)' },
      { text: '🌍 远程银行卡', link: '/bank/ph-maya', activeMatch: '^/bank/(ph-maya|remote-accounts|ifast-global-bank)' },
      { text: '💳 港卡使用', link: '/bank/hk-three-card', activeMatch: '^/bank/(hk-three-card|first-deposit)' },
      { text: '📱 海外手机卡', link: '/sim/', activeMatch: '^/sim/' },
      { text: '🧭 新手路线图', link: '/roadmap/', activeMatch: '^/roadmap/' },
      { text: '📈 券商合规', link: '/broker/ibkr-guide', activeMatch: '^/broker/' }
    ],

    sidebar: {
      '/bank/': unifiedSidebar,
      '/sim/': unifiedSidebar,
      '/roadmap/': unifiedSidebar,
      '/broker/': unifiedSidebar
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
            buttonText: '搜索教程 / 银行 / 卡种...',
            buttonAriaLabel: '搜索教程'
          },
          modal: {
            noResultsText: '未找到相关教程，试试搜索“众安”“恒生”“DITO”“Maya”“iFAST”或“地址证明”',
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
    sidebarMenuLabel: '全站导航目录',
    returnToTopLabel: '返回顶部',

    footer: {
      message: '探索世界，连接未来。合规声明：本站内容仅供合法留学、商旅、海淘及个人合规跨境学习参考，严禁用于非法换汇、洗钱或账户买卖。政策随机构动态调整，请以官方最新公告为准。',
      copyright: 'Copyright © 2026 36星途 (36xt.com) · 36XT · All Rights Reserved'
    }
  }
})
