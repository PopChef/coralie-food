# Corafood

## Usage

The source file is `icons/corafood.ai`.  
Open it in Adobe Illustrator, use _file -> Save a copy_, select _.svg_ and tick _Use Artboards_ to re-generate the `.svg` sources.  
The settings that matter for the SVGs are:
  - _SVG Profiles_: **SVG 1.1**
  - _Type_: **SVG**
  - _Decimal Places_: **3** is enough

Run `$ gulp` to generate the webfonts.

Run `$ gulp serve` and go to [port 3000](http://localhost:3000).  
[/svg.html](http://localhost:3000/svg.html) is also available, it contains all the `.svg` sources, injected with [iconic's SVGInjector](https://github.com/iconic/SVGInjector).

## Tips
At anytime, press:
  - <kbd>g</kbd> to see the icons in Popchef's green
  - <kbd>s</kbd> to shuffle the order of the icons
  - <kbd>p</kbd> to increase the size of the icons
  - <kbd>m</kbd> to decrease the size of the icons

