/* ==========================================================================
   MAIN.JS — logic hiển thị. Không cần chỉnh sửa file này để thêm nội dung,
   hãy chỉnh assets/js/data.js thay vào đó.
   ========================================================================== */

/* ---------- Nav toggle (mobile) ---------- */
function initNav(){
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

/* ---------- Brush divider SVG (signature motif, reused across pages) ---------- */
function brushRuleSVG(){
  return `<svg viewBox="0 0 1200 14" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,7 C150,2 300,11 450,6 C600,1 750,10 900,5 C1000,2 1100,9 1200,6"
      fill="none" stroke="#9C3626" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
  </svg>`;
}
function mountBrushRules(){
  document.querySelectorAll(".brush-rule").forEach(el => el.innerHTML = brushRuleSVG());
}

/* ---------- Modal (dùng chung cho video & trò chơi) ---------- */
function ensureModal(){
  if(document.querySelector(".modal-overlay")) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" aria-label="Đóng">✕</button>
      <div class="modal-title"></div>
      <div class="modal-body"></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModal(); });
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });
}
function openModal({ title, bodyHTML, kind }){
  ensureModal();
  const overlay = document.querySelector(".modal-overlay");
  const box = overlay.querySelector(".modal-box");
  box.classList.toggle("game-box", kind === "game");
  overlay.querySelector(".modal-title").textContent = title || "";
  overlay.querySelector(".modal-body").innerHTML = bodyHTML;
  overlay.classList.add("open");
}
function closeModal(){
  const overlay = document.querySelector(".modal-overlay");
  if(!overlay) return;
  overlay.classList.remove("open");
  overlay.querySelector(".modal-body").innerHTML = ""; // dừng video/game khi đóng
}

/* ---------- Trang Giáo trình ---------- */
function renderCourses(){
  const root = document.getElementById("course-grid");
  if(!root) return;
  if(!CONTENT.courses.length){
    root.innerHTML = `<div class="empty-note">Chưa có khoá học nào. Thêm khoá học trong assets/js/data.js</div>`;
    return;
  }
  root.innerHTML = CONTENT.courses.map(c => `
    <article class="course-card" data-category="${c.category}">
      <div class="course-top">
        <span class="course-level">${c.category}</span>
        <h3>${c.title}</h3>
        <p>${c.description || ""}</p>
      </div>
      ${c.materials && c.materials.length ? `
      <ul class="material-list">
        ${c.materials.map(m => `
          <li>
            <a class="material-link" href="${m.url}" target="_blank" rel="noopener">
              <span class="material-icon">${(m.type||"PDF").slice(0,3)}</span>
              <span class="fname">${m.label}</span>
              <span class="ftag">Xem / tải</span>
            </a>
          </li>`).join("")}
      </ul>` : ""}
      ${c.audios && c.audios.length ? `
      <div class="audio-block">
        <div class="audio-title">File nghe đi kèm</div>
        ${c.audios.map(a => `
          <div class="audio-item">
            <div class="audio-name">${a.name}</div>
            <audio controls preload="none" src="${a.src}"></audio>
          </div>`).join("")}
      </div>` : ""}
    </article>
  `).join("");

  // Filter chips
  const chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const val = chip.dataset.filter;
    document.querySelectorAll(".course-card").forEach(card => {
      card.style.display = (val === "all" || card.dataset.category === val) ? "" : "none";
    });
  }));
}

/* ---------- Trang Trò chơi ---------- */
function renderGames(){
  const root = document.getElementById("game-grid");
  if(!root) return;
  if(!CONTENT.games.length){
    root.innerHTML = `<div class="empty-note">Chưa có trò chơi nào. Thêm trò chơi trong assets/js/data.js</div>`;
    return;
  }
  root.innerHTML = CONTENT.games.map((g, i) => `
    <button class="game-card" data-i="${i}">
      <div class="game-thumb">${g.hanzi || "游"}</div>
      <div class="game-body">
        <h3>${g.title}</h3>
        <p>${g.description || ""}</p>
        <span class="game-tag">${g.tag || ""}</span>
      </div>
    </button>
  `).join("");

  root.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      const g = CONTENT.games[card.dataset.i];
      openModal({
        title: g.title,
        kind: "game",
        bodyHTML: `<div class="modal-frame-wrap game"><iframe src="${g.file}" title="${g.title}" loading="lazy"></iframe></div>`
      });
    });
  });
}

/* ---------- Trang Video ---------- */
function renderVideos(){
  const tabRoot = document.getElementById("topic-tabs");
  const gridRoot = document.getElementById("video-grid");
  if(!tabRoot || !gridRoot) return;

  if(!CONTENT.videoTopics.length){
    gridRoot.innerHTML = `<div class="empty-note">Chưa có video nào. Thêm video trong assets/js/data.js</div>`;
    return;
  }

  tabRoot.innerHTML = CONTENT.videoTopics.map((t, i) =>
    `<button class="chip ${i===0 ? "active" : ""}" data-topic="${i}">${t.topic}</button>`
  ).join("");

  function paintTopic(i){
    const topic = CONTENT.videoTopics[i];
    gridRoot.innerHTML = topic.videos.map((v, vi) => {
      const thumb = v.thumb || (v.platform === "youtube" ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : "");
      return `
      <button class="video-card" data-topic="${i}" data-v="${vi}">
        <div class="video-thumb" style="${thumb ? `background-image:url('${thumb}')` : "background:#222"}">
          <span class="video-platform">${v.platform === "tiktok" ? "TikTok" : "YouTube"}</span>
          <div class="play"><span>▶</span></div>
        </div>
        <div class="video-body"><h3>${v.title}</h3></div>
      </button>`;
    }).join("");

    gridRoot.querySelectorAll(".video-card").forEach(card => {
      card.addEventListener("click", () => {
        const v = CONTENT.videoTopics[card.dataset.topic].videos[card.dataset.v];
        if(v.platform === "youtube"){
          openModal({
            title: v.title,
            kind: "video",
            bodyHTML: `<div class="modal-frame-wrap"><iframe src="https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0" title="${v.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
          });
        } else if(v.platform === "tiktok"){
          const videoId = (v.url.match(/video\/(\d+)/) || [])[1] || "";
          openModal({
            title: v.title,
            kind: "video",
            bodyHTML: `<div class="tiktok-embed-holder">
              <blockquote class="tiktok-embed" cite="${v.url}" data-video-id="${videoId}" style="max-width:340px;min-width:280px;">
                <section></section>
              </blockquote>
            </div>`
          });
          // Nạp script nhúng TikTok (script tự chạy lại mỗi lần mở modal)
          const s = document.createElement("script");
          s.src = "https://www.tiktok.com/embed.js";
          document.querySelector(".modal-body").appendChild(s);
        }
      });
    });
  }

  paintTopic(0);
  tabRoot.querySelectorAll(".chip[data-topic]").forEach(chip => {
    chip.addEventListener("click", () => {
      tabRoot.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      paintTopic(chip.dataset.topic);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  mountBrushRules();
  renderCourses();
  renderGames();
  renderVideos();
});
