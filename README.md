# Youtube Clone App

Live link: https://yt-clone-theta.vercel.app/

## Tech Stack
* **AWS** 
    * S3 Buckets to store mp4 videos
    * Lambda functions to create signed url for uploading videos and to create unique names for mp4 files
    * Cloudfront as a CDN to distribute videos to reduce latency
* **Next.js 13 (beta)**
    * used the app directy introduced in next.js version 13
    * used server side components that are rendered on the server which significantly increase the speed and performance of the app
* **useQuery**
    * used in place of state management
    * custom fetching and data cacheing logic
* **Tailwind** :
    * Styled app using utility classes
    * used breakpoints to make design reactive
* **Database** :
    * Postgres
    * Prisma as the ORM
* **Railway** : Host database
* **Vercel** : CI/CD and app hosting
* **Authentication** :  NextAuth and Googles OAuth

## Functionalities
* Login with google account
* Watch video and increase view count
* like and dislike videos (yes, we have dislike count!)
* upload videos on your channel


## Reflection

### Learning Outcomes
1. How to create web app using next.js 13 beta (serverside components, streaming, layouts, ect)
2. How to use Google OAuth with NextAuth 
3. How to upload files to S3 buckets
4. How to create AWS Lambda functions
5. How to use Cloudfront to create distribution
6. How to style with Tailwind and make reactive app
7. How to use useQuery and take advantage of caches
8. How to use prisma as ORM and create relationships between entities


### Unexpected Obstacles
* State management is not straightforward when using Next.js new layout features
* Have to be cognitive of what to do on serverside and client side

## Available Scripts

1. Clone repo
2. Run `npm install`
3. Run `npm run dev`

