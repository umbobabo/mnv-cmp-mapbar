function ecMapBar(config){
  var widget, widgetClassName = "mnv-ec-mapbar", container, log, prefix, settings, deepExtend;
  prefix = widgetClassName + "-";
  this.init = function(config){
    var defaultOptions = {
      buttons: {
        reset: {
          label: "Reset",
          hoverLabel:  "Zoom reset"
        },
        zoomIn: {
          label: "+",
          hoverLabel: "Zoom in"
        },
        zoomOut: {
          label: "-",
          hoverLabel: "Zoom out"
        }
      }
    };
    settings = deepExtend( defaultOptions, config );
    log(settings);
    container = document.querySelectorAll('.' + widgetClassName);
    if(container.length===0){
      log('Unable to find a widget with class ' + widgetClassName);
      return false;
    }
    container = container[0];
    zoomIn = document.createElement('button');
    zoomIn.className = prefix + "zoom-in";
    zoomIn.setAttribute('title', settings.buttons.zoomIn.hoverLabel );
    zoomIn.innerText = settings.buttons.zoomIn.label;
    zoomOut = document.createElement('button');
    zoomOut.className = prefix + "zoom-out";
    zoomOut.setAttribute('title', settings.buttons.zoomOut.hoverLabel );
    zoomOut.innerText = settings.buttons.zoomOut.label;
    container.appendChild(zoomIn);
    if(settings.buttons.reset){
      zoomReset = document.createElement('button');
      zoomReset.className = prefix + "zoom-reset";
      zoomReset.setAttribute('title', settings.buttons.reset.hoverLabel );
      zoomReset.innerText = settings.buttons.reset.label;
      container.appendChild(zoomReset);
    }
    container.appendChild(zoomOut);
  };

  log = function(txt){
    if(window.console && window.console.log){
      console.log(txt);
    }
  };
  // Overwrite the defaults properties
  deepExtend = function(destination, source) {
    for (var property in source) {
      if (source[property] && source[property].constructor &&
       source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        arguments.callee(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  };

  if(!config){
    log("You haven't provided a config object, this component will use this default settings");
    log(JSON.stringify(config));
  }

  this.init(config);
}
