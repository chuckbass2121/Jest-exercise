import axios from 'axios';

export const fetchData = () => {
	return axios.get('http://www.baidu.com');
};
