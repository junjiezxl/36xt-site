import { defineConfig } from 'vitepress'

const unifiedSidebar = [
  {
    text: '🏦 港卡开户与海外银行',
    collapsed: false,
    items: [
      { text: '🔥 港卡开户总工作台 (全流程/见证)', link: '/bank/' },
      { text: '众安银行 ZA Bank 开户与福利', link: '/bank/za-bank' },
      { text: '蚂蚁银行（澳门）开户与福利', link: '/bank/ant-bank-macau' },
      { text: '菲律宾 Maya 数字银行 (护照0门槛)', link: '/bank/ph-maya' },
      { text: '赴港开户一日通关 (中银/汇丰/众安)', link: '/bank/hk-walk-in' },
      { text: '汇丰 One 内地预申请+赴港激活', link: '/bank/hk-hsbc-remote' },
      { text: '护照远程直开账户 (iFAST / Wise)', link: '/bank/remote-accounts' },
      { text: '香港三卡组合怎么配', link: '/bank/hk-three-card' },
      { text: '首笔入金与激活避坑 (Wise/iFAST)', link: '/bank/first-deposit' },
      { text: '18家香港银行全景梯队与管理费', link: '/bank/hk-tier-guide' }
    ]
  },
  {
    text: '📱 海外手机卡与 eSIM',
    collapsed: false,
    items: [
      { text: '🔥 手机卡选卡工作台 (总览/速查)', link: '/sim/' },
      { text: '菲律宾 DITO eSIM (10元抗封首选)', link: '/sim/ph-dito' },
      { text: '香港 Club SIM (+852港卡黄金搭档)', link: '/sim/hk-clubsim' },
      { text: 'eSIM / 保号卡横向深度对比', link: '/sim/esim-compare' },
      { text: '英国 Giffgaff 保号 (2026封卡预警)', link: '/sim/uk-giffgaff' }
    ]
  },
  {
    text: '🧭 新手 0→1 出海路线图',
    collapsed: false,
    items: [
      { text: '🔥 新手 6 步通关工作台 (打卡表)', link: '/roadmap/' },
      { text: '出海工具全家桶一条龙总览', link: '/roadmap/toolkit-overview' },
      { text: '1. 核心证件准备与有效期避坑', link: '/roadmap/documents' },
      { text: '2. 零成本地址证明获取全攻略', link: '/roadmap/address-proof' },
      { text: '3. 开卡顺序与风控防关户守则', link: '/roadmap/order-and-risk' },
      { text: '4. 跨境资金闭环（合规版）', link: '/roadmap/compliant-fund-loop' }
    ]
  },
  {
    text: '📈 境外券商与合规指南',
    collapsed: false,
    items: [
      { text: '盈透 IBKR 开户与地址证明合规指南', link: '/broker/ibkr-guide' }
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
      {
        text: '🏦 港卡与海外银行',
        items: [
          { text: '🔥 港卡开户全流程 (2天1晚通关)', link: '/bank/' },
          { text: '🎁 众安银行 ZA Bank 开户与福利', link: '/bank/za-bank' },
          { text: '🎁 蚂蚁银行（澳门）开户与福利', link: '/bank/ant-bank-macau' },
          { text: '🇵🇭 菲律宾 Maya 数字银行 (0门槛)', link: '/bank/ph-maya' },
          { text: '🛫 汇丰 One 内地预申请+赴港激活', link: '/bank/hk-hsbc-remote' },
          { text: '🇬🇧 护照远程直开 (iFAST / Wise)', link: '/bank/remote-accounts' },
          { text: '⚡ 首笔入金与激活避坑指南', link: '/bank/first-deposit' },
          { text: '📊 18家香港银行全景梯队总表', link: '/bank/hk-tier-guide' }
        ]
      },
      {
        text: '📱 海外手机卡',
        items: [
          { text: '🔥 手机卡选卡总览与保号对比', link: '/sim/' },
          { text: '🇵🇭 菲律宾 DITO eSIM (10元开卡)', link: '/sim/ph-dito' },
          { text: '🇭🇰 香港 Club SIM (港卡黄金搭档)', link: '/sim/hk-clubsim' },
          { text: '📊 eSIM / 保号卡横向对比', link: '/sim/esim-compare' },
          { text: '🇬🇧 英国 Giffgaff (封卡预警)', link: '/sim/uk-giffgaff' }
        ]
      },
      {
        text: '🧭 新手 0→1 路线图',
        items: [
          { text: '🔥 新手 6 步通关总览与打卡表', link: '/roadmap/' },
          { text: '🧰 出海工具全家桶一条龙', link: '/roadmap/toolkit-overview' },
          { text: '1. 核心证件准备与有效期避坑', link: '/roadmap/documents' },
          { text: '2. 零成本地址证明获取全攻略', link: '/roadmap/address-proof' },
          { text: '3. 开卡顺序与风控防关户守则', link: '/roadmap/order-and-risk' },
          { text: '4. 跨境资金闭环（合规版）', link: '/roadmap/compliant-fund-loop' }
        ]
      },
      { text: '📈 券商合规指南', link: '/broker/ibkr-guide' }
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
            noResultsText: '未找到相关教程，试试搜索“众安”“恒生”“DITO”“Maya”或“地址证明”',
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
