import React from 'react';
import { Button, ButtonGroup , Flex, Box, Heading, Spacer} from "@chakra-ui/react";

const Buttons = () => {
    return (
      <div>
        <Flex minWidth="max-content" alignItems="center" gap="2">
         
     
          <ButtonGroup gap="2">
            <Button colorScheme="teal">Account</Button>
      
          </ButtonGroup>
        </Flex>
      </div>
    );
};

export default Buttons;