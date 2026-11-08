# 36星途 (36xt.com) · 36XT

> **探索世界，连接未来。**
> 
> 面向中国用户的海外手机卡、海外银行卡申请与数字游民出海从 0 到 1 实操指南站。基于 **VitePress + Vue 3** 构建，纯静态输出，零服务器成本部署于 **Cloudflare Pages**。

---

## 品牌资产规范

- **中文品牌**：36星途
- **英文品牌**：36XT
- **主域名**：`36xt.com`
- **品牌简称**：星途
- **品牌口号**：探索世界，连接未来。

---

## 一、 本地预览与日常写教程方法

### 1. 一键本地启动预览
- **最简单方式**：直接双击项目根目录下的 [`start-dev.bat`](./start-dev.bat)。
- **命令行方式**（CMD 或终端）：
  ```bash
  npm.cmd run dev
  ```
- 浏览器访问 `http://localhost:5173` 即可实时预览，修改任意 `.md` 文件保存后网页毫秒级自动刷新！

### 2. 项目目录结构说明
```text
c:\code\yjm\
├── docs\
│   ├── index.md                        # 36星途门户首页
│   ├── roadmap\                        # 🧭 新手 0 到 1 出海路线图
│   ├── sim\                            # 📱 海外手机卡教程目录
│   ├── bank\                           # 🏦 海外银行卡教程目录
│   ├── public\                         # 品牌矢量图标 (logo.svg / favicon.svg / robots.txt)
│   └── .vitepress\
│       ├── config.mts                  # 顶部导航、侧边栏、站点元数据、页脚配置
│       └── theme\                      # 品牌星空主题样式与交互式打卡组件
├── start-dev.bat                       # Windows 双击一键启动本地预览
├── 一键发布更新.bat                    # Windows 双击全自动同步到 GitHub 与线上
└── package.json
```

### 3. 如何新增一篇自己的教程？
1. 在对应文件夹（例如 `docs/sim/`）下新建一个 Markdown 文件（可参考 `docs/template.md`），如 `us-tello.md`。
2. 打开 `docs/.vitepress/config.mts`，在 `nav` 和 `sidebar` 对应分组里加一行链接 `{ text: '美国 Tello 保号卡教程', link: '/sim/us-tello' }` 即可自动生成左侧菜单、右侧大纲与本地全文搜索索引！
3. 教程写好后，双击运行 [`一键发布更新.bat`](./一键发布更新.bat)，30 秒自动发布到线上！

---

## 二、 绑定 `36xt.com` 并免费上线到 Cloudflare Pages（全程 10 分钟）

### 第 1 步：推送代码到 GitHub 仓库
1. 登录你的 GitHub 账号，右上角点击 `+` -> `New repository`，仓库名建议填 `36xt-site`，勾选 **Private**，点击创建。
2. 双击运行本地的 [`一键发布更新.bat`](./一键发布更新.bat)，按提示填入你的 GitHub 仓库地址（如 `https://github.com/你的用户名/36xt-site.git`）即可自动完成初始化与首推。

### 第 2 步：将域名 `36xt.com` 托管到 Cloudflare
- 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)；
- 点击 **Add a domain** 输入 `36xt.com`，选择 **Free** 免费套餐；
- 按 Cloudflare 提示，将你购买域名的注册商（如 Spaceship、Porkbun、Namecheap 等）后台的 Nameservers 改为 Cloudflare 提供的 2 个专属 DNS 服务器地址。

### 第 3 步：在 Cloudflare Pages 绑定 GitHub 自动构建上线
1. 在 Cloudflare 后台左侧菜单点击 **Compute (Workers & Pages)** -> 点击 **Create** -> 切换到 **Pages** 标签 -> 选择 **Connect to Git**。
2. 授权关联你的 `36xt-site` GitHub 仓库。
3. **构建参数（Build settings）**：
   - **Framework preset**：`VitePress`
   - **Build command**：`npm run build`
   - **Build output directory**：`docs/.vitepress/dist`
4. 点击 **Save and Deploy**！
5. 在该 Pages 项目的 **Custom domains（自定义域）** 标签页里，添加 `36xt.com` 和 `www.36xt.com`。
   - Cloudflare 会全自动签发全球免费的永久 SSL 证书（HTTPS 小绿锁）并开启全球 Anycast CDN 加速！
