#!/bin/bash

echo ""

PS3="Select your option please: "

select lng in Install Quit; do
    case $lng in
    "Install")
        sudo npm install
        sleep 2
        echo ""
        echo "Instruction: "
        sleep 2
        echo ""
        cat instruction.txt
        echo ""
        echo ""

        while true; do
            read -p "Press [C]ontinue: " cq
            case $cq in
            [Cc]*) break ;;
            *) echo "Please enter [C]ontinue." ;;
            esac
        done
        
        sleep 2
        echo ""
        echo "Launching the script..."
        sleep 0.5
        echo "..."
        sleep 0.5
        echo ".."
        sleep 0.5
        echo "."
        sleep 0.5
        echo "..."
        sleep 0.5
        echo "."
        sleep 0.5
        echo ".."
        npm start
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
