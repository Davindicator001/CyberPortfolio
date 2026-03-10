import { useEffect, useRef } from 'react'

const projects = [
    {
        title: 'NewsFlashLatest',
        description: 'A dynamic blog platform delivering trending news across categories. Features real-time updates, responsive design, and optimized content delivery for seamless reading.',
        tags: ['REACT.JS', 'NODE.JS', 'API', 'GSAP', 'CSS','EXPRESS.JS','SUPABASE','TAILWIND'],
        icon: '../assets/newsflashlatest.jpeg',
        color: '#00f2ff',
        link: 'https://newsflashlatest.vercel.app',
    },
    {
        title: 'Evergreen Hotels',
        description: 'A luxury hotel booking and management system with an elegant UI. Includes room availability, reservation management, and a premium guest experience.',
        tags: ['REACT.JS', 'CSS', 'GSAP', 'TAILWIND', 'API'],
        icon: '../assets/evergreen.png',
        color: '#00f2ff',
        link: 'https://evergreenhotels.com.ng',
    },
    {
        title: 'KLYVEX Platform',
        description: 'A full-stack web application with authentication, leaderboards, and interactive features. Built with modern web technologies and optimized for performance.',
        tags: ['REACT.JS', 'FIREBASE', 'TYPESCRIPT', 'GSAP', 'API'],
        color: '#00f2ff',
        link: '#',
    },
]

function ProjectCard({ project, index }) {
    const cardRef = useRef(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    card.style.opacity = '1'
                    card.style.transform = 'translateY(0)'
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(card)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={cardRef}
            className="glass"
            style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Project number */}
            <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
            }}>
                {`0${index + 1}.`}
            </span>

            {/* Image placeholder */}
            {project.icon ? <img style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
            }} src={project.icon} alt={project.title} /> : (
            <div style={{
                width: '100%',
                height: '220px',
                borderRadius: 'var(--radius-md)',
                background: `linear-gradient(135deg, rgba(0,242,255,0.06) 0%, rgba(0,0,0,0.4) 100%)`,
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    opacity: 0.15,
                    letterSpacing: '0.1em',
                }}>
                    {project.title.toUpperCase()}
                </span>

                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)',
                }} />
            </div>
            )}
            {/* Title */}
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.01em',
            }}>
                {project.title}
            </h3>

            {/* Description */}
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
            }}>
                {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                ))}
            </div>

            {/* Arrow icon */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--border-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--primary)',
                fontSize: '1.1rem',
            }}
            onClick={() => window.open(project.link, '_blank')}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(4px, -4px)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,242,255,0.6)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0, 0)'
                e.currentTarget.style.boxShadow = 'none'
            }}>
                ↗
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects" style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ top: '20%', left: '-10%' }} />

            <div className="section">
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <span className="section-label">{'<Projects />'}</span>
                    <h2 className="section-title">
                        SELECTED<br />
                        <span style={{ color: 'var(--primary)' }}>WORK</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
