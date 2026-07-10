// Lightweight cookie-consent helper.
// Consent is stored in localStorage and changes are broadcast so that
// components gating non-essential content (e.g. the Google Maps embed)
// can react immediately.

export const CONSENT_KEY = 'dlsc-cookie-consent';
export const CONSENT_EVENT = 'dlsc-consent-change';

export type Consent = 'accepted' | 'rejected' | null;

export function getConsent(): Consent {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setConsent(value: Exclude<Consent, null>): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
