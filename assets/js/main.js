/*===== YEAR =====*/
document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear()
})

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*===== LANGUAGE SWITCH =====*/
/* The initial language is set by the inline script in <head>; this only handles clicks. */
const langButtons = document.querySelectorAll('[data-set-lang]')

function applyLang(lang) {
    const root = document.documentElement
    root.setAttribute('data-lang', lang)
    root.lang = lang
    langButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang)))
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.setLang
        applyLang(lang)
        try { localStorage.setItem('lang', lang) } catch (e) { /* private mode: choice just isn't remembered */ }
    })
})

applyLang(document.documentElement.getAttribute('data-lang') || 'en')

/*===== ACTIVE NAV LINK =====*/
const navLinks = [...document.querySelectorAll('.nav__link[href^="#"]')]
const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

if ('IntersectionObserver' in window && sections.length) {
    /* A section counts as "current" when it crosses a thin band near the top third of the viewport. */
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const id = `#${entry.target.id}`
            navLinks.forEach(link => {
                if (link.getAttribute('href') === id) link.setAttribute('aria-current', 'location')
                else link.removeAttribute('aria-current')
            })
        })
    }, { rootMargin: '-30% 0px -65% 0px' })

    sections.forEach(section => navObserver.observe(section))
}

/*===== SCROLL REVEAL =====*/
/* Elements only get the hidden .reveal state via JS, so a failed/blocked
   script never leaves content stuck invisible - it just skips the animation. */
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('[data-reveal]')
    revealTargets.forEach(el => el.classList.add('reveal'))

    const STAGGER_MS = 60
    const MAX_STAGGERED = 5

    const observer = new IntersectionObserver((entries, obs) => {
        /* Stagger by position within this batch, so cards that scroll in
           together cascade, but a lone card further down never waits. */
        entries
            .filter(entry => entry.isIntersecting)
            .forEach((entry, i) => {
                entry.target.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STAGGERED) * STAGGER_MS}ms`)
                entry.target.classList.add('is-visible')
                obs.unobserve(entry.target)
            })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    revealTargets.forEach(el => observer.observe(el))
}
