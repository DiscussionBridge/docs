import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.discussionbridge.dev",
  integrations: [
    starlight({
      title: "DiscussionBridge Docs",
      disable404Route: true,
      lastUpdated: true,
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
            { label: "Alpha Setup", slug: "alpha-setup" },
            { label: "Key Management", slug: "key-management" },
            { label: "Support And Feedback", slug: "support-and-feedback" },
            { label: "Known Issues", slug: "known-issues" },
          ],
        },
        {
          label: "Using The Bridge",
          items: [
            { label: "Comments Display", slug: "comments-display" },
            { label: "Content Lanes", slug: "content-lanes" },
            { label: "Presets And Placement", slug: "presets-and-placement" },
            { label: "Discussion-Safe Markdown", slug: "discussion-safe-markdown" },
            { label: "Troubleshooting", slug: "troubleshooting" },
          ],
        },
        {
          label: "Project",
          items: [
            { label: "Attribution, Ownership, And Licensing", slug: "attribution-ownership-license" },
            { label: "Build/Launch Checklists", slug: "build-launch-checklists" },
            { label: "Core/Adapter Architecture", slug: "core-adapter-architecture" },
            { label: "Core/Adapter Roadmap", slug: "core-adapter-implementation-roadmap" },
            { label: "Demo Plan", slug: "demo-plan" },
            { label: "Discourse Field Notes", slug: "discourse-field-notes" },
            { label: "Product Notes", slug: "product-notes" },
          ],
        },
      ],
    }),
  ],
});
