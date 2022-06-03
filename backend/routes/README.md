The routes folder is basically where you store all your requests, preferably you should separate every service and controller with its own route

Quote on Quote

we have the routes folder that will have a single file for each logical set of routes. For example, there can be routes for one type of resource. It can be further broken down by versions like v1 or v2 to separate the route files by the version of the API.

PS This is a very useful note to know, if you decide to drastically change an api, it is recommended to use versioning, so people can slowly adapt to the new version, before the old one gets deprecated