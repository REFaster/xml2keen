# xml2keen 

This is everything you need to send XML data to http://keen.io for your analytics reporting.

Simply pull this repo, run "npm install" in the command line, then "node server".

From there use your favorite REST Client, I like: https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US

Do a POST request to http://localhost:3000 with XML data in the body, you'll see the JSON response in the REST client and in your console.

Next go to line 49 and 50 of server.js and enter in your ProjectID and API writekey.

Run that same test and you'll see it post into Keen

Next go to http://heroku.com and sign up for a free account, then follow their instructions for pushing your code to an account with them.

Test again with http://{{your app name here}}.herokuapp.com instead of localhost

After completing your tests, tell your XML provider to send it's data to your web app and you're done.

Now you can send XML data to Keen.io :)


# License

(The MIT License)

Copyright (c) 2015 Deven Nemer <realestatefaster@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.