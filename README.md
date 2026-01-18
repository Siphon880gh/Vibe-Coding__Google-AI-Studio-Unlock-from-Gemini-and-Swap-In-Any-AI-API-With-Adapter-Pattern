# Prompt Engineering the Vibe-Coding Process (Text-to-Image AI App)

![Last Commit](https://img.shields.io/github/last-commit/Siphon880gh/Vibe-Coding---Text-to-Image/main)
<a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" style="max-width:8.5ch;"></a>
<a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue" style="max-width:10ch;"></a>
<a target="_blank" href="https://www.youtube.com/@WayneTeachesCode/" rel="nofollow"><img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red" style="max-width:10ch;"></a>

By Weng Fei Fung (Weng). 

**TL;DR:**
Demonstrates vibe-coding in Google AI Studio while avoiding vendor lock-in to the Gemini API by abstracting model access behind a scalable, provider-agnostic adapter.

As of **January 2026**, apps built and run inside **Google AI Studio** can still use **generative tokens at no cost**, including both the **code generation** used to build the app and the **text-to-image generation** the app performs.
That said, there are a few business risks to keep in mind:

* Google could eventually remove or limit the free tier.
* If you export the project to deploy it online, you’ll likely be **locked into the Gemini API**.
* The difference between **API key mode** and **non–API key mode** (the “unlimited tokens” toggle in the top-right) isn’t obvious unless you already know the platform—or you’ve documented it for your team.

This codebase is designed to **unlock that vendor lock-in in a scalable way** by keeping you in **full control of the business logic**. We’ll use an **adapter pattern** for AI model communication, so the app can swap providers cleanly—Gemini today, **OpenAI** (or others) later—without rewriting the core product.

In our case, switching to OpenAI would require an upfront investment, since it isn’t a free model. Make sure to budget for it if you or a trainee is following my code and notes.

This is **Part 2** of a prompt-engineering series focused on improving the vibe-coding workflow. The goal is to ship faster, build more complete MVPs and features, and keep strong human-in-the-loop oversight alongside AI generation. Rather than relying on “vibe coding” alone, Weng applies prompt-engineering techniques to make the process more reliable and produce higher-quality code. And instead of a multi-agent framework, Weng sticks to a single-agent approach—because the AI isn’t quite there yet—and focuses on raising the quality of the generated output.