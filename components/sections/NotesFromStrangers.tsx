"use client";

import { useSyncExternalStore, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import type { StrangerMessage } from "@/lib/data";

const MESSAGE_TYPES = [
  { value: "advice", label: "Advice" },
  { value: "encouragement", label: "Encouragement" },
  { value: "feedback", label: "Feedback" },
  { value: "opportunity", label: "Opportunity" },
] as const;

const typeStyles: Record<
  StrangerMessage["type"],
  { label: string; color: string }
> = {
  advice: { label: "Advice", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  encouragement: {
    label: "Encouragement",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  feedback: {
    label: "Feedback",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  opportunity: {
    label: "Opportunity",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
};

const STORAGE_KEY = "divanshi-stranger-messages";
const EMPTY_MESSAGES: StrangerMessage[] = [];

function readUserMessages(): StrangerMessage[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as StrangerMessage[];
  } catch {
    /* ignore */
  }
  return [];
}

let cachedSnapshot: StrangerMessage[] = EMPTY_MESSAGES;
let cachedStorageValue: string | null = null;

function rebuildSnapshot() {
  const storageValue = localStorage.getItem(STORAGE_KEY) ?? "";
  if (storageValue === cachedStorageValue) {
    return cachedSnapshot;
  }

  cachedStorageValue = storageValue;
  cachedSnapshot = readUserMessages();
  return cachedSnapshot;
}

function getSnapshot(): StrangerMessage[] {
  return rebuildSnapshot();
}

function getServerSnapshot(): StrangerMessage[] {
  return EMPTY_MESSAGES;
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function notify() {
  cachedStorageValue = null;
  rebuildSnapshot();
  listeners.forEach((listener) => listener());
}

function addUserMessage(message: StrangerMessage) {
  const updated = [message, ...readUserMessages()];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notify();
}

export function NotesFromStrangers() {
  const messages = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [messageType, setMessageType] =
    useState<StrangerMessage["type"]>("encouragement");
  const [messageText, setMessageText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = messageText.trim();
    if (!trimmed || trimmed.length < 10) return;

    const newMessage: StrangerMessage = {
      id: `user-${Date.now()}`,
      type: messageType,
      message: trimmed,
      timestamp: "Just now",
    };

    addUserMessage(newMessage);
    setMessageText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="messages"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="messages-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Notes from Strangers"
          title="Anonymous message wall"
          description="Leave advice, encouragement, feedback, or opportunities — completely anonymous."
        />

        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="card-surface p-5 md:p-6 mb-10 max-w-2xl"
            aria-label="Leave an anonymous message"
          >
            <fieldset>
              <legend className="sr-only">Message type</legend>
              <div className="flex flex-wrap gap-2 mb-4">
                {MESSAGE_TYPES.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setMessageType(type.value)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      messageType === type.value
                        ? typeStyles[type.value].color
                        : "text-subtle border-[var(--border)] hover:border-[var(--border-hover)]"
                    }`}
                    aria-pressed={messageType === type.value}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <label htmlFor="stranger-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="stranger-message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Share something kind, honest, or helpful..."
              rows={4}
              className="w-full bg-background/50 border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-subtle resize-none focus:outline-none focus:border-accent/50 transition-colors"
              minLength={10}
              maxLength={500}
              required
            />

            <div className="flex items-center justify-between mt-4 gap-4">
              <p className="text-xs text-subtle">
                Anonymous · Stored locally in your browser
              </p>
              <button
                type="submit"
                disabled={messageText.trim().length < 10}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Leave a note
              </button>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-sm text-emerald-400"
                  role="status"
                >
                  Thank you — your note has been added.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </FadeIn>

        {messages.length === 0 ? (
          <FadeIn>
            <div
              id="messages-heading"
              className="card-surface p-10 md:p-14 text-center max-w-lg mx-auto"
            >
              <p className="font-serif text-lg text-muted">
                The first note hasn&apos;t arrived yet.
              </p>
            </div>
          </FadeIn>
        ) : (
          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5"
            aria-labelledby="messages-heading"
          >
            <AnimatePresence mode="popLayout">
              {messages.map((msg, index) => (
                <motion.article
                  key={msg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    delay: index < 4 ? index * 0.05 : 0,
                    duration: 0.4,
                  }}
                  className="break-inside-avoid card-surface p-5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border ${typeStyles[msg.type].color}`}
                    >
                      {typeStyles[msg.type].label}
                    </span>
                    <time className="text-[10px] text-subtle">
                      {msg.timestamp}
                    </time>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    &ldquo;{msg.message}&rdquo;
                  </p>
                  <p className="mt-3 text-[10px] text-subtle">— A stranger</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
