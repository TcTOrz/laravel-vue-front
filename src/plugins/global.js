let BASE_API = '/';
let BASE_URL = 'http://pcm.web:9000';
if (process.env.NODE_ENV === 'production') {
  BASE_API = '/';
  BASE_URL = 'http://pcm.web:9000';
  // BASE_API = '/';
  // BASE_URL = 'http://pcm.web:3000';
}
export default {
  BASE_API,
  BASE_URL,
};
