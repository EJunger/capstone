import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { Container } from '../components/Container';
import { InputArea } from '../components/Input';
import { useRouter } from 'next/router';
import { useRegisterMutation } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../middleware/UrqlClientConfig';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          fName: '',
          lName: '',
          password: '',
          email: '',
        }}
        onSubmit={async (values) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            response.data.register.errors;
          } else if (response.data?.register.user) {
            router.push('/home');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputArea
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputArea
                name="fName"
                placeholder="first name"
                label="First Name"
              />
            </Box>
            <Box mt={4}>
              <InputArea
                name="lName"
                placeholder="last name"
                label="Last Name"
              />
            </Box>
            <Box mt={4}>
              <InputArea
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box mt={4}>
              <InputArea
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default withUrqlClient(createUrqlClient)(Register);
