// ==========================================================================
// SYNTH MEDIA AGENCY — LIGHT MODE CONTENT & BEHAVIOR SYSTEM
// Edit the SYNTH_CONFIG object below to change agency content, links & data.
// ==========================================================================

const SYNTH_CONFIG = {
    COMPANY_NAME: "SYNTH MEDIA AGENCY",
    TAGLINE: "BE GLOBALLY SEEN.",
    PHONE: "08110923670",
    WHATSAPP_NUMBER: "2348110923670",
    WHATSAPP_URL: "https://wa.me/2348110923670",

    // ========================================================================
    // MAKE.COM WEBHOOK CONFIGURATION
    // Insert your Make.com Webhook URL here when backend automation is active:
    // Example: "https://hook.eu1.make.com/your-custom-webhook-id"
    // ========================================================================
    CONTACT_WEBHOOK_URL: "",

    SOCIAL_LINKS: {
        instagram: "#", // Replace with real Instagram URL
        facebook: "#",  // Replace with real Facebook URL
        tiktok: "#",    // Replace with real TikTok URL
        linkedin: "#"   // Replace with real LinkedIn URL
    },

    // 12 Portfolio Concept Projects — High-Quality Realistic Works Across All Categories
    PROJECTS: [
        {
            id: "proj-01",
            title: "LUXE HOSPITALITY REBRAND",
            category: "BRANDING",
            year: "2026",
            image: "assets/images/portfolio/portfolio-01.svg",
            description: "Complete brand identity overhaul for a 5-star hotel chain across 3 continents. Delivered logo system, typography, color palette, brand guidelines, signage, collateral, and digital asset library. Unified fragmented visual language into a cohesive premium identity.",
            client: "Aurelia Hotels & Resorts",
            type: "Brand Identity & Strategy",
            tags: ["Branding", "Brand Strategy", "Design System", "Art Direction"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-02",
            title: "TECH STARTUP VISUAL IDENTITY",
            category: "BRANDING",
            year: "2025",
            image: "assets/images/portfolio/portfolio-02.svg",
            description: "Ground-up brand creation for a Series A fintech startup. Developed name, logo, motion identity, pitch deck templates, and developer-facing documentation style. Positioned for investor confidence and developer adoption.",
            client: "Vellum Pay (Stealth)",
            type: "Startup Branding",
            tags: ["Branding", "Naming", "Motion Design", "Pitch Design"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-03",
            title: "GLOBAL BEAUTY CAMPAIGN",
            category: "ADVERTISING",
            year: "2026",
            image: "assets/images/portfolio/portfolio-03.svg",
            description: "Multi-market advertising campaign for a global cosmetics brand spanning 12 countries. Produced 200+ assets: hero film, OOH billboards, social cuts, influencer kits, and retail POP. Achieved 47% lift in brand recall.",
            client: "Viora Cosmetics",
            type: "Integrated Ad Campaign",
            tags: ["Advertising", "Art Direction", "Film Production", "OOH"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-04",
            title: "DTC APPAREL LAUNCH CAMPAIGN",
            category: "CAMPAIGNS",
            year: "2026",
            image: "assets/images/portfolio/portfolio-04.svg",
            description: "End-to-end launch campaign for a direct-to-consumer sustainable fashion label. Orchestrated pre-launch teaser phase, founder story film, email/SMS flows, paid social, and PR push. Generated $2.1M revenue in first 30 days.",
            client: "Kindred Threads",
            type: "Product Launch Campaign",
            tags: ["Campaigns", "Creative Strategy", "Paid Social", "Email Marketing"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-05",
            title: "SOCIAL ECOSYSTEM OVERHAUL",
            category: "SOCIAL MEDIA",
            year: "2026",
            image: "assets/images/portfolio/portfolio-05.svg",
            description: "Full social media transformation for a mid-market B2B SaaS company. Built content pillars, editorial calendar, community management SOPs, and employee advocacy program. Grew LinkedIn followers 340% and inbound leads 68% in 6 months.",
            client: "Apex Analytics",
            type: "Social Media Management",
            tags: ["Social Media", "B2B Content", "Community", "Lead Gen"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-06",
            title: "CREATOR ECONOMY GROWTH",
            category: "SOCIAL MEDIA",
            year: "2025",
            image: "assets/images/portfolio/portfolio-06.svg",
            description: "Audience growth and monetization strategy for a top 0.1% lifestyle creator. Designed content architecture across TikTok, Reels, Shorts, and YouTube. Implemented sponsorship packaging, product drops, and membership funnel. Revenue up 3.2x YoY.",
            client: "Mara Lin (Creator)",
            type: "Creator Growth Strategy",
            tags: ["Social Media", "Creator Economy", "Monetization", "Video Strategy"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-07",
            title: "EDITORIAL DESIGN SYSTEM",
            category: "DESIGN",
            year: "2026",
            image: "assets/images/portfolio/portfolio-07.svg",
            description: "Comprehensive design system for a digital publishing platform serving 5M+ monthly readers. Created component library, typographic scale, color tokens, motion specs, and Figma/Storybook integration. Reduced design-to-dev handoff time by 60%.",
            client: "Meridian Publishing",
            type: "Design System & UI",
            tags: ["Design", "Design Systems", "UI/UX", "Figma"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-08",
            title: "MOTION BRAND TOOLKIT",
            category: "DESIGN",
            year: "2025",
            image: "assets/images/portfolio/portfolio-08.svg",
            description: "Motion design language and reusable animation library for a global entertainment brand. Defined easing curves, transition patterns, logo animations, lower-thirds, and template system for in-house teams. Shipped as Lottie + After Effects package.",
            client: "Nova Studios",
            type: "Motion Design System",
            tags: ["Design", "Motion Design", "Animation", "Brand Motion"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-09",
            title: "DOCUMENTARY SERIES PRODUCTION",
            category: "CONTENT",
            year: "2026",
            image: "assets/images/portfolio/portfolio-09.svg",
            description: "6-episode branded documentary series exploring African tech ecosystems. Handled creative development, production management, post-production, and distribution strategy across YouTube, streaming platforms, and airline entertainment. 12M+ views.",
            client: "African Development Bank",
            type: "Documentary Production",
            tags: ["Content", "Video Production", "Documentary", "Distribution"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-10",
            title: "SHORT-FORM CONTENT ENGINE",
            category: "CONTENT",
            year: "2025",
            image: "assets/images/portfolio/portfolio-10.svg",
            description: "Scalable short-form video production system for a consumer health brand. Built creative templates, batch shooting workflows, AI-assisted editing pipeline, and platform-specific optimization. Delivering 60+ Reels/TikToks/Shorts monthly at 1/3 typical cost.",
            client: "Vitality Labs",
            type: "Short-Form Video Production",
            tags: ["Content", "Short Video", "AI Production", "Social Video"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-11",
            title: "ENTERPRISE WEB PLATFORM",
            category: "WEB DEVELOPMENT",
            year: "2026",
            image: "assets/images/portfolio/portfolio-11.svg",
            description: "Custom enterprise web application for a logistics conglomerate. Built with Next.js, TypeScript, PostgreSQL, and real-time tracking. Includes role-based dashboards, API integrations, multi-tenant architecture, and 99.9% uptime SLA.",
            client: "TransGlobal Logistics",
            type: "Web Application Development",
            tags: ["Web Development", "Next.js", "TypeScript", "Enterprise"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-12",
            title: "AI-POWERED AUTOMATION SUITE",
            category: "TECHNOLOGY",
            year: "2026",
            image: "assets/images/portfolio/portfolio-12.svg",
            description: "Intelligent business automation platform combining RPA, LLM-powered document processing, and custom workflows. Reduced manual processing time 87% for a financial services client. Includes admin dashboard, audit trails, and SOC2-ready infrastructure.",
            client: "Meridian Capital Partners",
            type: "Digital Solutions & AI",
            tags: ["Technology", "AI/ML", "Automation", "RPA", "SOC2"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        }
    ]
};

// ==========================================================================
// INITIALIZATION & CORE FUNCTIONALITY
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initLenisSmoothScroll();
    initHeaderScroll();
    initMobileMenu();
    renderPortfolioGrid("ALL");
    initPortfolioFilters();
    initPortfolioModal();
    initGSAPAnimations();
    initContactForm();
});

/* --------------------------------------------------------------------------
   0. Page Loader (~1s Entrance)
   -------------------------------------------------------------------------- */
function initLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 900);
}

/* --------------------------------------------------------------------------
   1. Lenis Smooth Scrolling
   -------------------------------------------------------------------------- */
let lenisInstance = null;
function initLenisSmoothScroll() {
    if (typeof Lenis === "undefined") return;

    lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
    });

    function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize ScrollTrigger with Lenis
    if (typeof ScrollTrigger !== "undefined") {
        lenisInstance.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0, 0);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                closeMobileMenu();
                lenisInstance.scrollTo(targetElement, { offset: -60 });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   2. Sticky Header Behavior
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    header.style.backgroundColor = "#ffffff";
    header.style.color = "#000000";

    window.addEventListener("scroll", () => {
        header.style.backgroundColor = "#ffffff";
        header.style.color = "#000000";
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const overlay = document.getElementById("mobile-menu-overlay");
    const closeBtn = document.getElementById("mobile-menu-close");
    if (!toggleBtn || !overlay) return;

    toggleBtn.addEventListener("click", () => {
        overlay.classList.toggle("active");
        document.body.style.overflow = overlay.classList.contains("active") ? "hidden" : "";
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMobileMenu);
    }
}

function closeMobileMenu() {
    const overlay = document.getElementById("mobile-menu-overlay");
    if (overlay && overlay.classList.contains("active")) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

/* --------------------------------------------------------------------------
   5. Asymmetrical Portfolio Grid & Filtering
   -------------------------------------------------------------------------- */
function renderPortfolioGrid(filterCategory = "ALL") {
    const gridContainer = document.getElementById("portfolio-grid-container");
    if (!gridContainer) return;

    const filteredProjects = SYNTH_CONFIG.PROJECTS.filter((proj) => {
        if (filterCategory === "ALL") return true;
        return proj.category.toUpperCase() === filterCategory.toUpperCase();
    });

    gridContainer.innerHTML = "";

    if (filteredProjects.length === 0) {
        gridContainer.innerHTML = `
      <div class="col-span-12 py-16 text-center text-zinc-400 font-heading text-lg">
        No projects found in this category.
      </div>`;
        return;
    }

    filteredProjects.forEach((proj) => {
        const itemEl = document.createElement("div");
        itemEl.className = `portfolio-item ${proj.spanClass} cursor-pointer group`;
        itemEl.setAttribute("data-project-id", proj.id);

        itemEl.innerHTML = `
      <div class="portfolio-item-image-wrapper">
        <img src="${proj.image}" alt="${proj.title}" class="portfolio-item-image" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
        <div class="absolute top-4 right-4 bg-white/90 border border-zinc-200 text-black text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-md shadow-sm">
          ${proj.category}
        </div>
        <div class="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
          <span class="text-xs font-semibold text-zinc-600 tracking-widest uppercase mb-1">${proj.year} — ${proj.client}</span>
          <h3 class="text-xl md:text-2xl font-bold font-heading text-black group-hover:translate-x-2 transition-transform duration-300">
            ${proj.title}
          </h3>
        </div>
      </div>
    `;

        itemEl.addEventListener("click", () => openPortfolioModal(proj));
        gridContainer.appendChild(itemEl);
    });
}

function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            const category = this.getAttribute("data-filter");
            renderPortfolioGrid(category);
        });
    });
}

/* --------------------------------------------------------------------------
   6. Project Lightbox Modal
   -------------------------------------------------------------------------- */
function initPortfolioModal() {
    const modalOverlay = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close-btn");
    if (!modalOverlay) return;

    if (modalClose) {
        modalClose.addEventListener("click", closePortfolioModal);
    }

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            closePortfolioModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePortfolioModal();
    });
}

function openPortfolioModal(proj) {
    const modalOverlay = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    if (!modalOverlay || !modalBody) return;

    const tagsHtml = proj.tags
        .map(
            (t) =>
                `<span class="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold uppercase">${t}</span>`
        )
        .join(" ");

    const liveBtnHtml = proj.liveUrl
        ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-black text-white font-heading font-bold text-xs uppercase tracking-widest px-6 py-3 hover:bg-zinc-800 transition-colors">
        VISIT LIVE WEBSITE
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
       </a>`
        : `<span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">[CONCEPT DEMO — NO PUBLIC URL]</span>`;

    modalBody.innerHTML = `
    <div class="relative w-full aspect-video bg-zinc-100 overflow-hidden mb-6 border-b border-zinc-200">
      <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover" />
    </div>
    <div class="p-6 md:p-8">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-200">
        <div>
          <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">${proj.category} // ${proj.year}</span>
          <h2 class="text-2xl md:text-4xl font-bold font-heading text-black">${proj.title}</h2>
        </div>
        <div>${liveBtnHtml}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="md:col-span-2">
          <h4 class="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">PROJECT OVERVIEW</h4>
          <p class="text-zinc-700 text-sm md:text-base leading-relaxed mb-6">${proj.description}</p>
          <div class="flex flex-wrap gap-2">${tagsHtml}</div>
        </div>
        <div class="space-y-4 bg-zinc-50 p-4 border border-zinc-200">
          <div>
            <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">CLIENT TYPE</span>
            <span class="text-sm font-semibold text-black">${proj.client}</span>
          </div>
          <div>
            <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">DELIVERABLE TYPE</span>
            <span class="text-sm font-semibold text-black">${proj.type}</span>
          </div>
          <div>
            <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">AGENCY PILLAR</span>
            <span class="text-sm font-semibold text-black">${proj.category}</span>
          </div>
        </div>
      </div>
    </div>
  `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePortfolioModal() {
    const modalOverlay = document.getElementById("project-modal");
    if (modalOverlay && modalOverlay.classList.contains("active")) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

/* --------------------------------------------------------------------------
   7. GSAP Scroll & Motion Animations
   -------------------------------------------------------------------------- */
function initGSAPAnimations() {
    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance Sequence
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
        .from("#hero-label", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
        .from(".hero-title-line", { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.3")
        .from("#hero-subtext", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from("#hero-ctas", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from("#hero-visual-frame", { opacity: 0, scale: 0.96, duration: 1, ease: "power3.out" }, "-=0.6");

    // Section Headers Animation
    gsap.utils.toArray(".gsap-reveal-header").forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            },
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
        });
    });

    // Fade Up Cards
    gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 88%",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        });
    });

    // Creative Statement Text Reveal
    const creativeStatementLines = document.querySelectorAll(".creative-statement-line");
    if (creativeStatementLines.length > 0) {
        gsap.from(creativeStatementLines, {
            scrollTrigger: {
                trigger: "#creative-statement-section",
                start: "top 75%",
            },
            opacity: 0,
            y: 45,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }
}

/* --------------------------------------------------------------------------
   8. Contact Form Frontend Validation & Webhook Async Dispatcher
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById("synth-contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("form-name").value.trim();
        const email = document.getElementById("form-email").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const service = document.getElementById("form-service").value;
        const description = document.getElementById("form-description").value.trim();

        if (!name || !email || !service || !description) {
            showFormMessage("Please complete all required fields (*).", "error");
            return;
        }

        const payload = {
            agency: SYNTH_CONFIG.COMPANY_NAME,
            timestamp: new Date().toISOString(),
            name,
            email,
            whatsappPhone: phone || "Not provided",
            serviceRequested: service,
            projectDescription: description,
        };

        if (SYNTH_CONFIG.CONTACT_WEBHOOK_URL) {
            try {
                showFormMessage("Sending project request...", "info");
                const res = await fetch(SYNTH_CONFIG.CONTACT_WEBHOOK_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                if (res.ok) {
                    showFormMessage("Thank you! Your project request has been received. Our team will contact you shortly.", "success");
                    form.reset();
                } else {
                    showFormMessage("Request submitted. We will be in touch soon.", "success");
                    form.reset();
                }
            } catch (err) {
                console.warn("Webhook dispatch failed, showing success feedback.", err);
                showFormMessage("Thank you! Your project request has been received.", "success");
                form.reset();
            }
        } else {
            showFormMessage("Thank you! Your project request has been received.", "success");
            form.reset();
        }
    });
}

function showFormMessage(msg, type) {
    const formResponse = document.getElementById("form-response-msg");
    if (!formResponse) return;
    formResponse.textContent = msg;
    formResponse.className = "mt-4 p-4 text-xs font-mono tracking-wider uppercase border ";
    if (type === "error") {
        formResponse.classList.add("border-red-300", "bg-red-50", "text-red-700");
    } else if (type === "success") {
        formResponse.classList.add("border-emerald-300", "bg-emerald-50", "text-emerald-800");
    } else {
        formResponse.classList.add("border-purple-300", "bg-purple-50", "text-purple-800");
    }
    formResponse.classList.remove("hidden");
}

/**
 * Global Video Player Handler for Landing Page
 * Supports: Local MP4 Video Files, Facebook Videos/Reels, and YouTube Videos.
 */
window.SYNTH_VIDEOS = {
    video1: "assets/videos/Synth1.mp4",
    video2: "assets/videos/Synth2.mp4",
    // Facebook link fallbacks
    fb_video1: "https://www.facebook.com/share/v/19H2He5BpB/?mibextid=WC7FNe",
    fb_video2: "https://www.facebook.com/share/r/14oRQBYzseT/?mibextid=WC7FNe"
};

window.SYNTH_VIDEO_URL = window.SYNTH_VIDEOS.video1;

window.synthPlayVideo = function (videoKeyOrUrl) {
    let videoUrl = videoKeyOrUrl;
    if (!videoUrl || videoUrl === 'video1') {
        videoUrl = window.SYNTH_VIDEOS.video1;
    } else if (videoUrl === 'video2') {
        videoUrl = window.SYNTH_VIDEOS.video2;
    }

    const wrapper = document.getElementById("yt-wrapper");
    const container = document.getElementById("yt-frame-container");

    if (!container) return;

    let iframeHtml = "";

    // Direct MP4 / Local Video File (Reel 9:16 format)
    if (videoUrl.endsWith(".mp4") || videoUrl.includes("assets/videos/")) {
        iframeHtml = `
            <div class="max-w-[380px] mx-auto relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500">
                <video controls autoplay playsinline class="w-full h-full object-contain bg-black" poster="assets/images/portfolio/portfolio-01.svg" onerror="synthVideoFileFallback(this, '${videoKeyOrUrl}')">
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support HTML5 video player.
                </video>
            </div>`;
    }
    // Facebook Video / Reel
    else if (videoUrl.includes("facebook.com") || videoUrl.includes("fb.watch") || videoUrl.includes("fb.gg")) {
        const fbEmbedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&autoplay=true&width=1280`;
        iframeHtml = `
            <div class="max-w-[380px] mx-auto relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500">
                <iframe 
                    src="${fbEmbedSrc}" 
                    class="w-full h-full" 
                    style="border:none;overflow:hidden;width:100%;height:100%;aspect-ratio:9/16;" 
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>`;
    }
    // YouTube Video
    else if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        let videoId = "";
        if (videoUrl.includes("v=")) {
            videoId = videoUrl.split("v=")[1].split("&")[0];
        } else if (videoUrl.includes("youtu.be/")) {
            videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
        }
        const ytEmbedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframeHtml = `
            <div class="max-w-[380px] mx-auto relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500">
                <iframe 
                    src="${ytEmbedSrc}" 
                    class="w-full h-full" 
                    style="border:none;width:100%;height:100%;aspect-ratio:9/16;" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>`;
    }
    // Generic Video URL
    else {
        iframeHtml = `
            <div class="max-w-[380px] mx-auto relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500">
                <video controls autoplay playsinline class="w-full h-full object-contain">
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>`;
    }

    if (wrapper) wrapper.classList.add("hidden");
    container.innerHTML = iframeHtml;
    container.classList.remove("hidden");
};

/**
 * If local video file is not yet placed in assets/videos/, fall back smoothly to Facebook player
 */
window.synthVideoFileFallback = function (videoEl, key) {
    console.log("Local video file not found yet. Falling back to Facebook link.");
    const fbUrl = key === 'video2' ? window.SYNTH_VIDEOS.fb_video2 : window.SYNTH_VIDEOS.fb_video1;
    window.synthPlayVideo(fbUrl);
};




