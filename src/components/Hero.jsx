import { useEffect, useRef } from 'react'

export default function Hero() {
    const nameRef = useRef(null)

    useEffect(() => {
        // Simple typewriter effect on subtitle
        const el = document.querySelector('.hero-subtitle')
        if (!el) return
        const text = el.getAttribute('data-text')
        el.textContent = ''
        let i = 0
        const interval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text[i]
                i++
            } else {
                clearInterval(interval)
            }
        }, 40)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background glow */}
            <div className="glow-orb" style={{ top: '-10%', right: '10%' }} />
            <div className="glow-orb" style={{ bottom: '10%', left: '-5%', width: '200px', height: '200px' }} />

            <div className="section" style={{ width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    gap: '3rem',
                }} className="hero-grid">

                    {/* Left content */}
                    <div>
                        <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            <span className="section-label" style={{ fontSize: '0.85rem' }}>
                                {'// PORTFOLIO'}
                            </span>
                        </div>

                        <h1
                            ref={nameRef}
                            className="animate-fade-in-up"
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                fontWeight: 900,
                                lineHeight: 1,
                                letterSpacing: '-0.03em',
                                marginTop: '1rem',
                                marginBottom: '1.5rem',
                                opacity: 0,
                                animationDelay: '0.4s',
                                animationFillMode: 'forwards',
                            }}
                        >
                            VICTOR<br />
                            <span style={{ color: 'var(--primary)' }}>AKANDE</span>
                        </h1>

                        <p
                            className="hero-subtitle terminal-cursor animate-fade-in-up"
                            data-text="> Full-Stack Developer // Software Engineer // Data Analyst"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
                                color: 'var(--text-secondary)',
                                marginBottom: '2rem',
                                minHeight: '1.5em',
                                opacity: 0,
                                animationDelay: '0.6s',
                                animationFillMode: 'forwards',
                            }}
                        />

                        <p className="animate-fade-in-up" style={{
                            maxWidth: '520px',
                            color: 'var(--text-secondary)',
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                            opacity: 0,
                            animationDelay: '0.8s',
                            animationFillMode: 'forwards',
                        }}>
                            I build high-performance web, mobile, and desktop applications.
                            Passionate about crafting elegant solutions across the full stack — from
                            pixel-perfect UIs to scalable backends and data-driven insights.
                        </p>

                        <div className="animate-fade-in-up" style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            opacity: 0,
                            animationDelay: '1s',
                            animationFillMode: 'forwards',
                        }}>
                            <a href="#projects" className="btn-primary"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                VIEW WORK
                            </a>
                            <a href="#contact" className="btn-outline"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                GET IN TOUCH
                            </a>
                        </div>
                    </div>

                    {/* Right — Profile image */}
                    <div className="hero-image-wrapper animate-fade-in-up" style={{
                        opacity: 0,
                        animationDelay: '0.6s',
                        animationFillMode: 'forwards',
                    }}>
                        <div className="glass animate-float" style={{
                            width: '280px',
                            height: '340px',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid var(--border-glow)',
                        }}>
                            {/* Placeholder avatar with initials */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, rgba(0,242,255,0.1) 0%, rgba(0,0,0,0.3) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}>
                                <span style={{
                                    fontSize: '4rem',
                                    fontWeight: 900,
                                    color: 'var(--primary)',
                                    opacity: 0.6,
                                    fontFamily: 'var(--font-mono)',
                                }}>VA</span>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    letterSpacing: '0.1em',
                                }}>DAVINDICATOR</span>
                            </div>

                            {/* Corner decorations */}
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                left: '12px',
                                width: '20px',
                                height: '20px',
                                borderTop: '2px solid var(--primary)',
                                borderLeft: '2px solid var(--primary)',
                                opacity: 0.5,
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '12px',
                                right: '12px',
                                width: '20px',
                                height: '20px',
                                borderBottom: '2px solid var(--primary)',
                                borderRight: '2px solid var(--primary)',
                                opacity: 0.5,
                            }} />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="animate-fade-in" style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: 0,
                    animationDelay: '1.5s',
                    animationFillMode: 'forwards',
                }}>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                    }}>Scroll down</span>
                    <div style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, var(--primary), transparent)',
                        animation: 'float 2s ease-in-out infinite',
                    }} />
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-image-wrapper {
            display: none !important;
          }
        }
      `}</style>
        </section>
    )
}
