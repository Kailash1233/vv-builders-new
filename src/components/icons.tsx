type IconProps = {
  className?: string;
};

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MedalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 6.8l1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="7.5" r="2.75" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M15.8 12.7c2.4.4 4.2 2.5 4.2 5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function AwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="m9.2 7.8 1.8 1.8 3.3-3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 13 7 21l5-2.6 5 2.6-1.5-8" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function DotsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="1.4" fill="currentColor" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <circle cx="18" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export const statIcons = {
  medal: MedalIcon,
  building: BuildingIcon,
  users: UsersIcon,
  award: AwardIcon,
};

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3 5.3-2.2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9.5h12V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19.5v-6h4v6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="3.5" width="9" height="17" stroke="currentColor" strokeWidth="1.3" />
      <rect x="14" y="9" width="5" height="11.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 7h1.5M7.5 10.5h1.5M7.5 14h1.5M11 7h1.5M11 10.5h1.5M11 14h1.5M16 12h1M16 15h1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function SofaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="3.5" y="12" width="17" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 17.5v2M19.5 17.5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="4.5" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 4.5V3.8A1.3 1.3 0 0 1 10.3 2.5h3.4A1.3 1.3 0 0 1 15 3.8v.7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 11l2 2 4-4.5M9 16.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RenovateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 6.5 17.5 3.5a2 2 0 0 1 2.8 2.8L17.3 9.3M14.5 6.5 4 17v3h3L17.3 9.3M14.5 6.5l2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 19.5 3 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIcons = {
  home: HomeIcon,
  building: BuildingIcon,
  renovate: RenovateIcon,
  clipboard: ClipboardIcon,
};

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 10v6.5M7.5 7.6v.01M11.5 16.5V13c0-1.4.9-2.3 2-2.3s1.8.9 1.8 2.3v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11.5 10.5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M13.5 21V13h2.2l.3-2.6h-2.5V8.8c0-.75.2-1.26 1.28-1.26h1.37V5.2c-.24-.03-1.05-.1-2-.1-1.97 0-3.32 1.2-3.32 3.42v1.9H8.5V13h2.28v8"
        fill="currentColor"
      />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.3 9.3v5.4l4.8-2.7-4.8-2.7z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.3c.2-.4.4-.4.6-.4h.5c.15 0 .35 0 .5.4.2.5.65 1.6.7 1.75.06.13.1.3 0 .47-.08.18-.13.28-.26.43-.13.15-.27.34-.4.46-.13.13-.27.27-.12.53.15.27.68 1.13 1.47 1.83.99.9 1.83 1.18 2.1 1.31.27.13.43.11.6-.06.16-.18.68-.78.86-1.05.18-.27.36-.22.6-.13.27.1 1.65.78 1.93.92.27.13.46.2.52.32.06.13.06.72-.18 1.4-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.42-.72-2.9-1.17-4.72-4.1-4.87-4.3-.14-.2-1.16-1.54-1.16-2.94 0-1.4.75-2.08 1-2.36z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4v11.5M7.5 11l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 17.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 6.5l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 4.5h2.6l1.2 4-2 1.5a10 10 0 0 0 5.2 5.2l1.5-2 4 1.2V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 3.5 7.2 2.5 2.5 0 0 1 6 4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 1 0 5.5 10c0 4.9 6.5 11 6.5 11z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
