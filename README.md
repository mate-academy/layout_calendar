# Calendar
1. Replace `<your_account>` with your Github username in the links
    - [DEMO LINK](https://<your_account>.github.io/layout_calendar/)
    - [TEST REPORT LINK](https://<your_account>.github.io/layout_calendar/report/html_report/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Write styles in `src/styles/main.scss` instead of `src/style.css`.
    - This task does not have tests so you need to check if it works as expected manually.
___

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
- Use `.scss` for this task. Please do not use JavaScript.
  - [@each](https://sass-lang.com/documentation/at-rules/control/each)
  - [@for](https://sass-lang.com/documentation/at-rules/control/for)
- You can use `flex` and `margin-left` of required size for the `:first-child`
- Use the given HTML (don't change anything or add numbers 1 through 31).
- The first day of the week is Monday. (the first column)
- The `calendar-30` classname here means that the month has 30 days
  - It should also show correct number of days if we replace `calendar-30` class with `calendar-28`, `calendar-29` or `calendar-31`
- `calendar-tue` means that the first day of the month is Tuesday.
  - The calendar should start from the correct day if we change `calendar-tue` to any of those classes `calendar-mon`, `calendar-tue`, `calendar-wed`, `calendar-thu`, `calendar-fri`, `calendar-sat`, `calendar-sun`.
- Each day must be represented by a `100px × 100px` `#eeeeee`-colored cell (including `1px black` borders).
- The gap between the cells must be `1px`.
- The date should be written in the middle of the corresponding cell with `Arial 30px` font.
- On hovering over a cell, the cursor should become pointer.
- The hovered cell has to become pink
  - (**Optional**) Move it up by `20px`.
  - (**Optional**) both of these properties are to be animated with the duration of half a second.
  
--> [CHECKLIST](https://github.com/mate-academy/layout_snake/blob/master/checklist.md)

## Here is a preview:
![reference image](reference.png).
