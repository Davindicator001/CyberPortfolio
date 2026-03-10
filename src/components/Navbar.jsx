import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1cL9L6hfmUgwcVyYvD-mU779DBY0FIc1z/view?usp=drivesdk' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    const handleClick = (e, href) => {
        e.preventDefault()
        if (href.startsWith('http')) {
            setMobileOpen(false)
            window.open(href, '_blank')
            return
        }

        const target = document.querySelector(href)
        if (!target) return

        const scrollToTarget = () => {
            const navHeight = document.querySelector('nav')?.offsetHeight ?? 0
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight
            window.scrollTo({ top, behavior: 'smooth' })
        }

        if (mobileOpen) {
            setMobileOpen(false)
            // Wait for the mobile menu to close before scrolling to avoid offset issues.
            requestAnimationFrame(scrollToTarget)
        } else {
            scrollToTarget()
        }
    }

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.4s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}>
            {/* Logo */}
            <a href="#" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
            }}>
                {'<VA />'}
            </a>

            {/* Desktop Links */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
            }} className="nav-links-desktop">
                {navLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.05em',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase',
                        }}
                        onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}>
                    <span style={{ fontSize: '1rem' }}>⚡</span> HIRE ME
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="nav-hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                    display: 'none',
                    flexDirection: 'column',
                    gap: '5px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                }}
            >
                <span style={{ width: '24px', height: '2px', background: 'var(--primary)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
                <span style={{ width: '24px', height: '2px', background: 'var(--primary)', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ width: '24px', height: '2px', background: 'var(--primary)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>

            {/* Mobile Menu */}
            <div style={{
                position: 'absolute',
                top: '100%',
                right: '1rem',
                width: 'min(320px, 90vw)',
                background: 'rgba(0, 0, 0, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                boxShadow: '0 24px 48px rgba(0,0,0,0.45)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
                pointerEvents: mobileOpen ? 'auto' : 'none',
                transition: 'opacity 220ms ease, transform 220ms ease',
                zIndex: 99,
            }}>
                {navLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="btn-primary">
                    <span>⚡</span> HIRE ME
                </a>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
        </nav>
    )
}
