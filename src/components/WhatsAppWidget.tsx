"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, PhoneIcon, CloseIcon } from "@/components/icons";
import { site } from "@/lib/site";

const SESSION_KEY = "vv-whatsapp-widget-shown";
const WHATSAPP_MESSAGE =
  "Hi V.V Builders, I'd like to know more about a construction project.";

function playChime(ctx: AudioContext) {
  try {
    const now = ctx.currentTime;
    [780, 1040].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const start = now + i * 0.12;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.25);
    });
  } catch {
    // Audio isn't critical to the widget working — fail silently.
  }
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const unlockAudio = () => {
      if (audioCtxRef.current) return;
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      } catch {
        // Ignore — the widget still works without sound.
      }
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("scroll", unlockAudio, { once: true, passive: true });

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Private-mode or blocked storage — treat as not shown yet.
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!alreadyShown) {
      timer = setTimeout(() => {
        setOpen(true);
        if (audioCtxRef.current) playChime(audioCtxRef.current);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // Ignore.
        }
      }, 3200);
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  const chatHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div
          className="w-[min(88vw,320px)] rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden"
          style={{ animation: "fadeInUp 0.3s ease" }}
          role="dialog"
          aria-label="Chat with V.V Builders on WhatsApp"
        >
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">{site.name}</p>
              <p className="text-[11px] text-white/75 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Typically replies within minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat popup"
              className="text-white/70 hover:text-white shrink-0"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-xl rounded-tl-none px-3.5 py-2.5 text-[13px] leading-relaxed text-ink-900 shadow-sm max-w-[90%]">
              Planning a home or commercial project in Chennai? Chat with us on WhatsApp
              for a quick reply.
            </div>
          </div>

          <div className="px-4 pb-4 bg-[#ECE5DD] flex flex-col gap-2">
            <a
              href={chatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-[13px] font-semibold px-4 py-3 rounded-full hover:bg-[#20bd5a] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 border border-navy-950/15 bg-white text-navy-950 text-[13px] font-semibold px-4 py-3 rounded-full hover:bg-cream-100 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        )}
        <WhatsAppIcon className="w-7 h-7 relative" />
      </button>
    </div>
  );
}
