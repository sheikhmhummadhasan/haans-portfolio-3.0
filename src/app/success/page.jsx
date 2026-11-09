
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Handshake,
  Sparkles,
} from "lucide-react";

const SuccessPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F3EE] text-[#0D0D0D]">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#999 0.8px, transparent 0.8px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-14 py-6 border-b border-black/[0.08]">

        <Link href="/" className="text-2xl font-black tracking-tighter">
          HS.
        </Link>

        <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-[#555555]">
          Payment Confirmation
        </span>

        <Link
          href="/"
          className="flex items-center gap-2 bg-[#0D0D0D] text-[#F6F3EE] px-6 py-3 rounded-full text-xs font-medium hover:bg-[#2E2E2E] transition-all"
        >
          Portfolio
          <ArrowUpRight size={15} />
        </Link>

      </nav>

      {/* Main Content */}
      <section className="relative z-10 min-h-[85vh] flex items-center justify-center px-5 py-16">

        <div className="w-full max-w-3xl mx-auto text-center">

          {/* Success Icon */}
          <div className="relative flex items-center justify-center mx-auto mb-10 w-24 h-24">

            <div className="absolute inset-0 rounded-full border border-[#0D0D0D]/15 animate-[spin_12s_linear_infinite]" />

            <div className="absolute inset-2 rounded-full border border-[#0D0D0D]/10" />

            <div className="relative w-16 h-16 rounded-full bg-[#0D0D0D] flex items-center justify-center shadow-xl animate-[scaleIn_0.6s_ease-out]">
              <Check
                size={32}
                strokeWidth={2.5}
                className="text-[#F6F3EE]"
              />
            </div>

            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#84CC16] border-2 border-[#F6F3EE]" />

          </div>

          {/* Heading */}
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#555555] mb-7">
            <span className="inline-block w-2 h-2 rounded-full bg-[#84CC16] mr-2" />
            Payment Successfully Completed
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[-0.075em] leading-[0.95]">
            Thank
            <br />
            <span className="text-[#88847E]">You.</span>
          </h1>

          <p className="max-w-lg mx-auto mt-8 text-sm md:text-base leading-8 text-[#555555]">
            Your payment has been received successfully.
            Thank you for trusting me with your project.
            Im excited to turn your ideas into something meaningful.
          </p>

          {/* Confirmation Card */}
          <div className="max-w-md mx-auto mt-12 p-6 md:p-7 bg-[#E8E4DD] border border-black/[0.06] rounded-2xl text-left">

            <div className="flex items-center justify-between mb-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0D0D0D] flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-[#F6F3EE]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Payment Confirmed
                  </p>
                  <p className="text-xs text-[#555555] mt-1">
                    Transaction status
                  </p>
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#365D16] bg-[#D5DFC9] px-3 py-2 rounded-full">
                Successful
              </span>

            </div>

            <div className="border-t border-black/10 pt-5 flex justify-between items-center">

              <div>
                <p className="text-xs text-[#555555]">
                  Whats next?
                </p>
                <p className="text-sm font-semibold mt-1">
                  Lets build something great.
                </p>
              </div>

              <Handshake size={22} className="text-[#2E2E2E]" />

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-9">

            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0D0D0D] text-[#F6F3EE] text-sm font-medium hover:bg-[#2E2E2E] hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-black/15 text-[#0D0D0D] text-sm font-medium hover:bg-[#E8E4DD] transition-all duration-300"
            >
              Lets Talk
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* Footer */}
          <div className="mt-20 pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">

            <span className="text-xs font-black tracking-tight">
              HS.
            </span>

            <p className="text-[9px] uppercase tracking-[0.25em] text-[#555555]">
              Designer & Developer — Dhaka
            </p>

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#555555]">
              © 2026 Hasan Sheikh
            </p>

          </div>

        </div>
      </section>

     

    </main>
  );
};

export default SuccessPage;
