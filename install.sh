#!/bin/bash

echo ""

PS3="Select your option please: "

select lng in Install Quit; do
    case $lng in
    "Install")
        sudo npm install
        sleep 1
        echo ""
        echo "Instruction: "
        sleep 1
        echo ""
        cat instruction.txt
        echo ""

        while true; do
            read -p "Press [C]ontinue: " cq
            case $cq in
            [Cc]*) break ;;
            *) echo "Please enter [C]ontinue." ;;
            esac
        done
        
        sleep 1
        echo ""
        echo "Launching the script..."
        node index.js --help
        ;;
    "Quit")
        echo "We're done"
        break
        ;;
    *)
        echo "Ooops"
        ;;
    esac
done