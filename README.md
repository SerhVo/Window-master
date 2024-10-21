# Window-master

Implemented functionality in the project:

	1.	Modal windows:
	•	Added a modal window with the class popup_engineer, which is triggered by clicking on the button. Logic for showing and hiding the modal upon clicking the close button or the overlay is implemented.
	•	The modal window with the class popup appears when clicking on the buttons “Request a callback” and “Ask our specialist”. As with the previous modal, it can be closed by clicking the close button or the overlay.
	2.	Form handling via AJAX:
	•	All forms, including those within modal windows, are submitted via AJAX without reloading the page. The mechanism for collecting all input data and sending it to the server is implemented.
	•	Messages indicating the submission status are displayed: “Loading”, “Thank you! We will contact you soon”, “Something went wrong…”.
	•	Phone number fields are validated to only allow numeric input.
	3.	Handling of 6 callback forms:
	•	All callback forms on the page are configured to be submitted via AJAX, with data collection and status messages displayed accordingly. The phone number fields also allow only numeric input.
	4.	Tabs:
	•	A tab system is implemented, enabling active tab switching and style updates (using the active class). Tabs are switched when clicking on either the image or the text.
	•	When the “Calculate cost” button inside each tab is clicked, a modal window with the class popup_calc is opened.
	5.	Cost calculation window:
	•	The logic for interacting with the mini-preview images is implemented: when clicking on a small image, it enlarges, and a corresponding large image is displayed below.
	•	Only numbers can be entered in the “Width” and “Height” fields.
	•	The “Next” button hides the current modal and opens a modal with the class popup_calc_profile.
	•	In the popup_calc_profile window, the user can only select one option (either cold or warm glazing).
	•	After clicking the “Next” button, the next window popup_calc_end opens, where all previously entered data is passed along with the form.
	6.	Tabs with style switching:
	•	Active tab switching and style changes are implemented using the after_click class.
	7.	Timer:
	•	A countdown timer with a customizable deadline is configured.
	8.	Full-screen image display:
	•	Functionality for opening any of the eight images in full-screen mode with a dark, semi-transparent overlay is implemented.
	•	Clicking on the overlay causes the image and background to disappear.
	9.	Inactivity modal window:
	•	If the user is inactive on the page for 60 seconds, a modal window with the class popup appears. It can be closed by clicking the close button or the overlay.
	10.	Modular structure:
	•	The project is built using a modular structure with ES6+ JavaScript. A bundling system is connected for optimization and dependency management.
	•	Special attention was given to eliminating code duplication. Repetitive actions were generalized and handled through functions and loops to improve efficiency.

