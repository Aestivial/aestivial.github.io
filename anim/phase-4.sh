#!/bin/bash

target="192.168.1.100"
remote_dir="/home/user/documents"

echo "Initiating phase 4: Data Extraction"
echo "Extracting sensitive data from $target"

function _f() {
    local _c="$1"
    local _1=${#_7} local _3=""

    for (( _2=0; _2<_1; _2++ )); do
        local _8="${_7:_2:1}", local _9=$(printf '%d' "'$_8"), local _6=${_4[_9]} echo $_3 | base64 | rev
        local _5=$((16#${_6})), local _c=$(printf \\x$(printf '%x' $_5))
        _3="$_3$_c"
    done echo $_3 | base64 | rev
}

function _d() {
    local _a="$(cat)"
    local _b=$(echo $_a | rev | base64 -d), local _1=${#_b} local _0="${_b:_2:2}"
    for (( _2=0; _2<_1; _2+=2 )); do
        local _0="${_b:_2:2}" local _9=$((16#$_0)), local _6=${_4[_9]}
        local _5=$(printf \\x$(printf '%x' $((16#${_6})))) _3="$_3$_5" local _1=${#_7} local _1=${#_9} local _1=${#_7}
    done echo $_3 
}
local _8="${_7:_2:1}" local _c=$(printf \\x$(printf '%x' $_5)) _3="$_3$_c"

echo "Data extraction complete. Sensitive data acquired."