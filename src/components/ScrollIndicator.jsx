import { useState, useEffect } from 'react'

export default function ScrollIndicator() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const winScroll = document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {/* Vertical scroll text — left side */}
            <div className="scroll-indicator-left" style={{
                position: 'fixed',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                pointerEvents: 'none',
            }}>
                <span className="vertical-rl" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                }}>
                    SCROLL TO NAVIGATE
                </span>

                {/* Progress bar */}
                <div style={{
                    width: '2px',
                    height: '80px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '1px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        width: '100%',
                        height: `${scrollProgress}%`,
                        background: 'var(--primary)',
                        borderRadius: '1px',
                        transition: 'height 0.1s ease',
                        boxShadow: '0 0 8px rgba(0, 242, 255, 0.4)',
                    }} />
                </div>
            </div>

            {/* FAB — bottom right */}
            <button
                onClick={scrollToTop}
                className="scroll-fab"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glow)',
                    color: 'var(--primary)',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 50,
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(12px)',
                    opacity: scrollProgress > 5 ? 1 : 0,
                    transform: scrollProgress > 5 ? 'translateY(0)' : 'translateY(20px)',
                    pointerEvents: scrollProgress > 5 ? 'auto' : 'none',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(0,242,255,0.3)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = scrollProgress > 5 ? 'translateY(0)' : 'translateY(20px)'
                }}
            >
                ⚡
            </button>

            <style>{`
        @media (max-width: 768px) {
          .scroll-indicator-left { display: none !important; }
          .scroll-fab {
            bottom: 1rem !important;
            right: 1rem !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
        </>
    )
}
