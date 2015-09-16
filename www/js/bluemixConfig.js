/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
        initBluemix();
    },
/*    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
var ibmbluemix, ibmpush, push;

var config = {
  // applicationId:'a66d9349-125e-46c7-b2fd-2ec9f98f1e09',
  // applicationRoute:'http://mjkongTTT.mybluemix.net',
  // applicationSecret:'1e5b3a9b66e86682c0ec3f40b1b1f44d7db1f0b4'
  applicationId:'6202e48c-6349-4d0a-87da-ba192068d8de',
  applicationRoute:'http://gameApp-hj.mybluemix.net',
  applicationSecret:'b93099aa4fe3120554d6bd1126f91f58fbfcb001'
};

function initBluemix() {
	 var push;
      var config = {
        // applicationId:'a66d9349-125e-46c7-b2fd-2ec9f98f1e09',
        // applicationRoute:'http://mjkongTTT.mybluemix.net',
        // applicationSecret:'1e5b3a9b66e86682c0ec3f40b1b1f44d7db1f0b4'
        applicationId:'6202e48c-6349-4d0a-87da-ba192068d8de',
        applicationRoute:'http://gameApp-hj.mybluemix.net',
        applicationSecret:'b93099aa4fe3120554d6bd1126f91f58fbfcb001'
      };
      IBMBluemix.initialize(config).then(function(status) {
        console.log("IBM Bluemix Initialized", status);

        return IBMPush.initializeService();
      }, function(err) {
        console.error("IBM Bluemix initialized failed", err);
      }).then(function(pushObj) {
        console.log("IBM Push Initialized", pushObj);
        push = pushObj;

        console.log("----now to  register the device!");
        return pushObj.registerDevice("yes", "HJ123", "pushReceived");
      }, function(err) {
        console.error("IBM Bluemix Push initialized failed", err);
      });
}
/*
function initBluemix() {

	ibmbluemix = IBMBluemix.hybrid;
    ibmpush = IBMPush.hybrid;

    console.log("calling bluemix initialize with values---------------------------------");
    
    ibmbluemix.initialize(config).then(function(status) {

        console.log("IBM Bluemix Initialized", status);

        return ibmpush.initializeService();
     }, function (err) {
    	 console.error("IBM Bluemix initialized failed" , err);

     }).then(function(pushObj) {

    	  console.log("IBM Push Initialized", pushObj);
          //alert('push initialized: ' + JSON.stringify(pushObj));
    	  push = pushObj;

            console.log("-----now to register the device");
          return push.registerDevice("LisaTest","Lisa123","pushReceived");
      }, function (err) {
    	 console.error("IBM Bluemix Push initialized failed" , err);

     }); 
*/
/*
	  IBMBluemix.initialize(config).done(function(status){
      // Initialize the Services
      console.log("Successfully IBMBluemix initialized");
      IBMData.initializeService().done(function(status){
	        console.log("Successful initialisation Data Services " );
	      }, function(err){
	        console.log("Fail initialisation Data Services " );
      });

      IBMPush.initializeService().done(function(status){
        console.log("Successful initialisation Push Services ");
        var push = IBMPush.getService();
        push.registerDevice("Android", "hyjyang@kr.ibm.com", "pushReceived").done(function(response) {
            // Device successfully registered

            console.log("Successfully registered Device in IBMPush");
        }, function(err) {
            // Handle errors
            console.log("Fail registered Device in IBMPush");
        });
      },function(err){
        console.log("Fail initialisation Push Services ");
      });

    }, function(err){
        IBMBluemix.getLogger().error("Error intializing SDK");
    });*/
//}


function pushReceived(info) {
  console.log("registerListener - "+info.alert);
  // alert("got a push msg!" + info.alert);
  // alertNotification
}
