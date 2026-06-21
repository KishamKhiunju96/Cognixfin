"use client";

export default function TrustBar() {
  const stats = [
    { value: "200+", label: "Happy clients" },
    { value: "20 TB+", label: "Media Covered" },
    { value: "50+", label: "Testimonials" },
  ];

  return (
    <div className="w-full bg-[#f4f6fb] px-6 sm:px-12 lg:px-20">
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm w-full px-8 sm:px-10 py-8 my-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Left: Heading */}
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-zinc-950 leading-snug tracking-tight">
              TRUSTED BY VARIOUS{" "}
              <span className="text-[#0c6cf2]">CLIENTS</span>
              <br />
              GLOBALLY
            </p>
          </div>

          {/* Right: Stats */}
          <div className="flex items-center gap-10 sm:gap-14">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500 font-medium mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
