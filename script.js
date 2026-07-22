/* =====================================================================
   SCRIPT.JS — rendering + behavior. You shouldn't need to edit this
   file to update your content — go edit content.js instead.
   ===================================================================== */

(function () {
  const DATA = window.SITE_CONTENT || {};

  /* -------------------------------------------------------------
     Small icon library for project cards. Add a new key here if
     content.js references an icon name that isn't listed yet.
     ------------------------------------------------------------- */
  const ICONS = {
    route: `<path d="M8 45 Q20 15 30 30 Q40 45 52 12" fill="none" stroke="#c1443a" stroke-width="3" stroke-linecap="round"/><circle cx="8" cy="45" r="3" fill="#24314f"/><circle cx="52" cy="12" r="3" fill="#24314f"/>`,
    plate: `<ellipse cx="30" cy="34" rx="20" ry="14" fill="none" stroke="#c1443a" stroke-width="3"/><path d="M14 24 Q30 10 46 24" fill="none" stroke="#24314f" stroke-width="2"/>`,
    radar: `<circle cx="30" cy="30" r="18" fill="none" stroke="#24314f" stroke-width="2"/><path d="M30 30 L30 14 M30 30 L42 38" stroke="#c1443a" stroke-width="3" stroke-linecap="round"/>`,
    code: `<path d="M20 18 L8 30 L20 42 M40 18 L52 30 L40 42" fill="none" stroke="#24314f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 12 L26 48" stroke="#c1443a" stroke-width="2.5" stroke-linecap="round"/>`,
    chart: `<path d="M10 48 V22 M24 48 V12 M38 48 V28 M52 48 V18" stroke="#24314f" stroke-width="4" stroke-linecap="round"/><path d="M8 48 H54" stroke="#c1443a" stroke-width="2"/>`
  };

  /* Ribbon icon + stroke color, keyed by activity badge type. */
  const RIBBON_PRESETS = {
    win:         { stroke: "#c1443a", glyph: `<circle cx="22" cy="17" r="6" fill="none" stroke="#c1443a" stroke-width="2"/>` },
    finalist:    { stroke: "#24314f", glyph: `<circle cx="22" cy="17" r="6" fill="none" stroke="#24314f" stroke-width="2"/>` },
    speaker:     { stroke: "#24314f", glyph: `<path d="M17 17 L20 20 L27 13" fill="none" stroke="#24314f" stroke-width="2" stroke-linecap="round"/>` },
    participant: { stroke: "#24314f", glyph: `<path d="M16 20 h12 M22 14 v12" stroke="#24314f" stroke-width="2" stroke-linecap="round"/>` }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function dotsHtml(level) {
    let out = "";
    for (let i = 1; i <= 3; i++) {
      out += `<i class="${i <= level ? "filled" : ""}"></i>`;
    }
    return `<span class="dots">${out}</span>`;
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    const el = document.getElementById("about-stats");
    if (!el || !Array.isArray(DATA.aboutStats)) return;
    el.innerHTML = DATA.aboutStats.map(stat => `
      <div class="stat-card sketchy">
        <div class="num">${escapeHtml(stat.num)}</div>
        <div class="label">${escapeHtml(stat.label)}</div>
      </div>
    `).join("");
  }

  /* ---------------- PROJECTS ---------------- */
  function renderProjects() {
    const el = document.getElementById("projects-board");
    if (!el || !Array.isArray(DATA.projects)) return;
    el.innerHTML = DATA.projects.map(p => `
      <article class="index-card sketchy">
        <div class="pin"></div>
        <svg class="icon" viewBox="0 0 60 60">${ICONS[p.icon] || ICONS.code}</svg>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <div class="tag-row">${(p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        <a class="view" href="${p.link || "#"}">${escapeHtml(p.linkLabel || "view →")}</a>
      </article>
    `).join("");
  }

  /* ---------------- SKILLS ---------------- */
  function renderSkills() {
    const el = document.getElementById("skills-groups");
    if (!el || !Array.isArray(DATA.skillGroups)) return;
    el.innerHTML = DATA.skillGroups.map(group => `
      <div class="skill-group">
        <h3 class="group-tab">${escapeHtml(group.category)}</h3>
        <ul class="skill-list">
          ${group.skills.map(s => `
            <li class="skill-chip sketchy">
              <span class="skill-name">${escapeHtml(s.name)}</span>
              ${dotsHtml(s.level)}
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  }

  /* ---------------- EXPERIENCE ---------------- */
  function renderExperience() {
    const el = document.getElementById("timeline");
    if (!el || !Array.isArray(DATA.experience)) return;
    el.innerHTML = DATA.experience.map(job => `
      <div class="timeline-item">
        <div class="dot"></div>
        <span class="date">${escapeHtml(job.date)}</span>
        <h4>${escapeHtml(job.role)}</h4>
        <div class="company-line">
          <a class="company-link" href="${job.companyUrl || "#"}" target="_blank" rel="noopener">💼 ${escapeHtml(job.company)}</a>
        </div>
        <ul class="role-bullets">
          ${job.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        ${job.tags && job.tags.length ? `<div class="tag-row">${job.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
    `).join("");
  }

  /* ---------------- TECHNICAL ACTIVITIES ---------------- */
  function renderActivities() {
    const el = document.getElementById("activities-grid");
    if (!el || !Array.isArray(DATA.activities)) return;
    el.innerHTML = DATA.activities.map(a => {
      const preset = RIBBON_PRESETS[a.badge] || RIBBON_PRESETS.participant;
      return `
        <article class="activity-card sketchy">
          <svg class="ribbon" viewBox="0 0 44 52">
            <path d="M22 2 L34 8 V26 L22 34 L10 26 V8 Z" fill="none" stroke="${preset.stroke}" stroke-width="2.5"/>
            <path d="M14 30 L11 50 L22 44 L33 50 L30 30" fill="none" stroke="#24314f" stroke-width="2"/>
            ${preset.glyph}
          </svg>
          <div class="activity-body">
            <div class="activity-top">
              <h3>${escapeHtml(a.name)}</h3>
              <span class="activity-badge ${escapeHtml(a.badge)}">${a.badgeLabel}</span>
            </div>
            <span class="meta">${escapeHtml(a.meta)}</span>
            <p>${escapeHtml(a.description)}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  /* ---------------- render everything, then wire up behavior ---------------- */
  function renderAll() {
    renderAbout();
    renderProjects();
    renderSkills();
    renderExperience();
    renderActivities();
  }

  function initBehavior() {
    /* reveal-on-scroll for sections */
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(i => io.observe(i));

    /* navbar: scrolled background */
    const headerEl = document.querySelector("header");
    const onScroll = () => headerEl.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* navbar: mobile hamburger toggle */
    const navToggle = document.getElementById("navToggle");
    const navList = document.getElementById("navList");
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navList.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }));

    /* navbar: active link tracking */
    const navLinks = document.querySelectorAll("a[data-nav]");
    const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => navIo.observe(s));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    initBehavior();
  });
})();
