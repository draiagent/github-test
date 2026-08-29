const tools = [
  { title: '企業 AI 腦工作坊', url: 'enterprise-ai-brain.html' },
  { title: '形成性測驗', url: 'formative-quiz.html' },
  { title: 'flint-chart × AI to Agent', url: 'flint-chart-demo.html' },
  { title: 'YouTube 專業教學（動畫簡報）', url: 'youtube-slides/index.html' },
  { title: '外語腦英語方法教練', url: 'https://draiagent.github.io/brainswitch-english-method-coach/' },
  { title: 'AI to Agent 長期記憶架構', url: 'https://github.com/draiagent/ai-to-agent-memory' },
];

(function () {
  // nav.js lives at the site root, so its own directory is the base for all
  // internal links — works whether the including page is at root or nested,
  // and on a project GitHub Pages path like /github-test/.
  const script = document.currentScript;
  const base = script ? new URL('.', script.src).href : new URL('.', location.href).href;

  const nav = document.createElement('nav');
  nav.style.cssText = 'background:#1a1a2e;padding:12px 20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;';

  const home = document.createElement('a');
  home.href = base;
  home.textContent = '🏠 工具首頁';
  home.style.cssText = 'color:#e0e0e0;text-decoration:none;font-size:15px;font-weight:bold;';
  nav.appendChild(home);

  for (const tool of tools) {
    const a = document.createElement('a');
    a.href = new URL(tool.url, base).href;
    a.textContent = tool.title;
    a.style.cssText = 'color:#90caf9;text-decoration:none;font-size:15px;padding:4px 10px;border-radius:4px;background:#16213e;';
    nav.appendChild(a);
  }

  document.body.insertBefore(nav, document.body.firstChild);
})();
