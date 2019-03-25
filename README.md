# Music Visualizer with p5js

Music visualizer made with p5js, p5js dom and p5js sound library.
Main goal was learn the p5js library and make something cool with it.
For now the repo don't have any songs but you can go to the [site](https://devdarkco.com/projects/musicvisualizer) and see the project by yourself. 

## Features:

* Frequency and Amplitude analyze with p5js sound library;
* 4 different animations;
* Options to see all the animations one by one or combined;
* Support to different devices (pc and smartphone);
* Html elemets with p5js dom library;
* Media controls;

**See the project at:** [https://devdarkco.com/projects/musicvisualizer](https://devdarkco.com/projects/musicvisualizer)

**Notice:**

If you clone this repo you should add your own songs in the "*p5/assets/songs/*" folder in **.mp3** format.

**You should also add your songs in the "*songs.json*" file in order to work.**

```javascript
[
    {
        "songs" : [
            {
                "name" : "songName1",
                "url" : "fileNameSong1",
                "author": "authorOFTheSong1"
            },
            {
                "name" : "songName2",
                "url" : "fileNameSong2",
                "author": "authorOFTheSong2"
            },
            {
                "name" : "songName3",
                "url" : "fileNameSong3",
                "author": "authorOFTheSong3"
            }
        ]
    }
]
```
**For now you need to add the songs in aplhabetic order, if not the info of the song will not display correctly. You can add all the songs that you want to the json file if you have the file needed in the songs directory.**

*Until i find a solution to the sort problem, you shoulf put the songs in alphabetic order.*

## Common between repos:
  
* Instagram:
  **@baka.marco**
* Website:
  [devdarkco.com](devdarkco.com)
  
### License MIT | Copyright 2019 | DevDarkCode

![MIT](https://opensource.org/files/OSI_Approved_License.png)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
