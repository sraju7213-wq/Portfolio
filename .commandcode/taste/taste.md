# ui-components
- Use pictures or thumbnails for work/project cards instead of text-only placeholders. Confidence: 0.65

# debugging
- When a fix doesn't resolve the reported issue, the user reports it concretely with specifics (e.g., "the problem is in when valleyweddingcars project open") rather than just saying "it doesn't work". Treat such follow-ups as a signal to dig deeper into library internals rather than re-trying the same surface-level fix. Confidence: 0.7

# communication
- User writes in casual, terse, lowercase style with minimal punctuation (e.g., "update resume file its in the main folder", "fill the extra empty space with better gird, alignment, and design manage"). Match the register — be direct and concise, don't over-formalize. Confidence: 0.85

# workflow
- User keeps source assets (profile photo, Resume.pdf, etc.) loose in the project root and expects the assistant to copy them into `public/` and wire up the references in components. Confidence: 0.75

# design
- When the user reports unbalanced layout or empty space, they want structural redesign — restructure column ratios, add new content sections (skills, stats strip, education/experience side-by-side), and pull from existing data in `content.ts` to fill gaps rather than just adding padding or filler. Confidence: 0.7
