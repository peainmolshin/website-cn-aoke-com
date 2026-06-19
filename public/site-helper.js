const siteConfig = {
  baseUrl: "https://website-cn-aoke.com",
  brand: "aoke"
};

const tipPool = [
  { icon: "💡", title: "新手指南", text: "欢迎访问我们的网站，更多帮助请查看页面提示。" },
  { icon: "📌", title: "功能提示", text: "你可以在右上角找到快捷入口，快速访问常用功能。" },
  { icon: "🔍", title: "搜索技巧", text: "使用关键词 " + siteConfig.brand + " 可精准查找相关内容。" }
];

const badgeList = [
  { label: siteConfig.brand, color: "#1e88e5" },
  { label: "官方", color: "#43a047" },
  { label: "帮助", color: "#fb8c00" }
];

function createTipCard(tipData) {
  const card = document.createElement("div");
  card.className = "tip-card";
  card.innerHTML = `<span class="tip-icon">${tipData.icon}</span>
    <div class="tip-content">
      <strong>${tipData.title}</strong>
      <p>${tipData.text}</p>
    </div>`;
  return card;
}

function createBadge(badgeData) {
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = badgeData.label;
  badge.style.backgroundColor = badgeData.color;
  return badge;
}

function buildAccessNotice() {
  const notice = document.createElement("div");
  notice.className = "access-notice";
  notice.innerHTML = `<p>🔗 当前服务地址：<a href="${siteConfig.baseUrl}" target="_blank" rel="noopener">${siteConfig.baseUrl}</a></p>
    <p>如需更多信息，请访问官网了解详情。</p>`;
  return notice;
}

function renderTipSection(container) {
  if (!container) return;
  const section = document.createElement("div");
  section.className = "tip-section";
  tipPool.forEach(item => section.appendChild(createTipCard(item)));
  container.appendChild(section);
}

function renderBadgeSection(container) {
  if (!container) return;
  const wrapper = document.createElement("div");
  wrapper.className = "badge-wrapper";
  badgeList.forEach(item => wrapper.appendChild(createBadge(item)));
  container.appendChild(wrapper);
}

function renderAccessNotice(container) {
  if (!container) return;
  container.appendChild(buildAccessNotice());
}

function initSiteHelper() {
  const root = document.getElementById("site-helper-root");
  if (!root) {
    console.warn("未找到 #site-helper-root 容器，页面助手未加载。");
    return;
  }
  renderAccessNotice(root);
  renderTipSection(root);
  renderBadgeSection(root);
}

document.addEventListener("DOMContentLoaded", initSiteHelper);