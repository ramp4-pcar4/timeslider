declare module 'vue-tippy';

declare module '*lang.csv' {
    import type { csvRows } from './lang';
    const content: csvRows;
    export default content;
}
