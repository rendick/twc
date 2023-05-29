#!/bin/bash

PS3="Select your option please:  "

select lng in Install Quit; do
    case $lng in
    "Install")
        sudo npm install
        sleep 1
        echo -e "\nInstruction:\n"
        sleep 1
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
        echo -e "\nLaunching the script...\n"
        node index.js --help

		echo "2) Quit"
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
