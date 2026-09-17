"use client";

import { useState } from "react";

export default function ProfileAvatar({ className = "", alt = "Profile picture" }) {
  const [src, setSrc] = useState("/api/profile-picture");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setSrc("/default-avatar.svg")}
      className={className}
      draggable={false}
    />
  );
}
