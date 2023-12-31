#!/bin/bash

target="192.168.1.100"

echo "Initiating phase 6: Leaving a Message"
echo "Leaving a message on $target's system"

message="You've been visited :)"

read -s _7

if [[ $(_f "$_7") == "ZTNiM2YwMzNiZjAwMDNhMzY2YzBmODQwMzNmZjEw" ]]; 

then
    echo "Access granted!"
    echo "Initializing quantum tunnel:"
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

echo "Message left. Operation complete."