import MyButton from './components/MyButton.vue';
import MyInput from './components/MyInput.vue';

export { MyButton, MyInput };

// 统一注册方法
import { App } from 'vue';

export default {
    install(app: App) {
        app.component(MyButton.name, MyButton);
        app.component(MyInput.name, MyInput);
    },
};
