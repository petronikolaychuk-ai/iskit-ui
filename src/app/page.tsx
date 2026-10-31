export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          iskit-ui
        </h1>
        <p className="text-lg text-slate-600">
          Component & section library for{" "}
          <span className="font-semibold text-slate-900">iskit.ai</span>
          <br />
          <span className="text-base">Idea Startup Kit — fastest way to get a real signal on your idea</span>
        </p>
        <div className="pt-4 flex flex-wrap gap-3 justify-center">
          <a
            href="https://github.com/petronikolaychuk-ai/iskit-ui"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            GitHub Repo
          </a>
          <span className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700">
            Sections coming next
          </span>
        </div>
        <p className="text-sm text-slate-500 pt-8">
          Open this repo in GitHub Codespaces, StackBlitz, or Replit to develop from phone/cloud.
        </p>
      </div>
    </main>
  );
}
