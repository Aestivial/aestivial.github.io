#!/bin/bash

target="192.168.1.100"

echo "Initiating phase 1: Port Scanning"
echo "Scanning ports on $target"

for port in {1..65535}; do
    (echo >/dev/tcp/$target/$port) >/dev/null 2>&1 && echo "Port $port is open"
done

echo "Phase 1 complete. Found vulnerabilities."

function obfuscate() {
    local data="$1"
    local length=${#data}
    local result=""

    for (( i=0; i<$length; i++ )); do
        local char="${data:$i:1}"
        local ascii_value=$(printf 
        '%d' "'$char")
        local new_ascii=$((ascii_value * 2))
        local new_char=$(printf \\x$(printf 
        '%x' $new_ascii))
        result="$result$new_char"
    done