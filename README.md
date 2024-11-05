# Calendar

Display a calendar in the middle of the screen (both horizontally and vertically). Use SCSS and follow BEM. Don't use JS.

- x Write styles in `src/styles/main.scss` instead of `src/style.css`.
- x Create a markup for the calendar block with 31 days inside
  - x DON'T add numbers in HTML (you will do it using CSS)
- x Each day is a grey (`#eee`) `100px` square (including 1px black border)
  - x Add a number (`Arial 30px`) in the center of each day using `::before` and [@for](https://sass-lang.com/documentation/at-rules/control/for)
- x Use flex with `1px` gap and limit its width to exactly 7 columns + `10px` paddings
  - x Don't use hardcoded `px` values if they are used several times
  - x  Use properly named variables to make all the calculations more clear.
- x Implement `start-day` modifier for the `calendar` with `mon`, `tue`, `wed`, `thu`, `fri`, `sat` and `sun` values
  - x Use [@each](https://sass-lang.com/documentation/at-rules/control/each) to create all the modifiers
  - x The month should start at the correct column (Monday is the 1st, Friday is the 5th)
  - You can just add correct `margin-left` for the first day
  - x Set calendar to start from Sunday by default
- x Add a modifier `month-length` for the `calendar` with values 28, 29, 30 and 31 (use `@for`)
  - It sets the last day to show (use [nth-child](https://css-tricks.com/how-nth-child-works/))
  - x Set 31 days by default

On hovering over a cell:
- x cursor should become pointer
- x The hovered cell has to become pink (use `#FFBFCB`)
- x Move the hovered cell up by `20px` (use `transform`)
- x All changes should be animated with the duration of 0.5s

> Here are the [Layout Tasks Instruction](https://github.com/mate-academy/layout_task-guideline#how-to-solve-the-layout-tasks-on-github)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

![reference image](reference.png).

## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:

- [DEMO LINK](https://ZorosMG.github.io/layout_calendar/)
- [TEST REPORT LINK](https://ZorosMG.github.io/layout_calendar/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [x] Changing 'month-lengh' and 'start-day' modifier in the code element
reflects in changing calendar layout
- [x] Each day has no modifiers, only class (eg. calendar__day)
- [x] All `Typical Mistakes` from `BEM` lesson theory are checked.
- [x] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
