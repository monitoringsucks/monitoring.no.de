# MonitoringSucks

[monitoring.no.de](monitoring.no.de)

## why

Just a simple webui for one of our Ops Engineers who wished the repos were more browsable.  Let's make it better and leverage Joyent's free Node service to add features gh-pages won't provide us.  Or not.  :)

## how

This uses Express and load the repo information via json.  You'll find jank `find` -> json scripts in scripts/.  

To push to no.de, please message @flores or anyone else with access with your public key, and they will provide the .ssh/config for monitor.no.de
