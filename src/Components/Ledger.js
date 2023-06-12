import React from 'react'
import {Box, Text} from 'native-base'
import Colors from '../data/color';

export default function Ledger(item) {

    function numFormat (amount){
        const max = {  maximumFractionDigits: 2   } 
        return Intl.NumberFormat("en-US", max).format(amount)
    }

    function per(str) {
        if (!str || str.length === 0) {
          return "50%"; // Default value if str is undefined or empty
        }
      
        let le = str.length;
        switch (le) {
          case 14:
            return "70%";
          case 11:
            return "58%";
          case 12:
            return "60%";
          case 10:
          case 9:
            return "52%";
          case 8:
          case 7:
            return "48%";
          case 6:
            return "40%";
          case 5:
          case 4:
            return "37%";
          case 3:
            return "30%";
          default:
            return "50%"; // Default value if length doesn't match any case
        }
      }

    return (
        <Box paddingTop="1" paddingBottom="2" padding="3" w={per(item.price)} borderRadius="15" borderWidth="2" borderColor="white" bg="#5D5959" >
            <Text color="white" w="full" textAlign="right" bold>Cash</Text>
            <Text color={Colors.ledgerColor} textAlign="center" fontSize="xl" >Php {numFormat(item.price)}</Text>
        </Box>
    )
}