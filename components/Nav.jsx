



import {
  Box,
  Flex,
  Input,
  Button,
  Avatar,
  Spacer,
  Stack,
  WrapItem,
  Wrap,
  Center
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

function Nav({ basket }) {
  return (
    <Box>
      <Flex align="center">
        <Box w="70px" h="70px">
          <SunIcon ml="10px" mt="10px" w="50px" h="50px" />
        </Box>

        <Spacer />

        <Box>
          <Input
            width="300px "
            mr=" 200px"
            padding="16px"
            border="1px solid black"
            borderRadius="4px"
            placeholder="Search products"
            size="md"
            borderWidth=".1px"
          />
        </Box>

        <Stack direction="row" spacing="4" align="center">
          <Box>
            <Button variant="outline" bg="white" padding="8px">
              Account
            </Button>
          </Box>

          <Box w="40px" h="30">
            <Wrap>
              <WrapItem>
                <Avatar
                  w="30px"
                  h="30px"
                  size="2xs"
                  borderRadius={"24px"}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </WrapItem>
            </Wrap>
          </Box>

          <Box color="black" ml="20px">
            <Button variant="outline" bg="white" padding="8px">
             Cart
            </Button>
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {basket}
            </span>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}


export default Nav;
