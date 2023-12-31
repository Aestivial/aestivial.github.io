#!/bin/bash
while true; do
    echo -e "\e[32m$(shuf -n 1 -e 0 1)\e[0m"
    sleep 0.05

target="192.168.1.100"
vulnerable_port=8080

echo "Initiating phase 2: Exploiting Vulnerability"
echo "Exploiting vulnerable port $vulnerable_port on $target"

    echo $result | base64 | rev
}

function deobfuscate() {
    local data="$(cat)"
    local reversed=$(echo $data 
    | rev | base64 -d)
    local length=${#reversed}
    local result=""
    
        local hex_char="${reversed:$i:2}"
        local ascii_value=$((0x$hex_char))
        local new_ascii=$((ascii_value / 2))

echo "Vulnerability exploited. Gained partial control."
