import { useEffect, useRef } from 'react'

export default function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('about-visible')
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ bottom: '0', left: '20%' }} />

            <div className="section" ref={sectionRef}>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <span className="section-label">{'<About />'}</span>
                    <h2 className="section-title">
                        THE<br />
                        <span style={{ color: 'var(--primary)' }}>DEVELOPER</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 300px) 1fr',
                    gap: '3rem',
                    alignItems: 'start',
                }} className="about-grid">

                    {/* Profile image */}
                    <div className="glass about-image-card" style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-glow)',
                        opacity: 0,
                        transform: 'translateX(-30px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        maxWidth: '100%',
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '380px',
                        }}>
                            {/* Text / initials layer */}
                            <div className="profile-placeholder" style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                background: 'linear-gradient(180deg, rgba(0,242,255,0.08) 0%, rgba(0,0,0,0.6) 100%)',
                            }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary-dim), rgba(0,0,0,0.3))',
                                    border: '2px solid var(--border-glow)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    fontWeight: 900,
                                    color: 'var(--primary)',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    VA
                                </div>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                }}>
                                    Victor Akande
                                </span>
                            </div>

                            {/* Image layers (fade in/out) */}
                            <img
                                className="profile-photo"
                                src="/assets/me.png"
                                alt="Victor Akande"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0,
                                }}
                            />
                            <img
                                className="profile-photo profile-photo-2"
                                src="/assets/laptop_picture.jpg"
                                alt="Victor Akande"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0,
                                }}
                            />
                        </div>
                    </div>

                    {/* Bio text */}
                    <div className="about-text" style={{
                        opacity: 0,
                        transform: 'translateY(30px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                    }}>
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                        }}>
                            A PASSIONATE<br />
                            <span style={{ color: 'var(--primary)' }}>FULL-STACK DEVELOPER</span>
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: 1.8,
                        }}>
                            <p>
                                I'm Victor Akande — also known as <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>DavinDicator</span>. I thrive at the intersection of creativity and code. My journey spans across web development, mobile apps, desktop applications, and game development.
                            </p>
                            <p>
                                Currently, I serve as the <strong>Lead Backend Developer</strong> at <a href="https://algoritic.com.ng" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Algoritic Inc.</a>, where I architect scalable APIs and lead backend innovation.
                            </p>
                            <p>
                                My philosophy? <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Creating, Crashing, Solving — On Repeat.</span> Every bug is a puzzle, every project is an adventure, and every line of code is a step toward something extraordinary.
                            </p>
                            <p>
                                When I'm not knee-deep in code, you'll find me exploring new technologies, diving into data analysis, or working on creative projects that push the boundaries of what's possible.
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            marginTop: '2rem',
                            flexWrap: 'wrap',
                        }}>
                            {[
                                { value: '10+', label: 'Projects' },
                                { value: '5+', label: 'Technologies' },
                                { value: '∞', label: 'Curiosity' },
                            ].map(stat => (
                                <div key={stat.label} className="glass" style={{
                                    padding: '1rem 1.5rem',
                                    textAlign: 'center',
                                    minWidth: '100px',
                                }}>
                                    <div style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 900,
                                        color: 'var(--primary)',
                                        fontFamily: 'var(--font-mono)',
                                    }}>{stat.value}</div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--text-muted)',
                                        fontFamily: 'var(--font-mono)',
                                        letterSpacing: '0.05em',
                                        marginTop: '0.3rem',
                                    }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-visible .about-image-card {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .about-visible .about-image-card .profile-placeholder {
          animation: fadeSwap 12s ease-in-out infinite;
        }
        .about-visible .about-image-card .profile-photo {
          animation: fadeSwapImage1 12s ease-in-out infinite;
        }
        .about-visible .about-image-card .profile-photo-2 {
          animation: fadeSwapImage2 12s ease-in-out infinite;
        }
        .about-visible .about-text {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes fadeSwap {
          0%,
          35% {
            opacity: 1;
          }
          40%,
          95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeSwapImage1 {
          0%,
          35% {
            opacity: 0;
          }
          40%,
          60% {
            opacity: 1;
          }
          65%,
          100% {
            opacity: 0;
          }
        }

        @keyframes fadeSwapImage2 {
          0%,
          60% {
            opacity: 0;
          }
          65%,
          95% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-image-card {
            width: 100% !important;
            max-width: none !important;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    )
}
