export default function ListMaterial() {
  return (
    <main className="min-h-screen bg-[#f7faf6] px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-5xl font-black text-[#062b26]">
          List Material
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Submit available material to the KELP marketplace.
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-semibold">
              Company name
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Material type
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
              placeholder="Plastic, metal, timber..."
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Quantity
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
              placeholder="e.g. 25 tonnes"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Location
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
              placeholder="City / region"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Additional details
            </label>
            <textarea
              className="h-40 w-full rounded-2xl border border-slate-200 px-5 py-4"
              placeholder="Describe the material..."
            />
          </div>

          <button
            className="rounded-2xl bg-[#073f35] px-8 py-4 font-bold text-white"
          >
            Submit material
          </button>
        </form>
      </div>
    </main>
  );
}