AppFog Deployable Locomotive Sample
========================

Sample Locomotive application that can be deployed to [AppFog](http://appfog.com).

This project consists of the following components.

- [Locomotive.js](https://github.com/jaredhanson/locomotive) (based on [Express.js](https://github.com/visionmedia/express))

Uses
----
- Great for AppFog deployment, just checkout the code and you're ready to deploy to AppFog

Starting
--------
To run the app simply run the following command:

    $ node app

The `app.js` file will use to run by AppFog.

Deployment
----------

Here are deployment instructions for various Platform as a Service environments.

### AppFog


First time:

    $ gem install af
    $ af login
    $ af push

Subsequent updates:

    $ af update <ap-name>






