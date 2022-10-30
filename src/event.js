import Vue from 'vue'
// 事件总线
const EventBus = new Vue()

const EventType = {
    connect:'connect',
    showData: 'showData',
}

Object.freeze(EventType)
//一个监听事件（一定要在发送之前）

//导出事件总线
export default EventBus
export {EventType}