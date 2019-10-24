# Calendar
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`)
4. Run `npm start`.
5. Open one more terminal window for the next steps
6. `git checkout -b develop` - to create new branch and switch on it
7. Write you code in `src` folder
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to gh-pages
10. `git add . && git commit -m 'solution'` to save your chages
11. `git push origin develop` - to send you code for PR
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the 
  [DEMO LINK](https://<your_account>.github.io/layout_calendar/)
14. Copy `DEMO LINK` to the PR description

> To update you PR repeat steps 7-11

## Task
Display a calendar in the middle of the screen. The HTML of the calendar needs to have the following structure:
```html
<div class="calendar calendar-30 calendar-tue">
  <div></div>
  <div></div>
  <!--
  ...
  31 child divs in total
  ...
  -->
  <div></div>
</div>
```
- Use SASS (.scss) for this task. Please do not use JavaScript.
  - [@each](https://sass-lang.com/documentation/at-rules/control/each)
  - [@for](https://sass-lang.com/documentation/at-rules/control/for)
- You can use `flex` and `margin-left` of required size for the `:first-child`
- Use the given HTML (don't change anything or add numbers 1 through 31).
- The first day of the week is Monday. (the first column)
- The `calendar-30` classname here means that the month has 30 days, and `calendar-tue` means that the first day of the month is Tuesday.
- Your calendar should also accept the following alternative classnames and display itself accordingly: `calendar-28`, `calendar-29`, `calendar-30`, `calendar-31`; `calendar-mon`, `calendar-tue`, `calendar-wed`, `calendar-thu`, `calendar-fri`, `calendar-sat`, `calendar-sun`.
- Each day must be represented by a 100px × 100px #eeeeee-colored cell (including 1px black borders).
- The gap between the cells must be 1 pixel.
- The date should be written in the middle of the corresponding cell with Arial 30px font.
- Upon hovering over a cell, the cursor should become pointer.
- The hovered cell has to become pink
  - (**Optional**) Move it up by `20px`.
  - (**Optional**) both of these properties are to be animated with the duration of half a second.

## Here is a preview: 
![reference image](reference.png).
