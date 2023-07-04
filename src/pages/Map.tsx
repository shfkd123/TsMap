import React, { useEffect } from "react";

import { Box, Center } from "@chakra-ui/react";

// useEffect(() => {
//   const mapDiv = document.getElementById("map");
//   const map = new window.naver.maps.Map(mapDiv);
// }, []);

const Map = () => {
  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Center bg="blue" h="100px" color="white">
        This is the Center
      </Center>
      <Box></Box>
    </>
  );
};

export default Map;
