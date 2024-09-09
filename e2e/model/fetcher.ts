import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost/webservice.php', // ここでベースURLを設定します
});

