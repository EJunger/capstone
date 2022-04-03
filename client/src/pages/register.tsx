import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { Container } from '../components/Container';
import { InputArea } from '../components/Input';
//import { useRegisterMutation } from '../generated/graphql';
//import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
//import { createUrqlClient } from '../utils/createUrqlClient';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          email: '',
          fName: '',
          lName: '',
          password: '',
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push('/');
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
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />
            </Box>
            <Box mt={4}>
              <InputArea name="fName" placeholder="fName" label="First Name" />
            </Box>
            <Box mt={4}>
              <InputArea name="lName" placeholder="lName" label="Last Name" />
            </Box>
            <Box mt={4}>
              <InputArea
                name="password"
                placeholder="password"
                label="Password"
                type="password"
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
