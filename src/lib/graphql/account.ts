import { graphql } from "$houdini";

graphql`
	mutation SignIn($email: String!, $password: String!, $rememberMe: Boolean) {
		login(username: $email, password: $password, rememberMe: $rememberMe) {
			__typename
			... on CurrentUser {
				id
				identifier
			}
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation SignOut {
		logout {
			success
		}
	}
`;

graphql`
	mutation SignUp($input: RegisterCustomerInput!) {
		registerCustomerAccount(input: $input) {
			__typename
			... on Success {
				success
			}
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation VerifyCustomerAccount($token: String!, $password: String) {
		verifyCustomerAccount(token: $token, password: $password) {
			__typename
			... on CurrentUser {
				id
				identifier
			}
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation UpdateCustomer($input: UpdateCustomerInput!) {
		updateCustomer(input: $input) {
			__typename
		}
	}
`;

graphql`
	mutation RequestUpdateCustomerEmail($password: String!, $newEmailAddress: String!) {
		requestUpdateCustomerEmailAddress(password: $password, newEmailAddress: $newEmailAddress) {
			__typename
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation UpdateCustomerEmail($token: String!) {
		updateCustomerEmailAddress(token: $token) {
			__typename
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation ResetPassword($token: String!, $password: String!) {
		resetPassword(token: $token, password: $password) {
			__typename
			... on CurrentUser {
				id
				identifier
			}
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation RequestPasswordReset($emailAddress: String!) {
		requestPasswordReset(emailAddress: $emailAddress) {
			__typename
			... on Success {
				success
			}
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;