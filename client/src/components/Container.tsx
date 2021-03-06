import React from 'react';
import { Box } from '@chakra-ui/core';

interface WrapperProps {}

export const Container: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box mt={8} mx="auto" maxW="800px" w="100%">
      {children}
    </Box>
  );
};
