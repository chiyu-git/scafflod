import './app.css';
import './index.less';

const test = 'inline';
const test2 = 'lin';

async function foo() {
    const bar = await Promise.resolve();
    console.log('bar:', 456);
    return bar;
}
foo();
