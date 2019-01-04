import axios from 'axios';

const HttpWrapper = (method, url, data,) => axios({
    method,
    url: `http://localhost:3000/${url}`,
    // headers: withHeaders ? HEADERS_WITH_AUTH() : HEADERS_DEFAULT,
    data,
  });

  export default HttpWrapper;