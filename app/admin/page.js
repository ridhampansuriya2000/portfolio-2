"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDownload, FiEye, FiUpload, FiXCircle } from "react-icons/fi";

function UploadCard({ title, description, endpoint, accept, secret, previewKind, onUploaded }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) {
      setStatus("error");
      setMessage("Choose a file first.");
      return;
    }
    if (!secret) {
      setStatus("error");
      setMessage("Enter the upload secret above first.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "x-upload-secret": secret },
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || `Upload failed (${res.status})`);
        return;
      }

      setStatus("success");
      setMessage("Uploaded — it will now overwrite whatever was live before.");
      onUploaded?.();
    } catch (error) {
      setStatus("error");
      setMessage("Network error while uploading.");
    }
  }

  return (
    <form
      onSubmit={handleUpload}
      className="rounded-2xl glass-card p-6 flex flex-col gap-4"
    >
      <div>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/50">{description}</p>
      </div>

      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setStatus("idle");
          setMessage("");
        }}
        className="block w-full text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-accent-light"
      />

      {file && previewKind === "image" && (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="h-24 w-24 rounded-full object-cover border border-white/10"
        />
      )}
      {file && previewKind === "pdf" && (
        <p className="text-xs text-white/50">Selected: {file.name}</p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light disabled:opacity-50"
      >
        <FiUpload /> {status === "loading" ? "Uploading…" : "Upload"}
      </motion.button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <FiCheckCircle /> {message}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <FiXCircle /> {message}
        </p>
      )}
    </form>
  );
}

function CurrentPreview({ title, kind, apiPath, reloadKey }) {
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  async function viewPdf() {
    setStatus("loading");
    setError("");

    // Open the tab synchronously, as a direct result of the click, so browsers
    // don't treat it as a blocked popup once we `await` the fetch below.
    const viewerTab = window.open("", "_blank");

    try {
      const res = await fetch(`${apiPath}?_=${reloadKey}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      if (viewerTab) {
        // Render inside an <iframe> rather than navigating the tab straight to
        // the blob: URL — some browsers are set to force-download a top-level
        // PDF navigation, but an embedded PDF viewer still renders inline.
        viewerTab.document.title = title;
        viewerTab.document.write(
          `<iframe src="${blobUrl}" style="position:fixed;inset:0;width:100%;height:100%;border:0;"></iframe>`
        );
      } else {
        window.open(blobUrl, "_blank");
      }

      setStatus("idle");
    } catch (err) {
      viewerTab?.close();
      setStatus("error");
      setError("Could not load the resume.");
    }
  }

  return (
    <div className="rounded-2xl glass-card p-6 flex flex-col gap-4">
      <div>
        <h3 className="font-display text-lg font-semibold text-white">Current {title}</h3>
        <p className="mt-1 text-sm text-white/50">
          Whatever is live on the public site right now.
        </p>
      </div>

      {kind === "image" && (
        <img
          key={reloadKey}
          src={`${apiPath}?_=${reloadKey}`}
          alt={`Current ${title}`}
          className="h-24 w-24 rounded-full object-cover border border-white/10"
        />
      )}

      {kind === "pdf" && (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={viewPdf}
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-accent/60 hover:text-white disabled:opacity-50"
          >
            <FiEye /> {status === "loading" ? "Loading…" : "View"}
          </button>
          <a
            href={apiPath}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-accent/60 hover:text-white"
          >
            <FiDownload /> Download
          </a>
        </div>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <FiXCircle /> {error}
        </p>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <main className="dark min-h-screen bg-ink px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-2xl font-bold text-white">Portfolio Admin</h1>
      <p className="mt-2 text-sm text-white/50">
        Upload a new profile picture or resume. Each upload overwrites the previous one stored
        in MongoDB — the public site always serves whatever was uploaded most recently, falling
        back to the defaults if nothing has been uploaded yet.
      </p>

      <div className="mt-8 rounded-2xl glass-card p-6">
        <label className="text-sm font-medium text-white/70">Upload Secret</label>
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Matches UPLOAD_SECRET in .env.local"
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-accent/60"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <UploadCard
          title="Profile Picture"
          description="PNG, JPEG, or WEBP — max 5MB."
          endpoint="/api/upload/profile-picture"
          accept="image/png,image/jpeg,image/webp"
          secret={secret}
          previewKind="image"
          onUploaded={() => setReloadKey((k) => k + 1)}
        />
        <UploadCard
          title="Resume"
          description="PDF only — max 10MB."
          endpoint="/api/upload/resume"
          accept="application/pdf"
          secret={secret}
          previewKind="pdf"
          onUploaded={() => setReloadKey((k) => k + 1)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CurrentPreview
          title="Profile Picture"
          kind="image"
          apiPath="/api/profile-picture"
          reloadKey={reloadKey}
        />
        <CurrentPreview title="Resume" kind="pdf" apiPath="/api/resume" reloadKey={reloadKey} />
      </div>
      </div>
    </main>
  );
}
