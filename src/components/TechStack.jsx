import { useEffect, useRef } from 'react'

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'C#', icon: '🟣' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Git', icon: '📦' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'GSAP', icon: '✨' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Power BI', icon: '📊' },
    { name: 'REST APIs', icon: '🔗' },
]

function TechCard({ tech, index }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'scale(1)'
                }
            },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="glass"
            style={{
                opacity: 0,
                transform: 'scale(0.85)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'default',
                textAlign: 'center',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08)'
                e.currentTarget.style.borderColor = 'var(--border-glow)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 242, 255, 0.1)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            <span style={{ fontSize: '2rem' }}>{tech.icon}</span>
            <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.05em',
            }}>
                {tech.name}
            </span>
        </div>
    )
}

export default function TechStack() {
    return (
        <section id="stack" style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ top: '30%', right: '-5%' }} />

            <div className="section">
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <span className="section-label">03. THE TOOLBOX</span>
                    <h2 className="section-title">
                        TECHNICAL<br />
                        <span style={{ color: 'var(--primary)' }}>STACK</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '500px',
                        lineHeight: 1.7,
                    }}>
                        Technologies and tools I use to bring ideas to life — from frontend frameworks to backend services and data analysis.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                    gap: '1rem',
                }}>
                    {technologies.map((tech, i) => (
                        <TechCard key={tech.name} tech={tech} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
