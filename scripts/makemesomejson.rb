#!/usr/bin/env ruby

# please forgive me for this 5 minute jank

require 'rubygems'
require 'json'

data = Hash.new

# find is faster than like everything
repos = `find ~/hub/tool-repos -iname 'readme*'`;

repos.split("\n").each do |r|
  p = r.split('/')
  name = p[5]
  git = `grep -A2 "#{name}/repo" ~/hub/tool-repos/.gitmodules |awk '/url/ {print $3}'`.strip

  readme = File.open(r, "r").read

  data[name] = {
    "readme" => readme, 
    "git" => git
  }
end

puts data.to_json
