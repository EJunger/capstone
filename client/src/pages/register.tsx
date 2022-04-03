import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { Container } from '../components/Container';
import { InputArea } from '../components/Input';
import { useMutation } from 'urql';
import { useRouter } from 'next/router';

interface RegisterProps {}

const REG_MUTATION = `
mutation Register($username: String!, $fName: String!, $lName: String!, $password: String!, $email: String!) {
  register(options: { username: $username, fName: $fName, lName: $lName, password: $password, email: $email }) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
`;

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useMutation(REG_MUTATION);
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
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
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

export default Register;
