"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiUpload, FiXCircle } from "react-icons/fi";

function UploadCard({ title, description, endpoint, accept, secret, previewKind }) {
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

export default function AdminPage() {
  const [secret, setSecret] = useState("");

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
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
        />
        <UploadCard
          title="Resume"
          description="PDF only — max 10MB."
          endpoint="/api/upload/resume"
          accept="application/pdf"
          secret={secret}
          previewKind="pdf"
        />
      </div>
    </main>
  );
}
