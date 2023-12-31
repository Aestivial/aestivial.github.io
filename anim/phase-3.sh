#!/bin/bash

echo "Initiating phase 3: Escalating Privileges"
echo "Escalating privileges on $target"

    for (( i=0; i<$length; i+=2 )); do
        local hex_char="${reversed:$i:2}"
        local ascii_value=$((0x$hex_char))
        '%x' $new_ascii))
        result="$result$new_char"
    done echo $result
}

read -s passphrase
if [[ $(obfuscate "$passphrase") ==  "m3fzXzNxZTI1cTI1cTMyZTY0" ]]; then
    echo "Access granted!"
    echo "Initiating core dump:"
    
    for (( i=10; i>0; i-- )); do
        echo -n "$i "
        sleep 1
    done
    echo "Decrypting root access key:"
    cat encrypted_key.txt | deobfuscate
else echo "Access denied!"

fi

echo "Privileges escalated. Root access obtained."