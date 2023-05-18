# Immortal Tracker

## A progress tracker for TW:WH3's Immortal Empires campaign, built by [Sam Hemingway](https://www.github.com/samhemingway)

![Video overview of Immortal Tracker](/docs/screenshot.png)

## Built with

- React
- Styled Components
- Framer Motion

## Features

- Track progress of every Legendary Lord in Total War: Warhammer 3.
- Search for lord/faction by text input.
- At a glance view of how many lords per faction you've completed, and their progress.
- Hover over a lord to preview their individual progress.
- No accounts/log-in required; everything is stored in local storage.

## Optimisation

- From the outset, I knew that this was going to be an image heavy app. As such, I optimised all images to be `.avif` format rather than `.png`. This resulted in reduced image sizes of up to 90%.
  - I felt comfortable committing to this image format as potential users for the app would be gamers, who generally use modern web browsers with support for this image format.
- The entire database of races/factions is not stored in local storage. Instead, we only store the factions/lords that the user has actually submitted progress for, and then interpret that progress onto the UI in the app when it is needed.
  - This will minimise the size of the local storage used by the app.

## License & Legal stuff

Disclaimer: All race, faction and legendary lord images featured on this repo are the property of Creative Assembly, the creators of Total War: Warhammer III. The use of these images is for informational and non-commercial purposes only, and they are not intended to infringe upon the rights of Creative Assembly or Total War: Warhammer III. All trademarks, logos, and copyrights are the property of their respective owners. If you are the owner of any content on this site and would like it removed, please contact me and I will promptly comply.

Other than the images, the source code itself is MIT license — feel free to fork, submit pull requests or modify this code in any way you see fit.
