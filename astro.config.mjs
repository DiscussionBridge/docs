import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.discussionbridge.dev",
  integrations: [
    starlight({
      title: "DiscussionBridge Docs",
      disable404Route: true,
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      components: {
        PageTitle: "./src/components/PageTitle.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      social: [
        {
          icon: "discourse",
          label: "DiscussionBridge community forum",
          href: "https://forum.discussionbridge.dev/",
        },
        {
          icon: "github",
          label: "DiscussionBridge on GitHub",
          href: "https://github.com/DiscussionBridge",
        },
        {
          icon: "blueSky",
          label: "DiscussionBridge on Bluesky",
          href: "https://bsky.app/profile/discussionbridge.bsky.social",
        },
        {
          icon: "discord",
          label: "DiscussionBridge on Discord",
          href: "https://discord.gg/Y7SRQAxKq",
        },
        {
          icon: "mastodon",
          label: "DiscussionBridge on Mastodon",
          href: "https://mastodon.social/@DiscussionBridge",
        },
        {
          icon: "reddit",
          label: "DiscussionBridge on Reddit",
          href: "https://www.reddit.com/r/DiscussionBridge/",
        },
        {
          icon: "youtube",
          label: "DiscussionBridge on YouTube",
          href: "https://www.youtube.com/@DiscussionBridge",
        },
      ],
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "index" },
            { label: "Versions & Live Status", slug: "versions-and-live-status" },
            { label: "Demo Guide", slug: "demo-plan" },
            { label: "Install & Operate", slug: "alpha-operator-guide" },
            { label: "Platform Profiles", slug: "platform-profiles" },
            { label: "How Adapters Work", slug: "adapter-operating-models" },
            { label: "Presentation Modes", slug: "presentation-modes" },
          ],
        },
        {
          label: "Platform Guides",
          items: [
            { label: "Astro", slug: "astro-install-operate" },
            { label: "Ghost", slug: "ghost-install-operate" },
            { label: "Hugo", slug: "hugo-install-operate" },
            { label: "Statamic", slug: "statamic-install-operate" },
            { label: "WordPress", slug: "wordpress-install-operate" },
            { label: "Change Platforms, Keep Discussion", slug: "change-platforms-keep-discussion" },
          ],
        },
        {
          label: "Operate",
          items: [
            { label: "Human Operator Manual", slug: "human-manual" },
            { label: "Machine Operator Manual", slug: "machine-manual" },
            { label: "Human Runbook Template", slug: "site-runbook-human-template" },
            { label: "Machine Runbook Template", slug: "site-runbook-machine-template" },
            { label: "Key Management", slug: "key-management" },
            { label: "Troubleshooting", slug: "troubleshooting" },
            { label: "Known Issues", slug: "known-issues" },
            { label: "Support & Feedback", slug: "support-and-feedback" },
          ],
        },
        {
          label: "Astro Deep Reference",
          items: [
            { label: "Legacy 0.1 Migration", slug: "alpha-setup" },
            { label: "Comments Display", slug: "comments-display" },
            { label: "Content Lanes", slug: "content-lanes" },
            { label: "Presets And Placement", slug: "presets-and-placement" },
            { label: "Discussion-Safe Markdown", slug: "discussion-safe-markdown" },
          ],
        },
        {
          label: "Product Reference",
          items: [
            { label: "Architecture", slug: "core-adapter-architecture" },
            { label: "Product Concepts & Terminology", slug: "product-notes" },
            { label: "Build & Launch Checklists", slug: "build-launch-checklists" },
            { label: "Attribution, Ownership, And Licensing", slug: "attribution-ownership-license" },
            { label: "Roadmap", slug: "draft-roadmap" },
          ],
        },
        {
          label: "Archive",
          collapsed: true,
          items: [
            { label: "Implementation Roadmap", slug: "core-adapter-implementation-roadmap" },
            { label: "Discourse Field Notes", slug: "discourse-field-notes" },
          ],
        },
        {
          label: "DiscussionBridge",
          items: [
            { label: "Main Site", link: "https://discussionbridge.dev/" },
            { label: "Live Demos", link: "https://demo.discussionbridge.dev/" },
            { label: "The Bridge Demo", link: "https://bridge.demo.discussionbridge.dev/" },
            { label: "Community & Support", link: "https://forum.discussionbridge.dev/" },
          ],
        },
      ],
    }),
  ],
});
