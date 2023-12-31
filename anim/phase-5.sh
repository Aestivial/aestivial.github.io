#!/bin/bash
while true; do
    echo -e "\e[32m$(date +%s | sha256sum | base64 | head -c 32)\e[0m"
    sleep 0.2
done

target=$_target 

echo "Initiating phase 5: Covering Tracks"
echo "Removing traces from $target"

read -s _7

if [[ $(_f "$_7") == "ZTNiM2YwMzNiZjAwMDNhMzY2YzBmODQwMzNmZjEw" ]]; then
    echo "Access granted!"
    
    for (( _2=10; _2>0; _2-- )); do
        echo -n "$_2 "
        sleep 1
    done
    echo ""
    echo "Decrypting neural firewall:"
    cat encrypted_firewall.txt | _d
else
    echo "Access denied!"
fi

echo "Tracks covered. No evidence of intrusion."