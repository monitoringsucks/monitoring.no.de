#!/usr/bin/env ruby

# please forgive me for this 5 minute jank

require 'rubygems'
require 'json'

data = Hash.new

# find is faster than like everything
repos = `find tool-repos -iname 'readme*'`;

repos.split("\n").each do |r|
  p = r.split('/')
  name = p[1]
  git = File.file?("tool-repos/#{name}/repo")

  data[name] = {
    "readme" => r, 
    "git" => git
  }
end

puts data.to_json
