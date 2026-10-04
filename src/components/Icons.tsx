type IconProps = { className?: string };

function base(path: string, className?: string) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return base(
    "M7 3.5h3.2l1.2 3.1-1.8 1.1a12.5 12.5 0 0 0 6.7 6.7l1.1-1.8 3.1 1.2V17a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 6.7 2 2 0 0 1 7 3.5Z",
    className,
  );
}

export function IconPin({ className }: IconProps) {
  return base(
    "M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Zm0-7.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z",
    className,
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.92" />
      <path d="M10 8.2v7.6L16.2 12 10 8.2Z" fill="#08320c" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return base("M6 6l12 12M18 6 6 18", className);
}

export function IconChevron({ className }: IconProps) {
  return base("M14.5 5.5 8 12l6.5 6.5", className);
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconYouTube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3" y="6.5" width="18" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M11 10.2v3.6L14.4 12 11 10.2Z" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H16V4h-1.6C12.2 4 11 5.3 11 7.1v1.4H9v2.2h2V20h3v-9.3h1.8l.4-2.2H14Z"
        fill="currentColor"
      />
    </svg>
  );
}
