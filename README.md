# Calendar

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

If you can, please do not add anything else to the HTML (including numbers 1 through 31).

The `calendar-30` classname here means that the month has 30 days, and `calendar-tue` means that the first day of the month is Tuesday.
Your calendar should also accept the following alternative classnames and display itself accordingly: `calendar-28`, `calendar-29`, `calendar-30`, `calendar-31`; `calendar-mon`, `calendar-tue`, `calendar-wed`, `calendar-thu`, `calendar-fri`, `calendar-sat`, `calendar-sun`. The first day of the week is Monday.

Each day must be represented by a 100px × 100px #eeeeee-colored cell (including 1px black borders). The gap between the cells must be 1 pixel. The date should be written in the middle of the corresponding cell with Arial 30px font.
Upon hovering over a cell, the cursor should become pointer. The hovered cell has to become pink and rise by 20 pixels; both of these properties are to be animated with the duration of half a second.

Please see a [reference image](reference.png).

You are encouraged to use SASS (.scss) for this task. Please do not use JavaScript.