
interface ApiRequestParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  uri: string;
  postData?: object;
}

const apiCall = async ({ method, uri, postData }: ApiRequestParams) => {
  try {
    const response = await fetch(uri, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' && method !== 'DELETE' ? JSON.stringify(postData) : null,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

export default apiCall;
