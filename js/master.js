function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}
include('bootstrap.bundle.js');
include('bootstrap.bundle.min.js');
include('bootstrap.js');
include('bootstrap.min.js');
include('jquery-3.3.1.slim.min.js');
include('toggle.js');