export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Datamaglia - AI Data Governance
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Automate Data Compliance</h2>
        <p className="text-lg text-slate-600 mb-6">
          AI agents monitor manufacturing & supply chain data 24/7. Detect violations instantly.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">24.5K</div>
            <div className="text-sm text-blue-800">Scans</div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-green-800">Violations</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-600">12</div>
            <div className="text-sm text-red-800">Critical</div>
          </div>
        </div>
      </div>
    </div>
  );
}