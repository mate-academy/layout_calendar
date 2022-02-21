# Calendar
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://ivan-kadykalo.github.io/layout_calendar/)
- [TEST REPORT LINK](https://ivan-kadykalo.github.io/layout_calendar/report/html_report/)

___
<!-- > Follow [this instructions](https://github.com/mate-academy/layout_task-guideline#how-to-solve-the-layout-tasks-on-github) -->

<!-- - Write styles in `src/styles/main.scss` instead of `src/style.css`. -->
<!-- - This task does not have tests so you need to check if it works as expected manually. -->
___

<!-- ## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_calendar/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️ -->

## Task
<!-- Display a calendar in the middle of the screen. Use SCSS and follow BEM. Don't use JS. -->

<!-- - Create a markup for the calendar block with 31 days inside -->
  <!-- - DON'T add numbers in HTML (you will do it using CSS) -->
<!-- - Each day is a grey (`#eee`) `100px` square (including 1px black border) -->
  <!-- - Add a number (`Arial 30px`) in the center of each day using `::before` and [@for](https://sass-lang.com/documentation/at-rules/control/for) -->
<!-- - Use flex with `1px` gap and limit its width to exactly 7 columns + `10px` paddings -->
  <!-- - Don't use hardcoded `px` values if they are used several times -->
  <!-- - Use properly named variables to make all the calculations more clear. -->
<!-- - Implement `start-day` modifier for the `calendar` with `mon`, `tue`, `wed`, `thu`, `fri`, `sat` and `sun` values
  - Use [@each](https://sass-lang.com/documentation/at-rules/control/each) to create all the modifiers -->
  <!-- - The month should start at the correct column (Monday is the 1stc, Friday is the 5th) -->
  <!-- - You can just add correct `margin-left` for the first day -->
<!-- - Add a modifier `month-length` for the `calendar` with values 28, 29, 30 and 31 (use `@for`) -->
  <!-- - It sets the last day to show (use [nth-child](https://css-tricks.com/how-nth-child-works/)) -->
<!-- - On hovering over a cell, the cursor should become pointer. -->
<!-- - The hovered cell has to become pink -->
  <!-- - (**Optional**) Move it up by `20px` (use `transform`) -->
  <!-- - (**Optional**) both of these properties are to be animated with the duration of half a second. -->

<!-- --> [CHECKLIST](https://github.com/mate-academy/layout_calendar/blob/master/checklist.md) -->

## Here is a preview:
<!-- ![reference image](reference.png). -->

## Checklist
<!-- [BEM] - Check your BEM structure using BEM-linter (npm run lint) and this list -->
<!-- [BEM] - Make sure to follow BEM naming convention for complex modifiers: block-name--modifier-name--modifier-value; -->
<!-- [SASS] - Make use of SASS nesting - write pseudo-class, pseudo-element selectors inside general selector. As well as media queries. -->
<!-- [SASS] - Check your import syntax. It's differs from plain CSS. -->
<!-- [SASS] - use variables for the main values so that you'll be able to reuse them and give them descriptive names. But don't overuse them, don't create variable for the value that's used just once. -->
<!-- [SASS] - Don't use SASS loops for styles that stay the same for all elements of the group, e.g. display or position. -->
<!-- [STYLES] - Make sure to list all styles that you apply transition to. -->
<!-- [STYLES] - Make sure to add transition style under general selector, not the one with :hover - this way transition will work smoothly both ways. -->
<!-- [FUNCTIONALITY] - Your project should work correctly (have 31 days and start on Monday) with invalid modifier values, like start-day--ghy or days--27. -->
<!-- [STYLES] - Don't be greedy, add some top paddings, so the top row don't go over top of the page on hover. -->
