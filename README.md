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

School
```json
{
    "id": "id",
    "name": "name", 
    "address": "address",
    "city":"city",
    "state":"state",
    "country":"country",
    "website": "abc.com",
    "email": ["email1", "email2"],
    "phone": ["phone1", "phone2"],
    "likes": "TOTAL_LIKES", 
    "follows":[{"follower":"follower1"},{"follower":"follower2"}],
    "socialmedia":[{"facebook":"facebook_page"},{"pinterest":"pinterest_images"}],
    "reviews": [
        { 
        "user": {"display_name": "AAAA" },
            "service": {
                "rating": {
                    "rating": "5"
                },
                "review": "Excellent"
            }
        },
        { 
        "user": {"display_name": "BBBB" },
            "service": {
                "rating": {
                    "rating": "4"
                },
                "review": "Good"
            }
        },
        { 
        "user": {"display_name": "CCCC" },
            "service": {
                "rating": {
                    "rating": "3"
                },
                "review": "Average"
            }
        }
       ]
     }
```

User : 
```json
{
        "user_id" : "ABCDBWN",
        "password" : "ABCDBWN",
        "date_of_join" : "15/10/2010",
        "education" : "B.C.A.",
        "profession" : "DEVELOPER",
        "interest" : "MUSIC",
        "community_name" : [
                "MODERN MUSIC",
                "CLASSICAL MUSIC",
                "WESTERN MUSIC"
        ],
        "community_moder_id" : [
                "MR. BBB",
                "MR. JJJ",
                "MR MMM"
        ],
        "community_members" : [
                500,
                200,
                1500
        ],
        "friends_id" : [
                "MMM123",
                "NNN123",
                "OOO123"
        ],
        "ban_friends_id" : [
                "BAN123",
                "BAN456",
                "BAN789"
        ]
}

```

School :
```json
{

    "_id" : ObjectId("58434da482139207a2bfbbab"),
    "name" : "Padra High Schhol",
    "address" : "Statiion road",
    "city" : "Padra",
    "state" : "GJ",
    "students" : "60-131-9227",
    "teachers" : "92-994-1933",
    "email" : "jhernandez0@mapquest.com",
    "website" : "jhernandez0@miibeian.gov.cn",
    "phone" : "27-973-8142",
    "medium" : ["GSEB","CBSE","ICSE"]
}
```
