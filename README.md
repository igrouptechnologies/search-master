## search-master ##

**search-master** is a simple web application which includes and Express RESTful API server and a front end in AngularJS

The video tutorial that goes with this project can be found here

## Usage ##
Just clone or download and run **npm install** and then **node app** to start

##Notes##
The Genres Angular controller is blank on purpose. This is for you to try and come up with after watching the video. It may be added in the future

# search-master


Social to share Button : 

http://plnkr.co/edit/TQoIJ2?p=preview


JSON format : 
```json
school = {
    _id: POST_ID
    title: TITLE_OF_POST, 
    description: POST_DESCRIPTION,
    by: POST_BY,
    url: URL_OF_POST,
    tags: [TAG1, TAG2, TAG3],
    likes: TOTAL_LIKES, 
    comments: [	
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES 
      },
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      }
   ]
}
```
