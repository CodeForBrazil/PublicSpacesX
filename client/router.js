Router.route("/", {
  name: "home",
  template: 'home',
  onBeforeAction: function() {
    this.next();
  }
});

Router.route("/events/now/:event_id?", {
  name: "events",
  template: "events",
  waitOn : function(){
    Meteor.subscribe("events");
  },
  data: {
    MapOptions: function() {
      Location.getLocation(); // Look at /client/lib/Location.js
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(gLati, gLongi),
          zoom: gZoom
        }
      }
    }
  },
  onBeforeAction: function() {
    $('body').addClass('page-events');
    this.next();
  },
  action : function () {
	  if (this.params && this.params.event_id) {

		  evt = Events.findOne({_id: this.params.event_id});

		  if (evt) {
		  	  console.log("Event " + this.params.event_id + " found");
			  $("meta[property='og:title']").attr("content", evt.name);
			  if (evt.description)
				  $("meta[property='og:description']").attr("content", evt.description);
			  if (Iron.Location.get() && Iron.Location.get().href) {
				  $("meta[property='og:url']").attr("content", Iron.Location.get().href);
				  $("meta[property='og:image']").attr("content", Iron.Location.get().rootUrl+"/img/logo.png");
			  }
		  } else {
		  	console.log("Event " + this.params.event_id + " not found");
		  }
	  }
	  this.render();
  },
  onStop: function() {
    $('body').removeClass('page-events');
  }, 
});

Router.route("/events/add", {
  name: "addEvents",
  template: "addEvents",
  waitOn : function(){
    Meteor.subscribe("categorias");
    Meteor.subscribe("events");
  },
  data: {
    MapOptions: function() {
      Location.getLocation();
      if (GoogleMaps.loaded()){
        return {
          center: new google.maps.LatLng(gLati, gLongi),
          zoom: 12
        }
      }
    }
  },
  onBeforeAction: function() {
    $('body').addClass('page-events');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page-events');
  },
});

Router.route("/events/old", {
  name: "oldEvents",
  template: "oldEvents",
  onBeforeAction: function() {
    $('body').addClass('page-events');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page-events');
  }
});

Router.route("/events/:event_id?", {
	  name: "editEvents",
	  template: "addEvents",
	  waitOn : function(){
		    Meteor.subscribe("categorias");
		    Meteor.subscribe("events");
	  },
	  data: {
	    MapOptions: function() {
	      Location.getLocation(); // Look at /client/lib/Location.js
	      if (GoogleMaps.loaded()) {
	        return {
	          zoom: gZoom
	        }
	      }
	    }
	  },
	  onBeforeAction: function() {
	    $('body').addClass('page-events');
	    this.next();
	  },
	  onStop: function() {
	    $('body').removeClass('page-events');
	  }, 
	});

Router.route("/places", {
  name: "places",
  template: "places",

  waitOn : function(){
    Meteor.subscribe("places");
  },

  data: {
    MapOptions: function() {
      Location.getLocation();
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(gLati, gLongi),
          zoom: gZoom
        }
      }
    }
  },

  onBeforeAction: function() {
    $('body').addClass('page-places');
    this.next();
  },

  onStop: function() {
    $('body').removeClass('page-places');
  }, 
});

