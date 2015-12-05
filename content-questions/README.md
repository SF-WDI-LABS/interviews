1. What happens when you open your browser, type `generalassemb.ly`, and hit enter?

	For an incredibly long and detailed response, see <a href="https://github.com/alex/what-happens-when" target="_blank">this answer from GitHub</a>.  Our students should definitely describe the request-response cycle, list the kinds of files the browser will request, and describe how a Rails or Express server would serve those files.   

	Some other highlights include:   
		
	   	* DNS lookup converts the url to an IP address of the server   
	   	* HTML and CSS are parsed to create the DOM   
	   	* the browser renders the page   
	   	* scripts that execute after the page loads are run   

1. What are some ways to reduce page load time?

	See Yahoo's <a href="https://developer.yahoo.com/performance/rules.html" targe="_blank">performance guidelines</a> for answer suggestions.  Students should **definitely** mention minimizing the number of HTTP requests made to the server.  


1. What is “Semantic HTML?” Can you give examples? (If a student doens't know what semantic HTML is, give the basic definition and one example and ask them for another example.)

	Semantic HTML describes what the content is and what it means, not how it should be displayed. For instance, tags like <b></b> for bold and <i></i> for italic are replaced with <strong></strong> and <em></em>.   Another example could be using a class name of "quotation" instead of "indented-slanted" or something.

1. What's the basic structure of an HTML document? What does the DOCTYPE mean? What types of elements are generally in the head? Can you give examples?  What types of elements are generally in the body?
	
	```html
	<!DOCTYPE html>
	<html>
	  <head>
	  </head>
	  <body>
	  </body>
    </html>
    ```

    Doctype says which version of HTML the file uses.  Notable head elements are title, stylesheet links, perhaps script tags for JavaScript files.

1. What are some differences between HTML and HTML5?

	There are many. HTML originally provided markup language to structure the content on a page, and HTML5 includes additional semantic structural elements (`<article>`, `<footer>`, `<nav>`, etc.). It also has elements for `<audio>` and `<video>` with attributes that can add controls or determine whether the media element autoplays, plus `<embed>` for bringing in third-party multimedia.  There are new elements for (potentially interactive) graphics: `<svg>` and `<canvas>`. HTML5 can take the place of technologies like Flash. HTML5 also adds APIs for things like WebGL, camera, geolocation, local storage, and history.

	Much more at <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">MDN</a>.



1. What is the difference between SVG and Canvas? When might you use each?

	Scalable Vector Graphics works on shapes that are appended to the DOM. They can be manipulated with JavaScript and CSS, and can have event listeners attached to them. They also resize very well because they are drawn with vectors. SVGs are a good choice for simple icons that may need to be shown at many different sizes, or when you want to interact with pieces of the image as entities.  Canvas uses JavaScript to manipulate images pixel-by pixel; there is no built-in concept of an object on the canvas. This can be good for image processing, physics simulation, or scenarios where an image is so complex that drawing it with SVGs would require too many additional DOM elements. 


1. Describe the difference between cookies, `sessionStorage`, and `localStorage`.

	Cookies are small text files for tracking or login purposes. `sessionStorage` allows browsers to store key/value pairs that are available as long as the browser is open, including page reloads and restores.  LocalStorage does the same thing but persists when the browser clsoes and reopens. Any of these can be changed or deleted by the user. 