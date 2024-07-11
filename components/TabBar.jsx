



import React from "react";
import { Tabs, TabList, Tab, HStack, Box ,Button} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const TabBar = () => {
  return (
    <div
      style={{
        height: "80px",
        padding: "20px",
        // Relative position to contain the absolute positioning of TabList
      }}
    >
      <HStack>
        <Box w="100%">
          <Tabs>
            <TabList
              style={{
                color: "black",

                bottom: "20px", // Adjust bottom value to match the padding value
                width: "100%",
              }}
            >
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Catogory
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              <Tab mr="20px">New</Tab>
              <Tab mr="20px">All products</Tab>
              <Tab mr="20px">Skin care</Tab>
              <Tab mr="20px"> Hair care</Tab>
            </TabList>
          </Tabs>
        </Box>
      </HStack>
    </div>
  );
};

export default TabBar;
