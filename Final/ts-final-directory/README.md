# Student Directory Final Project

## Part 1: Written Plan

### Student Fields
- Required: `id`, `firstName`, `lastName`, `program`, `year`, `email`, `bio`, `skills`.
- Optional: `gpa`, `photoUrl`.

### Planned Views / Sections
- Header with project title and short description.
- Search + program filter controls with a live result count.
- Add Student form with grouped fieldsets (Personal Info, Academic Info, Bio).
- Directory card grid populated by TypeScript.
- Empty/loading state in the directory container.

### Layout Sketch (Text)
- Top: Hero/header band with title.
- Middle: Controls panel, then form panel, then directory panel.
- Bottom: Footer.
- Mobile-first stacked layout, moving to multi-column card grid on larger screens.

## Project Description

This app is a vanilla TypeScript student directory. You can add students, search by name/bio/skills, filter by program, remove students with confirmation, and view live stats. Data persists in localStorage and falls back to seed data when nothing has been saved yet.

## Required TypeScript Concepts Checklist

| Concept | Where it is used |
|---|---|
| interface | `Student` interface in `src/types.ts` |
| union type | `Program` and `ClassYear` unions in `src/types.ts` |
| class + access modifiers | `StudentRepository` with `private students` in `src/data.ts` |
| type assertion (`as`) | DOM element casts in `src/app.ts` and `src/render.ts` |

## Required Web API Interfaces Checklist

| Interface | Where it is used |
|---|---|
| `HTMLFormElement` | Student form lookup and submit/reset listeners in `src/app.ts` |
| `HTMLFieldSetElement` | Fieldset grouping in `index.html` |
| `HTMLLabelElement` | Explicit labels for each input in `index.html` |
| `HTMLInputElement` | Search and form inputs in `src/app.ts` |
| `HTMLSelectElement` | Program and class-year selects in `src/app.ts` |
| `HTMLTextAreaElement` | Bio textarea lookup and input listener in `src/app.ts` |
| `HTMLButtonElement` | Save/Reset/Delete buttons in `index.html` and `src/render.ts` |
| `HTMLOutputElement` | Bio character counter + live result count in `src/render.ts` |
| `HTMLDataListElement` | Skill suggestion list in `index.html` and `src/render.ts` |
| `HTMLOptionElement` | Datalist and select option creation in `src/render.ts` and `src/app.ts` |

## Build and Run

1. Open this folder in VS Code.
2. Compile TypeScript:
	- `npx tsc`
3. Open `index.html` in a browser.
4. Re-run `npx tsc` whenever `.ts` files change, then refresh the browser.

## Notes / Future Improvements

- Add stronger form validation messages for email format and minimum bio length.
- Add sort controls (A-Z / Z-A / newest).
- Add inline edit support for existing students.
