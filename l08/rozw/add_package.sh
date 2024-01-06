#!/usr/bin/env sh
sed 's/^}/"module": "commonjs",\n}/g' package.json -i 
