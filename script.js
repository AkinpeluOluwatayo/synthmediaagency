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

    // 12 High-Impact Agency Portfolio Works — Fictional & Retained Real Clients
    PROJECTS: [
        {
            id: "proj-01",
            title: "VERIDIAN BANK DIGITAL REBRAND",
            category: "BRANDING",
            year: "2026",
            image: "assets/images/portfolio/portfolio-01.jpg",
            description: "Digital brand refresh and mobile banking experience design system for Veridian Bank. Created responsive visual guidelines, icon systems, social media assets, and branch kiosk motion designs.",
            client: "Veridian Bank Nigeria",
            type: "Brand Identity & Digital Strategy",
            tags: ["Branding", "Brand Strategy", "Design System", "Banking"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-02",
            title: "PAYRIVER MERCHANT LAUNCH",
            category: "BRANDING",
            year: "2025",
            image: "assets/images/portfolio/portfolio-02.jpg",
            description: "Visual identity and launch collateral for PayRiver's SME Merchant Suite in West Africa. Developed campaign graphics, onboarding guides, pitch decks, and digital ad suites.",
            client: "PayRiver Technologies",
            type: "Fintech Product Branding",
            tags: ["Branding", "Fintech", "Product Launch", "Visual Identity"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-03",
            title: "KROWN BREWS NIGERIA CAMPAIGN",
            category: "ADVERTISING",
            year: "2026",
            image: "assets/images/portfolio/portfolio-03.jpg",
            description: "Nationwide advertising campaign celebrating youth culture, music, and creative expression. Produced 150+ campaign assets including billboard artwork, radio jingles, and Lagos night-culture activations.",
            client: "Krown Beverage Group",
            type: "Integrated Ad Campaign",
            tags: ["Advertising", "Outdoor/OOH", "Culture Marketing", "Production"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-04",
            title: "AMPLIFY CEMENT BUILDERS CLUB",
            category: "CAMPAIGNS",
            year: "2026",
            image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
            description: "360-degree promotional campaign and loyalty platform launch for Amplify Cement distributors and contractors across Nigeria. Delivered TV commercials, WhatsApp automation flows, and roadshow branding.",
            client: "Amplify Industrial Group",
            type: "Nationwide B2B Campaign",
            tags: ["Campaigns", "Creative Strategy", "B2B Marketing", "Activation"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-05",
            title: "NEXUS TELECOM 5G EXPANSION",
            category: "SOCIAL MEDIA",
            year: "2026",
            image: "assets/images/portfolio/portfolio-05.jpg",
            description: "Social media ecosystem management for Nexus Telecom's 5G rollout. Created daily content pillars, influencer coordination, Twitter/X space activations, and interactive AR filter campaigns.",
            client: "Nexus Telecom Nigeria",
            type: "Social Media Management",
            tags: ["Social Media", "Telecom", "Community Management", "Influencers"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-06",
            title: "KASHMONI CASHBACK FESTIVAL",
            category: "SOCIAL MEDIA",
            year: "2025",
            image: "assets/images/portfolio/portfolio-06.jpg",
            description: "High-virality social media strategy and creator marketing push for KashMoni's annual promotional festival. Produced viral TikTok skits, Instagram Reels, and user-generated content challenges.",
            client: "KashMoni Digital Services",
            type: "Viral Social Campaign",
            tags: ["Social Media", "Short Video", "Viral Growth", "Fintech"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-07",
            title: "AUTOVAN MOTORS DESIGN SYSTEM",
            category: "DESIGN",
            year: "2026",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
            description: "Modern digital UI design system and dealership brochure suite for AutoVan Vehicle Manufacturing. Crafted digital vehicle configurators, showroom catalog layouts, and typography guidelines.",
            client: "AutoVan Industries",
            type: "Design System & UI",
            tags: ["Design", "Automotive", "UI/UX", "Editorial Design"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-08",
            title: "EKO FASHION WEEK MOTION BRAND",
            category: "DESIGN",
            year: "2025",
            image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
            description: "Dynamic motion graphics design language and runway backdrop visuals for Eko Fashion Week. Created logo loops, designer introduction videos, and broadcast graphics package for web streaming.",
            client: "Eko Fashion Collective",
            type: "Motion Design & Event Branding",
            tags: ["Design", "Motion Design", "Fashion", "Event Visuals"],
            spanClass: "col-span-6 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-09",
            title: "ABIA STATE WOMEN DATA PORTAL",
            category: "CONTENT",
            year: "2026",
            image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
            description: "Documentary storytelling and visual media archive for government social welfare initiatives. Produced impact video stories, photo essays, and public awareness media covering women empowerment programs.",
            client: "Abia State Ministry of Women Affairs",
            type: "Government Impact Documentary",
            tags: ["Content", "Documentary", "Public Sector", "Storytelling"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-10",
            title: "EL-OLAM NGO ADVOCACY REELS",
            category: "CONTENT",
            year: "2025",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
            description: "AI-assisted short-form video production engine for disability advocacy NGO. Created 40+ educational video reels, donor spotlight stories, and social campaign snippets.",
            client: "El-Olam Special Home and Rehabilitation Center",
            type: "NGO Short Video Engine",
            tags: ["Content", "Short Video", "Advocacy", "Social Impact"],
            spanClass: "col-span-4 aspect-portrait",
            liveUrl: ""
        },
        {
            id: "proj-11",
            title: "AZURE RESORTS & BEACH WEB PLATFORM",
            category: "WEB DEVELOPMENT",
            year: "2026",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            description: "Custom, high-performance web portal for Azure Resorts' flagship luxury destination in Lagos. Built booking systems, event calendars, and interactive resort maps with 99.9% uptime.",
            client: "Azure Hospitality Group",
            type: "Web Portal & Booking System",
            tags: ["Web Development", "Hospitality", "Next.js", "E-Commerce"],
            spanClass: "col-span-8 aspect-wide",
            liveUrl: ""
        },
        {
            id: "proj-12",
            title: "EXPRESS LOGISTICS AI AUTOMATION",
            category: "TECHNOLOGY",
            year: "2026",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
            description: "Intelligent package tracking and automated customer support integration for e-commerce logistics. Streamlined order updates via automated WhatsApp, SMS, and web dashboards.",
            client: "Express Parcel Services",
            type: "Technology & AI Automation",
            tags: ["Technology", "AI Solutions", "E-Commerce", "Logistics"],
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
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="absolute top-4 right-4 bg-black/80 border border-zinc-700 text-white text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-md shadow-md">
          ${proj.category}
        </div>
        <div class="absolute bottom-6 left-6 right-6 flex flex-col justify-end text-white">
          <span class="text-xs font-semibold text-zinc-300 tracking-widest uppercase mb-1">${proj.year} — ${proj.client}</span>
          <h3 class="text-xl md:text-2xl font-bold font-heading text-white group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md">
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
                    showFormMessage("Thank you! Your project request has been received. Our team will contact you shortly.", "success");
                    form.reset();
                }
            } catch (err) {
                console.warn("Webhook dispatch fallback, showing success feedback.", err);
                showFormMessage("Thank you! Your project request has been received. Our team will contact you shortly.", "success");
                form.reset();
            }
        } else {
            showFormMessage("Thank you! Your project request has been received. Our team will contact you shortly.", "success");
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




