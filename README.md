# speech2text

## What

This application uses the

[Web Speech API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

to convert speech to text, it can also prompt you just in case you forget to speak. Just tap a button to start/stop the recording & conversion.



## Demo

<img src="https://user-images.githubusercontent.com/53901027/89573971-09644580-d849-11ea-9b5b-26b297afb4fe.png" alt="Select an image and tap the button."  />



<img src="https://user-images.githubusercontent.com/53901027/89574254-7b3c8f00-d849-11ea-9719-60ee657020e3.png" alt="Click the button and start speaking."  />



<img src="https://user-images.githubusercontent.com/53901027/89576584-1b47e780-d84d-11ea-9b1f-2d498908ea5c.png" alt="It shows a little message when you don't speak for a while"  />



<img src="https://user-images.githubusercontent.com/53901027/89574434-c191ee00-d849-11ea-968f-3816e9e146ee.png" alt="Click again to stop and an alert shows the spoken text"  />



## Usage

1. Download/Clone this repo.

2. Extract the zipped folder.

3. Start a localhost server or a live server inside the downloaded folder with any of the following commands

   ```
   $ python -m http.server 8000
   ```

   or

   ```
   $ live-server
   ```

4. Open your browser and enter the url as `http://localhost:8000/`.