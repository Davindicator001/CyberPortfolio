import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
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
        setMobileOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
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
            {mobileOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(10, 10, 10, 0.97)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    zIndex: 99,
                }}>
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1.2rem',
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
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
        </nav>
    )
}
