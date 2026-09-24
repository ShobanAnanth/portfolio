# Edge AI Perception System images

Drop image files in this folder and they appear in the project's gallery
automatically — there is nothing to import or register.

- **Formats:** `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.avif`
- **Order:** files sort by filename, so prefix them `01-`, `02-`, `03-` …
- **Shape:** the panel is 4:3 and crops with `object-cover`. Landscape shots
  around 1600×1200 look best; anything wildly portrait will crop hard.

Until at least one image lands here, the panel falls back to a spec sheet built
from the project's `metrics` in `src/data/resume.ts`.

## Captions (optional)

Add an entry to `galleryCaptions` in `src/data/resume.ts`, keyed by filename
without its extension:

```ts
export const galleryCaptions: Record<string, string> = {
  '01-ar-overlay': 'Victim localized through simulated zero-visibility smoke.',
};
```

Images with no entry simply render without a caption.
