const apiErrors = [
  {
    code: 400,
    message: 'Bad request',
    description: '',
  },
  {
    code: 401,
    message: 'Unauthorised',
    description: 'Invalid or missing access token',
  },
  {
    code: 403,
    message: 'Forbidden',
    description: 'The user is not authorized to complete this operation',
  },
  {
    code: 405,
    message: 'Method not allowed',
    description: 'Only POST requests are allowed',
  },
  {
    code: 500,
    message: 'Server error',
    description: 'Something went wrong',
  },
];

export const apiErrorObj = (code, prop) => apiErrors.filter(f => f.code === code)[0]?.[prop];

export const apiItinerary = async ({ endpoint, body }) => {
  const response = await fetch(`/api/itinerary${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();
  return responseJson;
};
