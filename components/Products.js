"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGlobe, FiPackage } from "react-icons/fi";
import { SiGooglechrome } from "react-icons/si";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { products } from "@/data/resume";
import { colorAt } from "@/lib/colors";

const linkIcons = {
  web: FiGlobe,
  extension: SiGooglechrome,
};

export default function Products() {
  return (
    <section id="products" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <RevealSection className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
            Products
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg sm:text-4xl">
            Things I&apos;ve shipped on my own
          </h2>
        </RevealSection>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product, index) => {
            const color = colorAt(index + 5);
            const websiteUrl = product.links.find((link) => link.type === "web")?.href;
            return (
              <StaggerItem key={product.name}>
                <div
                  className={`group h-full rounded-2xl p-7 transition-all ${color.card} ${color.border} ${color.glow}`}
                >
                  <div className="flex items-center gap-3">
                    {product.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="h-11 w-11 rounded-xl object-cover shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6"
                      />
                    ) : (
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110 group-hover:rotate-6 ${color.iconBg} ${color.icon}`}
                      >
                        <FiPackage size={18} />
                      </span>
                    )}
                    <div>
                      <h3 className={`font-display text-lg font-semibold ${color.text}`}>
                        {websiteUrl ? (
                          <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {product.name}
                          </a>
                        ) : (
                          product.name
                        )}
                      </h3>
                      <p className="text-xs text-fg/50">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-fg/60">{product.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-xs ${color.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {product.links.map((link) => {
                      const LinkIcon = linkIcons[link.type] ?? FiExternalLink;
                      return (
                        <motion.a
                          key={link.href}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-fg/5 px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-fg/10"
                        >
                          <LinkIcon size={14} /> {link.label}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
