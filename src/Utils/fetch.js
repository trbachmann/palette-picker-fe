export const fetchData = async (path, options) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1${path}`, options)
    if(response.status >= 500) {
      const error = response.json()
      throw new Error(error)
    } else if (response.status >= 300 && response.status < 500) {
      const error = response.json()
      throw new Error(error)
    } else {
      return await response.json()
    }
};

export const createOptions = (method, data) => ({
  method,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
});