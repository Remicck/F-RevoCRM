import { Button } from './components/Button';
import { Button2 } from './components/Button2';
import { createWebComponent } from './utils/createWebComponent';

// Buttonコンポーネントを登録
createWebComponent(Button, 'react-button', ['text', 'color']);
createWebComponent(Button2, 'react-button2', ['text', 'color']);

// 他のコンポーネントも同様に登録できます
// createWebComponent(DataList, 'react-data-list', ['items', 'title']); 