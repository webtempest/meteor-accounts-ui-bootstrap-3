meteor-accounts-ui-bootstrap-3
=====================================

Meteor accounts-ui styled with twitter/bootstrap 3

Prerequisites
-------------

Use the meteorite package manager
http://oortcloud.github.com/meteorite/

[sudo] npm install -g meteorite

How to add to your meteor app
-----------------------------

mrt add accounts-ui-bootstrap-3

How to use
-------------

Add {{ loginButtons }} to your template

Example:

```html
<div class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">Project name</a>
  </div>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Link</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      {{ loginButtons }} <!-- here -->
    </ul>
  </div>
</div>
```


Screenshots
-------------

![Sign In](https://dl.dropboxusercontent.com/u/7263172/1.png)
![Sign Up](https://dl.dropboxusercontent.com/u/7263172/2.png)
![Configure Login Service](https://dl.dropboxusercontent.com/u/7263172/3.png)
