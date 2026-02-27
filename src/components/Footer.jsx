export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto',
        }}>
            <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
            }}>
                © {new Date().getFullYear()} Victor Akande. Built with{' '}
                <span style={{ color: 'var(--primary)' }}>♥</span> and lots of coffee.
            </p>

            <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
            }}>
                {'<DavinDicator />'}
            </p>
        </footer>
    )
}
