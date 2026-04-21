// Fallback page. Under normal conditions the beforeFiles rewrite in
// next.config.mjs intercepts `/` and serves public/index.html, so this
// component never renders. If you see this text in prod, the rewrite
// didn't match — check next.config.mjs.
export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 40 }}>
      <h1>AI briefing</h1>
      <p>
        The daily briefing is at <a href="/index.html">/index.html</a> and the
        tools comparison is at <a href="/tools.html">/tools.html</a>.
      </p>
    </main>
  );
}
